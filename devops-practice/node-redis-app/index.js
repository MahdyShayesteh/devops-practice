const express = require('express');
const { createClient } = require('redis');

const app = express();
const port = 3000;

const client = createClient({
    url: 'redis://redis:6379'
});

client.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await client.connect();

  app.get('/', async (req, res) => {
    let visits = await client.get('visits');
    visits = visits ? parseInt(visits) + 1 : 1;
    await client.set('visits', visits);
    res.send(`Number of visits: ${visits}`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
})();