function runMiddleware(req, res, middlewareStack, next) {
    let index = 0;
  
    const nextMiddleware = () => {
      if (index < middlewareStack.length) {
        middlewareStack[index++](req, res, nextMiddleware);
      } else {
        next();
      }
    };
  
    nextMiddleware();
  }
  
  module.exports = { runMiddleware };