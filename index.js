const { App } = require('./src/app');
const app = new App();
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id });
});
app.post('/data', (req, res) => {
  res.json(req.body);
});
app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});