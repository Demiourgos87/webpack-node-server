'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../dev.config.js');
const createDevServerConfig = require('../dev.config.js');

const compiler = webpack(createDevServerConfig);
const devServer = new WebpackDevServer(compiler, createDevServerConfig.devServer);

devServer.listen(3300);
