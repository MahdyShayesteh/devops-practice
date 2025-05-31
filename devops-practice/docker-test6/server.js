const http = require('http');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs', 'server.log');
const port = 3000;

if (!fs.existsSync(path.join(__dirname, 'logs'))) {
    fs.mkdirSync(path.join(__dirname, 'logs'));
}

const server = http.createServer((req, res) => {
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  
  // Log to file
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error('Error writing log:', err);
  });

  // Send response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Logged request!\n');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});