// Merge slot: CopyWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Merge slot: nimiq-core

// Merge slot: nimiq-browser-warning
const fs = require('fs');
const path = require('path');

const BROWSER_WARNING = fs.readFileSync(
    path.join(__dirname, '/node_modules/@nimiq/browser-warning/dist/browser-warning.html.template'));

// Merge slot: configureWebpack
const configureWebpack = {
    plugins: [
        new CopyWebpackPlugin([
            // Merge slot: nimiq-vue-components-identicons
            // Merge slot: nimiq-browser-warning
            { from: 'node_modules/@nimiq/browser-warning/dist', to: './' },
        ]),
    ],
};

// Merge slot: chainWebpack
const chainWebpack = (config) => {
    config
        .plugin('html')
        .tap((args) => {
            // Merge slot: nimiq-core
            // Merge slot: nimiq-browser-warning
            // Inject browser warning into HtmlWebpackPlugin for use in public/index.html
            args[0].BROWSER_WARNING = BROWSER_WARNING;
            return args;
        });
};

module.exports = {
    // Merge slot: configureWebpack
    configureWebpack,
    // Merge slot: chainWebpack
    chainWebpack,
};
