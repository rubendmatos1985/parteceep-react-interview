const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: [ '@babel/polyfill', './src/index.js' ],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(jpg | png | gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							context: '',
							outputPath: './images'
						}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'css-loader',
					'style-loader'
				]
			}
		]
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.IgnorePlugin({
			resourceRegExp: /^\.\/node_modules$/
		}),
		new CleanWebpackPlugin(['dist'])
	]
};
