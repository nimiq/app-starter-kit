import { version as CORE_VERSION } from '@nimiq/core-web/package.json';

// For importing types it is recommendable to use the type x = import('@nimiq/core-web).x notation which only imports
// the type without bundling the code.
type Nimiq = typeof import('@nimiq/core-web');

const coreBasePath = `https://cdn.nimiq.com/v${CORE_VERSION}/`;
const coreVariant = 'web'; // change this to 'web-offline' to load the smaller core package without network capabilities

let nimiqCorePromise: Promise<Nimiq> | null = null;
let nimiqCryptographyPromise: Promise<void> | null = null;

/**
 * Load the Nimiq core api from the cdn server. When using the core and its classes make sure to always load them via
 * this helper method and not from the @nimiq/core-web package to avoid it getting bundled. To reduce the load time, the
 * files are prefetched when the browser is idle (see prefetchCore).
 *
 * Note that the core package also includes a lazy loader (nimiq.js) which is however 40kb due to a bunch of bundled
 * polyfills that we do not want as webpack takes care of our polyfills. The core loader also does not give us the
 * freedom to load the cryptographic functions only when needed. Additionally, it enforces that only one window can have
 * a Nimiq core initialized at the same time which is however only required when using a non-volatile client that does
 * store the blockchain in the indexeddb. This is typically not what we want in the browser and is not required if we do
 * not sync the blockchain but only want to use blockchain primitives.
 */
export async function loadNimiqCore(): Promise<Nimiq> {
    nimiqCorePromise = nimiqCorePromise || new Promise((resolve, reject) => {
        const $head = document.getElementsByTagName('head')[0];
        const $script = document.createElement('script');
        $script.type = 'text/javascript';
        $script.onload = () => {
            $script.parentNode!.removeChild($script);
            resolve();
        };
        $script.onerror = () => {
            $script.parentNode!.removeChild($script);
            reject();
        };
        $script.src = `${coreBasePath}${coreVariant}.js`;
        $head.appendChild($script);
    }).then(
        () => {
            // @ts-ignore Nimiq is global but to discourage usage as global var we did not declare a global type.
            const { Nimiq } = window;
            return Nimiq;
        },
        (e) => {
            nimiqCorePromise = null;
            return Promise.reject(e);
        },
    );
    return nimiqCorePromise;
}

/**
 * Load the WebAssembly and module for cryptographic functions. You will have to do this before calculating hashes,
 * deriving keys or addresses, signing transactions or messages, etc.
 */
export async function loadNimiqCryptography(): Promise<void> {
    nimiqCryptographyPromise = nimiqCryptographyPromise || (async () => {
        const Nimiq = await loadNimiqCore();
        // Note that we don't need to cache a promise for doImport() as the core already does that.
        await Nimiq.WasmHelper.doImport();
        // After the wasm is loaded we can initialize the genesis config.
        Nimiq.GenesisConfig.main();
    })();
    return nimiqCryptographyPromise;
}

function prefetch(asset: string) {
    const $link = document.createElement('link');
    $link.rel = 'prefetch';
    $link.href = asset;
    const $head = document.getElementsByTagName('head')[0];
    $head.appendChild($link);
}

function prefetchCore() {
    prefetch(`${coreBasePath}${coreVariant}.js`);
}

function prefetchCryptography() {
    prefetch(`${coreBasePath}worker-wasm.js`);
    prefetch(`${coreBasePath}worker-wasm.wasm`);
}

// If the browser completely finished loading the page, start prefetching core assets with low priority.
if (document.readyState === 'complete') {
    prefetchCore();
    prefetchCryptography();
} else {
    window.addEventListener('load', () => {
        prefetchCore();
        prefetchCryptography();
    });
}
