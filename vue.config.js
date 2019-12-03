// Merge slot: CopyWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Merge slot: nimiq-core

// Merge slot: nimiq-browser-warning

// Merge slot: configureWebpack
const configureWebpack = {
    plugins: [
        new CopyWebpackPlugin([
            // Merge slot: nimiq-vue-components-identicons
            { from: 'node_modules/@nimiq/vue-components/dist/img/iqons.min*.svg', to: 'img/iqons.min.svg' },
            // Merge slot: nimiq-browser-warning
        ]),
    ],
};

// Merge slot: chainWebpack

module.exports = {
    // Merge slot: configureWebpack
    configureWebpack,
    // Merge slot: chainWebpack
};
