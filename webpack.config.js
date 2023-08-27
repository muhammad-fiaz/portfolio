const path = require('path');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // Import CssMinimizerPlugin
const CompressionPlugin = require('compression-webpack-plugin'); // Import CompressionPlugin

module.exports = {
    entry: './pages/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: process.env.NODE_ENV === 'development', // Disable in development
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader', // Use MiniCssExtractPlugin.loader in production
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            new CssMinimizerPlugin(), // Add CssMinimizerPlugin to minimizer array
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        /*
        new BundleAnalyzerPlugin(

            {
                analyzerMode: 'static', // Generate report file instead of opening it in the browser
                reportFilename: 'bundle-report.html', // Specify the filename for the report
            }
        ),
        */
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new CompressionPlugin(), // Add CompressionPlugin to plugins

    ],
    performance: {
        maxAssetSize: 10000000000,
    },
};
