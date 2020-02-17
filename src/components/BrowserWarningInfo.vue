<template>
    <div class="nq-card">
        <div class="nq-card-header">
            <h2 class="nq-h2">Browser Support Detection</h2>
        </div>
        <div class="nq-card-body">
            <p class="nq-text">
                Some outdated browsers or specific constellations are not compatible with the Nimiq Core, Network or Hub
                libraries, for example browsers with disabled JavaScript or private tabs in browsers that block local
                database access in private mode. This template is set up to automatically display a warning and user
                hints in such cases. To test it out try opening this page for example with disabled JavaScript or in a
                Firefox private tab.
            </p>
            <p class="nq-text">
                Typically, the default setup should suit you without further configuration. However, if you want to
                adapt the displayed error messages or the behavior on error, have a look at the
                <a href="https://github.com/nimiq/browser-warning" target="_blank" rel="noopener">
                    documentation</a>.
            </p>
            <p class="nq-text">
                If you do not use the Nimiq Core, Network or Hub libraries, you can remove the browser warnings by
                reverting the <em>Setup @nimiq/browser-warning</em> commit.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'BrowserWarningInfo',
};
</script>
