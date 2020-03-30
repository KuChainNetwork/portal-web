/**
 * Instructions for use,
 *  target: the environment to be proxyed to.
 * 1.modify the value of config API_HOST.WORDPRESS
 *  http://localhost:2999/api
 * 2.run npm run dev
 * 3.execute this script
 */


const express = require('express');
const proxy = require('http-proxy-middleware');

// Local development services. If the port changes, you need to modify the port to the corresponding header.
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
      'Access-Control-Allow-Origin': devHost, // Modify to the current domain to avoid cors restrictions
    });
  },
}));

app.listen(2999);
