const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        index: path.resolve(__dirname, "./App.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWepackPlugin({
            template: path.resolve(__dirname, "./index.html")
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets", to: "./assets" }
            ]
        })
    ]
};
