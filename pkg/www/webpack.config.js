// Webpack
const webpack = require("webpack");
const webpackMerge = require('webpack-merge');

// Webpack plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const AssetsPlugin = require("assets-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    const entrypoints = {
        "app": path.join(__dirname, 'assets/app/app.ts'),
    };

    const appCwd = path.join(__dirname, 'assets/app/pages');
    glob.sync("*/index.*(js|ts)", { cwd: appCwd })
        .forEach(entry => {
            const page = entry.substr(0, entry.indexOf('/'));
            entrypoints['pages-' + page] = `${appCwd}/${entry}`;
        });

    const blabsCwd = path.join(__dirname, 'assets/app/blabs');
    glob.sync("*/index.*(js|ts)", { cwd: blabsCwd })
        .forEach(entry => {
            const page = entry.substr(0, entry.indexOf('/'));
            entrypoints['blabs-' + page] = `${blabsCwd}/${entry}`;
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
    devtool: '#eval-source-map',
    node: {
        setImmediate: false,
        process: 'mock',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    module: {
        noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
        rules: [
            {
                test: /\.vue$/,
                use: [
                    ...!isDev ? [] : [
                        {
                            loader: 'cache-loader',
                            options: {
                                cacheDirectory: path.join(CACHE_PATH, "vue-loader"),
                                cacheIdentifier: [
                                    process.env.NODE_ENV || 'development',
                                    webpack.version,
                                    VUE_VERSION,
                                    VUE_LOADER_VERSION,
                                ].join('|'),
                            }
                        }
                    ],
                    ...[{
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            },
                            cacheDirectory: path.join(CACHE_PATH, "vue-loader"),
                            cacheIdentifier: [
                                process.env.NODE_ENV || 'development',
                                webpack.version,
                                VUE_VERSION,
                                VUE_LOADER_VERSION,
                            ].join('|'),
                        }
                    }],
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    ...!isDev ? [] : [
                        {
                            loader: 'cache-loader',
                            options: {
                                cacheDirectory: path.join(CACHE_PATH, "ts-loader"),
                            }
                        },
                    ],
                    ...[{
                        loader: 'awesome-typescript-loader',
                    }],
                ]
            },
            {
                test: /\.js$/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                use: [
                    ...!isDev ? [] : [
                        {
                            loader: 'cache-loader',
                            options: {
                                cacheDirectory: path.join(CACHE_PATH, "babel-loader"),
                            }
                        },
                        {
                            loader: 'thread-loader',
                            options: {
                                workers: require('os').cpus().length - 1,
                            },
                        },
                    ],
                    ...[{
                        loader: 'babel-loader',
                    }],
                ]
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                            modules: false,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [require("autoprefixer")]
                        }
                    },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'imgs/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp|ico)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'imgs/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        modules: [
            'node_modules',
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'assets/pages'),
        },
    },
    performance: {
        hints: false
    },
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

        // human webpack errors
        new FriendlyErrorsWebpackPlugin(),
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
                    test: /\.m?js(\?.*)?$/i,
                    chunkFilter: () => true,
                    warningsFilter: () => true,
                    extractComments: false,
                    sourceMap: true,
                    cache: true,
                    cacheKeys: defaultCacheKeys => defaultCacheKeys,
                    parallel: true,
                    include: undefined,
                    exclude: undefined,
                    minify: undefined,
                    terserOptions: {
                        output: {
                            comments: /^\**!|@preserve|@license|@cc_on/i
                        },
                        compress: {
                            arrows: false,
                            collapse_vars: false,
                            comparisons: false,
                            computed_props: false,
                            hoist_funs: false,
                            hoist_props: false,
                            hoist_vars: false,
                            inline: false,
                            loops: false,
                            negate_iife: false,
                            properties: false,
                            reduce_funcs: false,
                            reduce_vars: false,
                            switches: false,
                            toplevel: false,
                            typeofs: false,
                            booleans: true,
                            if_return: true,
                            sequences: true,
                            unused: true,
                            conditionals: true,
                            dead_code: true,
                            evaluate: true
                        },
                        mangle: {
                            safari10: true
                        }
                    }
                })
            ],
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
