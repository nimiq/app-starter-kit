<template>
    <div class="nq-card">
        <div class="nq-card-header">
            <h2 class="nq-h2">Nimiq Core</h2>
        </div>
        <div class="nq-card-body">
            <p class="nq-text">
                The Nimiq Core is the underlying library of the Nimiq Blockchain and its parts like blocks,
                transactions, addresses, hashes, keys, signatures, etc. Have a look at our
                <a href="https://nimiq-network.github.io/developer-reference/" target="_blank" rel="noopener">
                    description of the protocol architecture
                </a>
                and the
                <a href="https://doc.esdoc.org/github.com/nimiq/core-js/" target="_blank" rel="noopener">
                    API documentation</a>.
            </p>
            <p class="nq-text">
                As an example, the following demo uses the Core cryptography to calculate a hash from an input text:
            </p>
            <p class="nq-text">
                <input v-model="hashInput" class="nq-input">
                <button class="nq-button-pill light-blue" @click="calculateHash">Calculate Hash</button>
            </p>
            <p class="nq-text hash" v-if="hash">
                Hash: {{hash}}
            </p>
            <p class="nq-text">
                The way the Core is included in this template follows some assumptions or best practices:
            </p>
            <ul class="nq-text">
                <li>
                    As the Nimiq Hub abstracts away from direct interaction with the Nimiq Core for typical use
                    cases like transaction signing, you will need the Core only in some specific cases. For this
                    reason the Core is lazy loaded on demand in this app starter kit or if the browser is idle
                    prefetched with low priority. If you are sure that you need the Core api in any case and soon
                    after page load, you can replace the prefetch by a higher priority preload. To configure this,
                    have a look at the instructions in <em>CoreLoader.ts</em> and <em>public/index.html</em>.
                </li>
                <li>
                    There are two versions of the Core Api, a full version and one that does not include network
                    capabilities and is significantly smaller. Even though connecting and syncing with the network is
                    typically handled by the Nimiq Network Client, the app starter kit is set up to prefetch the full
                    client version nonetheless to already cache it for the Network Client and to avoid loading both
                    versions. If you do not intent to connect to the network via the Core Api directly or to use the
                    Network Client, you should switch to the smaller version in <em>CoreLoader.ts</em>.
                </li>
            </ul>
            <p class="nq-text">
                Note that cryptographic operations like computing a hash, signing a transaction or deriving a public
                key require an additional WebAssembly file to be loaded. If you do not intend to use cryptography, you
                can revert the <em>Setup @nimiq/core-web cryptography</em> commit.
            </p>
            <p class="nq-text">
                If you do not need the Nimiq Core library at all, you can revert the <em>Setup @nimiq/core-web</em>
                commit.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { loadNimiqCore, loadNimiqCryptography } from '../lib/CoreLoader';

@Component
export default class CoreInfo extends Vue {
    private hashInput: string = 'Input text to hash.';
    private hash: string = '';

    private async calculateHash() {
        // alternatively, if network isn't needed: const Nimiq = await loadNimiqCoreOnly();
        const Nimiq = await loadNimiqWithCryptography();
        const inputBytes = Nimiq.BufferUtils.fromAscii(this.hashInput);
        this.hash = Nimiq.Hash.light(inputBytes).toHex();
    }
}
</script>

<style scoped>
.nq-button-pill {
    margin-left: 2rem;
}

.hash {
    word-break: break-all;
}

ul {
    padding-inline-start: 2.5rem;
}
</style>
