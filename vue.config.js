// Merge slot: CopyWebpackPlugin
// Merge slot: nimiq-core
const CORE_VERSION = require('@nimiq/core-web/package.json').version;

// Merge slot: nimiq-browser-warning

// Merge slot: configureWebpack

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
    // Merge slot: chainWebpack
    chainWebpack,
};
