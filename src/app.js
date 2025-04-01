const http = require('http');
const { extendRequest, extendResponse } = require('./request');
const { Router } = require('./router');
const { runMiddleware } = require('./middleware');

class App {
  constructor() {
    this.router = new Router();
    this.middlewareStack = [];
  }
  use(middleware) {
    this.middlewareStack.push(middleware);
  }
  get(path, handler) {
    this.router.add('GET', path, handler);
  }

  post(path, handler) {
    this.router.add('POST', path, handler);
  }

  put(path, handler) {
    this.router.add('PUT', path, handler);
  }

  patch(path, handler) {
    this.router.add('PATCH', path, handler);
  }

  delete(path, handler) {
    this.router.add('DELETE', path, handler);
  }
  listen(port, callback) {
    const server = http.createServer((req, res) => {
      extendRequest(req);
      extendResponse(res);
      runMiddleware(req, res, this.middlewareStack, () => {
        const handler = this.router.find(req);
        if (handler) {
          handler(req, res);
        } else {
          res.status(404).send('Not Found');
        }
      });
    });

    server.listen(port, callback);
  }
}

module.exports = { App };