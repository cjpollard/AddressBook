const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    devtool: "cheap-module-source-map",
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            // A common mistake is not stringifying the "production" string.
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
    ]
});