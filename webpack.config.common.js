var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
const webpack = require('webpack');

module.exports = {

    entry: APP_DIR + '/index.tsx',

    output: {
        path: BUILD_DIR,
        filename: "module.bundle.js",
        publicPath: "/dist/"
    },

    performance: { hints: false },
    mode: "production",

    devServer: {
        hot: true
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
            , {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }
                    , {
                        loader: "css-loader"
                    }
                    , {
                        loader: "sass-loader",
                        options: {
                        }
                    }
                ]
            }
            , {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }
                    , {
                        loader: "css-loader"
                    }
                ]
            }
            ,{
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     loader: "source-map-loader"
            // }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};