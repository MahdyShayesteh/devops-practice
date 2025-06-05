const http = require('http');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs', 'access.log');

const server = http.createServer((req, res) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  
  fs.appendFile(logFile, log, (err) => {
    if (err) console.error('Error writing to log file:', err);
  });

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from log server!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
