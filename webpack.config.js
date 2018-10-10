// Webpack
const webpack = require("webpack");

// Webpack plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Webpack abilities
const WEBPACK_REPORT = process.env.WEBPACK_REPORT || false;

// Vue
const VUE_VERSION = require('vue/package.json').version;
const VUE_LOADER_VERSION = require('vue-loader/package.json').version;

// Node
const path = require('path');

// Utils
const isDev = process.env.NODE_ENV !== 'production';

// Config
const ROOT_PATH = __dirname;
const CACHE_PATH = ROOT_PATH + '/temp/webpack';

module.exports = {
    entry: {
        main: './assets/main.ts',
        resume: './assets/resume.js',
    },
    output: {
        path: path.resolve(__dirname, "static/dist"),
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    },
                    cacheDirectory: path.join(CACHE_PATH, 'vue-loader'),
                    cacheIdentifier: [
                        process.env.NODE_ENV || 'development',
                        webpack.version,
                        VUE_VERSION,
                        VUE_LOADER_VERSION,
                    ].join('|'),
                },
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.js$/,
                exclude: path => /node_modules/.test(path) && !/\.vue\.js/.test(path),
                loader: 'babel-loader',
                options: {
                    cacheDirectory: path.join(CACHE_PATH, 'babel-loader'),
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            minimize: true,
                            discardComments: {removeAll: true},
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            minimize: true,
                            discardComments: {removeAll: true},
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            strictMath: true,
                            noIeCompat: true
                        }
                    }
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            minimize: true,
                            discardComments: {removeAll: true},
                        }
                    },
                    {loader: 'sass-loader'},
                ]
            },
            {

                test: /\.(eot|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 50000,
                        name: "./fonts/[name].[ext]",
                    }
                },
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'assests/main/vue'),
        },
    },
    performance: {
        hints: false
    },
    node: {fs: 'empty'},
    devtool: '#eval-source-map',
    plugins: [
        // prevent pikaday from including moment.js
        new webpack.IgnorePlugin(/moment/, /pikaday/),

        // enable vue-loader to use existing loader rules for other module types
        new VueLoaderPlugin(),

        // extract css
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
};

if (WEBPACK_REPORT) {
    module.exports.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            generateStatsFile: true,
            openAnalyzer: false,
            reportFilename: path.join(CACHE_PATH, 'webpack-report/index.html'),
            statsFilename: path.join(CACHE_PATH, 'webpack-report/stats.json'),
        })
    );
}

if (!isDev) {
    module.exports.devtool = '#source-map';
    module.exports.optimization = {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    cache: `${CACHE_PATH}/webpack/terser`,
                    parallel: true,
                    ecma: 8,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false
                }
            })
        ]
    };

    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true,
                },
            },
        }),
    ])
}
