const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {

    entry: ["babel-polyfill", path.join(__dirname, "client", "index")],
    output: {
        path: path.join(__dirname, "public/build"),
        publicPath: "/public/",
        filename: "[name].client_bundle.js",
        sourceMapFilename: "client_bundle_src.map"
    },
    externals: {
        "cheerio": "window",
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules\//,
                query: {
                    plugins: ["transform-decorators-legacy","transform-class-properties","lodash"],
                    presets: ["react", "env", "stage-0"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?root=."
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["public/build"]),
        new webpack.ProvidePlugin({
            grapesjs: "grapesjs"
        }),
        new LodashModuleReplacementPlugin
    ],
    node: {
        console: true,
        fs: "empty",
        net: "empty",
        tls: "empty"
    },
    optimization: {
        namedChunks: true,
        splitChunks: {
            maxAsyncRequests: 6,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    reuseExistingChunk: true,
                    chunks: "all"
                }
            }
        }
    }
};