function extendRequest(req) {
    req.body = {};
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
  
    req.on('end', () => {
      if (body) {
        try {
          req.body = JSON.parse(body);
        } catch (e) {
          const pairs = body.split('&');
          req.body = pairs.reduce((acc, pair) => {
            const [key, value] = pair.split('=');
            acc[key] = decodeURIComponent(value);
            return acc;
          }, {});
        }
      }
    });
  
    req.params = {};
    req.query = {};
  }
  
  module.exports = { extendRequest };