/**
 * 使用说明，
 * target: 需要代理到的环境，
 * 1、修改 config API_HOST.WEB 的值为
 * http://localhost:2999/api,
 * 2、执行 npm run dev
 * 3、执行本脚本
 */


const express = require('express');
const proxy = require('http-proxy-middleware');

// 本地开发服务，如果端口改变需要修改端口至相应的头
const devHost = 'http://localhost:8000';

const app = express();

app.use('/api', proxy({
  target: 'https://blog.kuchain.io',
  changeOrigin: true,
  // secure: false,
  pathRewrite: { '^/api': '' },
  onProxyRes(proxyRes, req, res) {
    // res.writeHead()
    res.writeHead(res.statusCode, {
      ...proxyRes.headers,
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': devHost, // 修改为当前域，避免cors限制
    });
  },
}));

app.listen(2999);
