const express = require('express');
const app = express();
const port = 3000;

// Try to load environment config
let config = {};
try {
  config = require('./config.js');
  console.log(`Running in ${config.environment || 'default'} mode`);
} catch (e) {
  console.log('Running in default mode (no config found)');
}

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello World!',
    environment: config.environment || 'default',
    debug: config.debug || false
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'CI/CD Pipeline is working!',
    environment: config.environment || 'default'
  });
});

app.get('/api/config', (req, res) => {
  res.json({
    environment: config.environment || 'default',
    apiUrl: config.apiUrl || 'Not configured',
    debug: config.debug || false,
    logging: config.logging || 'default',
    port: config.port || 3000
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    if (config.environment) {
      console.log(`Environment: ${config.environment}`);
    }
  });
}

module.exports = app;