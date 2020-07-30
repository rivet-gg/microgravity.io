const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env["BABEL_ENV"] = "development";

module.exports = {
    entry: {
        client: "./src/client/client.js"
    },
    devtool: "source-map",
    mode: "development",
    output: {
        filename: "[name].[chunkhash:6].js",
        path: path.join(__dirname, "public"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({  // Compile HTML so it matches the client hash
            template: path.join(__dirname, "src", "index.html"),
            minify: true
        })
    ],
    stats: {
        colors: true
    },
    externals: {
        redis: true,
    },
};
