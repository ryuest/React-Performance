const webpack = require('webpack'),
			ExtractTextPlugin = require('extract-text-webpack-plugin'),
			OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
	entry:['./source/client.js'],
	output:{
		path:"./public",
		filename:'index.js'
	},
	devtool:'cheap-module-source-map',
	module:{
		loaders:[
			{test:/\.js$/, exclude:/node_modules/ , loader:'babel'},
			{test:/\.css$/ , loader:ExtractTextPlugin.extract(['css'])},
			{test:/\.(sass|scss)$/,loader:ExtractTextPlugin.extract(['css','sass'])}
		]
	},
	plugins:[
		new ExtractTextPlugin("app.css"),
		new webpack.DefinePlugin({server:false}),
		new OptimizeCSSAssetsPlugin({
			cssProcessor: require('cssnano'),
			cssProcessorOptions:{
				//discardComments:false
			}
		}),
		new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	    }
	  }),
	  new webpack.optimize.UglifyJsPlugin({
	  	compress:{warnings:false}
	  })
	]
};



