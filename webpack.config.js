var path       = require("path");
var webpack    = require("webpack");
module.exports = {
	context: __dirname + "/src",
	entry  : __dirname + '/src/main',
	output: {
		path             : __dirname + '/build',
		filename         : 'bundle.js',
		sourceMapFilename: 'source.js.map',
	},

	devtool: 'inline-source-map',
	debug  : false,
	devServer: { inline: true },

	module : {
		loaders: [
			{test: /\.html$/, loader: 'raw'},
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.js$/, loader: 'babel', exclude: [/node_modules/]},
		]
	},
	include: [
		path.resolve(__dirname, "src"),
		path.resolve(__dirname, "index.html")
	],
	resolve: {
		modulesDirectories: ["node_modules"]
	}

};
