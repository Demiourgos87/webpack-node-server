var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    path = require('path');

// ----- Output file paths
var outputDir = 'dist/',
    cssOutput = 'css/main.[chunkhash:8].css',
    jsOutput = 'js/main.[chunkhash:8].bundle.js';

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: jsOutput
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['babel-preset-env'] }
                }
            },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader?url=false", "postcss-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/js', 'dist/css']),
        new ExtractTextPlugin(cssOutput),
        new HtmlWebpackPlugin({
            title: 'Diwanee',
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
