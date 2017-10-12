/* eslint-disable no-console, import/no-extraneous-dependencies */

const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

const devBuildConfig = require('./webpack.dev.config');

console.log('>>>> server.dev > devBuildConfig <<<<: ', devBuildConfig);

/*
{ entry: 
   [ 'webpack-hot-middleware/client',
     'tether',
     'font-awesome-loader',
     'bootstrap-loader/lib/bootstrap.loader?configFilePath=/Users/robertsnith/Documents/PDFs9/css-modules/./.bootstraprc!bootstrap-loader/no-op.js',
     './app/startup/App' ],
  output: 
   { path: '/Users/robertsnith/Documents/PDFs9/css-modules/public/assets',
     filename: 'app.js',
     publicPath: '/assets/' },
  devtool: '#cheap-module-eval-source-map',
  resolve: { extensions: [ '*', '.js', '.jsx' ] },
  plugins: 
   [ HotModuleReplacementPlugin { multiStep: undefined, fullBuildTimeout: 200 },
     NoEmitOnErrorsPlugin {},
     ProvidePlugin { definitions: [Object] },
     LoaderOptionsPlugin { options: [Object] } ],
  module: { rules: [ [Object], [Object], [Object], [Object], [Object] ] } 
}
*/

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || 4000;

const server = express();
const compiler = webpack(devBuildConfig);

server.use(webpackDevMiddleware(compiler, {
  publicPath: devBuildConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false,
  },
}));

server.use(webpackHotMiddleware(compiler));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/', (req, res) => ( // eslint-disable-line no-unused-vars
  res.sendFile(path.join(__dirname, 'app', 'markup', 'bootstrap-dev.html'))
));

server.listen(PORT, IP, err => {
  if (err) console.log(`=> OMG!!! 🙀 ${err}`);
  console.log(`=> 🔥  Webpack dev server is running on port ${PORT}`);
});
