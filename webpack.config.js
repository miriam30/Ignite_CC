const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
    entry: `${SRC_DIR}/App.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'env']
            }
        }]
    }
};
