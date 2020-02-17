const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const path = require('path');
const CORE_VERSION = require('@nimiq/core-web/package.json').version;

const BROWSER_WARNING = fs.readFileSync(
    path.join(__dirname, '/node_modules/@nimiq/browser-warning/dist/browser-warning.html.template'));

const configureWebpack = {
    plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/@nimiq/vue-components/dist/img/iqons.min*.svg', to: 'img/iqons.min.svg' },
            { from: 'node_modules/@nimiq/browser-warning/dist', to: './' },
        ]),
    ],
};

const chainWebpack = (config) => {
    // inject core version into HtmlWebpackPlugin for use in public/index.html
    config
        .plugin('html')
        .tap((args) => {
            args[0].CORE_VERSION = CORE_VERSION;
            args[0].BROWSER_WARNING = BROWSER_WARNING;
            return args;
        });
};

module.exports = {
    configureWebpack,
    chainWebpack,
};
