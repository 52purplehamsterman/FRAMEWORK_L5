<<<<<<< HEAD
# FRAMEWORK_L5
=======
# FRAMEWORK_L5

A minimalistic web framework for Node.js.

## Features
- Routing (GET, POST, PUT, PATCH, DELETE)
- Middleware support
- Extended `req` and `res` objects
- Error handling

## Usage
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.

## Example
```javascript
const { App } = require('./src/app');

const app = new App();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
>>>>>>> de538ea (Instial commit)
