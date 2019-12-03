const CopyWebpackPlugin = require('copy-webpack-plugin');

const configureWebpack = {
    plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/@nimiq/vue-components/dist/img/iqons.min*.svg', to: 'img/iqons.min.svg' },
        ]),
    ],
};

module.exports = { configureWebpack };
