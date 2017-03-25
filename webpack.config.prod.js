import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    entry: path.join(__dirname, 'src/index.js'),

    output: {
        path: path.join(__dirname + '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    target: 'web',

    devtool: 'sourcemap',

    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
			{test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('css?sourceMap')},
			{test: /\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})},
			{test: /\.(png|jpg)$/, loader: ['url-loader']}
        ]
    }
};
