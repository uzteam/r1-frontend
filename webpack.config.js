const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/js/index.js', './src/scss/style.scss'],
    output: {
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [
            { // sass / scss loader for webpack
                test: /\.(css|sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'dist/bundle.css',
            allChunks: true,
        })
    ]
};