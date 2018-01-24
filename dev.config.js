var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackBuildNotifierPlugin = require('webpack-build-notifier'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    // HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin'),
    path = require('path');

// ----- Output file paths
// var outputDir = 'dist/',
//     cssOutput = 'css/main.css',
//     jsOutput = 'js/main.bundle.js';

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            // ----- JS ES2015 compiling
            { test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['babel-preset-env'] }
                }
            },
            // ----- SCSS compiling
            // {
            //     test: /\.scss$/,
            //     use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: [
            //             { loader: "css-loader", options: { sourceMap: true, url: false } },
            //             { loader: "postcss-loader", options: { sourceMap: true } },
            //             {
            //                 loader: "sass-loader",
            //                 options: {
            //                     sourceMap: true,
            //                     outputStyle: "expanded",
            //                     sourceMapContents: true
            //                 }
            //             }
            //         ]
            //     }))
            // }
            
          //   {
          //   test: /\.scss$/,
          //   use: [
          //     require.resolve('style-loader'),
          //     {
          //       loader: require.resolve('css-loader'),
          //       options: {
          //         importLoaders: 1,
          //         url: false
          //       },
          //     },
          //     {
          //       loader: require.resolve('sass-loader'),
          //       options: {
          //         // Necessary for external CSS imports to work
          //         // https://github.com/facebookincubator/create-react-app/issues/2677
          //         ident: 'postcss',
          //         plugins: () => [
          //           require('postcss-flexbugs-fixes'),
          //           autoprefixer({
          //             browsers: [
          //               '>1%',
          //               'last 4 versions',
          //               'Firefox ESR',
          //               'not ie < 9', // React doesn't support IE8 anyway
          //             ],
          //             flexbox: 'no-2009',
          //           }),
          //         ],
          //       },
          //     },
          //   ],
          // },
        ]
    },
    // ----- Webpack dev server options
    devServer: {
        publicPath: '/src/',
        contentBase: path.join(__dirname, '/src/'),
        watchContentBase: true,
        compress: true,
        port: 3300,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        // ----- Output compiled css file
        // new ExtractTextPlugin({
        //     filename: cssOutput,
        //     allChunks: true
        // }),
        new WebpackBuildNotifierPlugin({
            title: "Webpack",
            suppressSuccess: false
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: './src/index.html',
            // alwaysWriteToDisk: true
        })
        // new HtmlWebpackHarddiskPlugin()
    ]
};
