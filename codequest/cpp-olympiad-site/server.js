// CodeQuest 本地服务器
const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html;charset=utf-8',
  '.css': 'text/css;charset=utf-8',
  '.js': 'application/javascript;charset=utf-8',
  '.json': 'application/json;charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

const PORT = 8080;
const ROOT_DIR = __dirname; // 服务器文件自身所在目录

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0]; // 去掉查询参数
  let filePath = path.join(ROOT_DIR, urlPath === '/' ? 'index.html' : urlPath);

  const ext = path.extname(filePath).toLowerCase();

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8' });
      res.end('404 Not Found: ' + urlPath);
      return;
    }
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('');
  console.log('  ========================================');
  console.log('    CodeQuest · C++ 竞赛学习平台');
  console.log('    服务器已启动!');
  console.log('    访问地址: http://localhost:' + PORT);
  console.log('    按 Ctrl+C 停止服务器');
  console.log('  ========================================');
  console.log('');
});
