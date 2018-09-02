const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    devtool: "source-map",
    devServer: {
        hot: true,
        inline: true,
        port: 7700,
        historyApiFallback: true
    },
    plugins: [        
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]
});