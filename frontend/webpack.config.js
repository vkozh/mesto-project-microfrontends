const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');

const deps = require("./package.json").dependencies;

const printCompilationMessage = require('./compilation.config.js');

const rules = [
    {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
            fullySpecified: false,
        },
    },
    {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
    },
    {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        },
    },
    {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["svg-url-loader"]
    },
    {
        test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
            },
        },
    },
];

const plugins = [
    new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
            'header': 'header@http://localhost:8082/remoteEntry.js',
            'auth': 'auth@http://localhost:8083/remoteEntry.js',

        },
        exposes: {},
        shared: {
            ...deps,
            "react": {
                singleton: true,
                eager: true,
                requiredVersion: deps.react,
            },
            "react-dom": {
                eager: true,
                singleton: true,
                requiredVersion: deps["react-dom"],
            },
            "react-router-dom": {
                eager: true,
                singleton: true,
                requiredVersion: deps["react-router-dom"],
            }
        },
    }),
    new HtmlWebPackPlugin({
        template: "./src/index.html",
    }),
    // new Dotenv()
]

const devServer = {
    //     progress: true, 
    //     /**hostOnly: true, BUG ValidationError: webpack Dev Server Invalid Options*/ 
    port: 8080,
    hot: true,
    compress: true,
    allowedHosts: 'all',
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, 'src')],
    onListening: function (devServer) {
        const port = devServer.server.address().port

        printCompilationMessage('compiling', port)

        devServer.compiler.hooks.done.tap('OutputMessagePlugin', (stats) => {
            setImmediate(() => {
                if (stats.hasErrors()) {
                    printCompilationMessage('failure', port)
                } else {
                    printCompilationMessage('success', port)
                }
            })
        })
    }
};

module.exports = (_, argv) => ({
    output: {
        publicPath: "http://localhost:8080/",
        path: path.resolve(__dirname, 'public'),
        clean: true,
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer,

    module: {
        rules
    },

    plugins,
});
