const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "swc-loader",
                    options: {
                        jsc: {
                            parser: {
                                syntax: "typescript"
                            }
                        }
                    }
                }
            },
            // {
            //     test: /\.ts?$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "swc-loader",
            //         options: {
            //             jsc: {
            //                 parser: {
            //                     syntax: "typescript"
            //                 }
            //             }
            //         }
            //     }
            // },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: `./tsconfig.json`,
                baseUrl: '.',
            }),
        ],

    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

    ],
};
