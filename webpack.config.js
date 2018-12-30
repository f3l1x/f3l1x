// Webpack
const webpack = require("webpack");
const webpackMerge = require('webpack-merge');

// Webpack plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const AssetsPlugin = require("assets-webpack-plugin");

// Webpack abilities / addons
const WEBPACK_REPORT = process.env.WEBPACK_REPORT || false;

// Vue
const VUE_VERSION = require('vue/package.json').version;
const VUE_LOADER_VERSION = require('vue-loader/package.json').version;

// Node
const path = require('path');
const glob = require('glob');

// Utils
const isDev = process.env.NODE_ENV !== 'production';

// Config
const CACHE_PATH = __dirname + '/temp/webpack';

// ===========================
// Entrypoints ===============
// ===========================

function getEntrypoints() {
    const entrypoints = {};

    const cwd = path.join(__dirname, 'assets/pages');
    glob.sync("*/index.*(js|ts)", {
        cwd
    }).forEach(entry => {
        const page = entry.substr(0, entry.indexOf('/'));
        entrypoints[page] = `${cwd}/${entry}`;
    });

    return entrypoints;
}

// ===========================
// Default ===================
// ===========================

module.exports = {
    entry: getEntrypoints(),
    output: {
        path: path.resolve(__dirname, "static/dist"),
        publicPath: "/dist/",
        filename: !isDev ? '[name].[chunkhash:8].js' : '[name].js',
        chunkFilename: !isDev ? '[id].[chunkhash:8].js' : '[name].js',
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
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        }
                    },
                    {loader: 'sass-loader'},
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
            '@': path.resolve(__dirname, 'assets/sites/f3l1x'),
        },
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        // prevent pikaday from including moment.js
        new webpack.IgnorePlugin(/moment/, /pikaday/),

        // enable vue-loader to use existing loader rules for other module types
        new VueLoaderPlugin(),

        // extract css
        new MiniCssExtractPlugin({
            filename: !isDev ? '[name].[chunkhash:8].css' : '[name].css',
            chunkFilename: !isDev ? '[id].[chunkhash:8].css' : '[id].css',
        }),

        // create manifest to connect with Hugo
        new AssetsPlugin({
            filename: "webpack.json",
            path: path.join(process.cwd(), "data"),
            prettyPrint: true
        }),
    ],
};

// ===========================
// Development ===============
// ===========================

if (isDev) {
    module.exports = webpackMerge(module.exports, {
        devServer: {
            port: process.env.PORT || 3000,
            contentBase: path.join(process.cwd(), "public"),
            disableHostCheck: true,
            stats: "none",
            quiet: false,
            open: true,
            hot: true,
            inline: true,
            proxy: {
                '/': `http://${process.env.PROXY_HOST || '0.0.0.0'}:${process.env.PROXY_PORT || 1313}`
            }
        },
    });
}

// ===========================
// Production ================
// ===========================

if (!isDev) {
    module.exports = webpackMerge(module.exports, {
        devtool: '#source-map',
        optimization: {
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
        },
        plugins: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true,
                    },
                },
            }),
        ]
    });
}

// ===========================
// Addons ====================
// ===========================
if (WEBPACK_REPORT) {
    module.exports = webpackMerge(module.exports, {
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                generateStatsFile: true,
                openAnalyzer: false,
                reportFilename: path.join(CACHE_PATH, 'webpack-report/index.html'),
                statsFilename: path.join(CACHE_PATH, 'webpack-report/stats.json'),
            })
        ]
    });
}
