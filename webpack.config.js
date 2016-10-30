module.exports = {
	entry: ['babel-polyfill', 'isomorphic-fetch', './src/game.js'],
	output: {
		path: __dirname + '/dist/',
		publicPath: 'dist/',
		filename: 'build.js'
	},
	module: {
		loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
	},
	babel: {
		presets: ['es2015', 'stage-2'],
		plugins: ['transform-runtime']
	}
};
