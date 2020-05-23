// Merge slot: CopyWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Merge slot: nimiq-core
const CORE_VERSION = require('@nimiq/core-web/package.json').version;

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
const chainWebpack = (config) => {
    config
        .plugin('html')
        .tap((args) => {
            // Merge slot: nimiq-core
            // Inject core version into HtmlWebpackPlugin for use in public/index.html
            args[0].CORE_VERSION = CORE_VERSION;
            // Merge slot: nimiq-browser-warning
            return args;
        });
};

module.exports = {
    // Merge slot: configureWebpack
    configureWebpack,
    // Merge slot: chainWebpack
    chainWebpack,
};
