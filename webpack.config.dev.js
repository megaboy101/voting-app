import path from 'path';

export default {
	entry: path.resolve(__dirname, 'src/index.js'),

	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.scss$/, exclude: /node_modules/, loader: ['style-loader', 'css-loader', 'sass-loader']},
			{test: /\.(jpg|png)$/, exclude: /node_modules/, loader: 'url-loader'}
		]
	},

	target: 'web',

	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	//
	// debug: true,
	// noInfo: false,
	// devtool: 'cheap-module-eval-source-map'
}
