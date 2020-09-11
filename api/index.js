const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res) => res.send('Home'));

app.get('/statistics', (req, res) => {
  try {
    const { fetchData } = require('./src/data/statisticsService');
    fetchData(res);
  } catch (error) {
    res.statusCode = 500;
    res.send('Error retrieving data...');
  }
});

app.listen(PORT, () => {console.log(`app started at ${PORT}`)});