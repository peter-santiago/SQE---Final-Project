const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// New endpoint for the CI pipeline demo
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'CI/CD Pipeline is working!' });
});

module.exports = app;