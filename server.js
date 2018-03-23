const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 告诉express使用webpack-dev-middleware，以webpack.config.js为基础来配置文件
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

// 以3000端口启动服务
app.listen(3000, function() {
	console.log('Example app listening on port 3000!\n');
})