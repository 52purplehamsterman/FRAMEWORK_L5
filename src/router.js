class Router {
    constructor() {
      this.routes = [];
    }
      add(method, path, handler) {
      this.routes.push({ method, path, handler });
    }
      find(req) {
      const { method, url } = req;
      const [path, query] = url.split('?');
      req.query = parseQuery(query);
  
      const route = this.routes.find(
        (r) => r.method === method && matchPath(r.path, path, req)
      );
      return route ? route.handler : null;
    }
  }
  function matchPath(routePath, reqPath, req) {
    const routeParts = routePath.split('/');
    const reqParts = reqPath.split('/');
  
    if (routeParts.length !== reqParts.length) return false;
  
    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        req.params = req.params || {};
        req.params[routeParts[i].slice(1)] = reqParts[i];
      } else if (routeParts[i] !== reqParts[i]) {
        return false;
      }
    }
  
    return true;
  }
  function parseQuery(queryString) {
    if (!queryString) return {};
    return queryString.split('&').reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
  }
  
  module.exports = { Router };