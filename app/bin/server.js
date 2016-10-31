'use strict';
const path = require('path');
const koa = require('koa');
const promise = require('bluebird');
const logger = require('koa-logger');
const staticServer = require('koa-static');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const routes = require('../router');
const config = require('../config/server.conf');

const webpack = require('webpack');
const webpackMiddleware = require('koa-webpack-dev-middleware');
const webpackConfig = require('../../webpack/webpack.config.dev');

const compiler = webpack(webpackConfig);

global.Promise = promise;
const app = koa();
app.use(webpackMiddleware(compiler, {
  noInfo: true,
  hot: true,
  inline: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
}));
app.use(staticServer(path.join(__dirname, './src')));
render(app, config.render);
app.use(logger());
app.use(bodyParser());
app.use(routes.middleware());
app.listen(config.port || 3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🌎  Listening on %s , Open up http://localhost: %s/ in your browser.', config.port, config.port);
  }
});
