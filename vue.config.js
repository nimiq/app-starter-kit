const CopyWebpackPlugin = require('copy-webpack-plugin');
const CORE_VERSION = require('@nimiq/core-web/package.json').version;

const configureWebpack = {
    plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/@nimiq/vue-components/dist/img/iqons.min*.svg', to: 'img/iqons.min.svg' },
        ]),
    ],
};

const chainWebpack = (config) => {
    // inject core version into HtmlWebpackPlugin for use in public/index.html
    config
        .plugin('html')
        .tap((args) => {
            args[0].CORE_VERSION = CORE_VERSION;
            return args;
        });
};

module.exports = {
    configureWebpack,
    chainWebpack,
};
