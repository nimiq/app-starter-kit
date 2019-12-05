<template>
    <div class="nq-card">
        <div class="nq-card-header">
            <h2 class="nq-h2">Nimiq Styling</h2>
        </div>
        <div class="nq-card-body">
            <p class="nq-text">
                This app template includes the default
                <a href="https://github.com/nimiq/nimiq-style" target="_blank" rel="noopener">styling framework</a>
                of Nimiq Ecosystem apps which follows the
                <a href="https://www.nimiq.com/styleguide" target="_blank" rel="noopener">Nimiq Styleguide</a>.
                <br>
                See
                <a href="https://nimiq.github.io/nimiq-style/demo.html" target="_blank" rel="noopener">
                    here for a complete demo </a>.
            </p>
            <p class="nq-text">
                Additionally,
                <a href="https://fonts.google.com/specimen/Muli" target="_blank" rel="noopener">Muli</a>
                is included as default font and a subset of
                <a href="https://fonts.google.com/specimen/Fira+Mono" target="_blank" rel="noopener">Fira Mono</a>
                for display of Nimiq Addresses.
            </p>
            <p class="nq-text">
                If you do not want to use and include the Nimiq style framework, you can simply revert the
                <em>Setup @nimiq/style</em>
                commit in this project.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StyleInfo',
};
</script>
