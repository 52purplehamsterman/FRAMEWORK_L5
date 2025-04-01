function extendResponse(res) {
    res.send = (data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    };
      res.json = (data) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    };
    res.status = (code) => {
      res.statusCode = code;
      return res;
    };
  }
  
  module.exports = { extendResponse };