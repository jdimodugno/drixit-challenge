const MongoClient = require('mongodb').MongoClient;
const mongoInstanceUrl = process.env.DB_ENDPOINT;

const fetch = (res) => {
  const dbName = 'drixit';
  const collection = 'statistics';
  try {
    return MongoClient.connect(mongoInstanceUrl, (err, db) => {
      if (!!err) {
        res.statusCode = 500;
        res.send('Error connecting to server')
      };
      if (db) {
        var dbo = db.db(dbName);
        dbo.collection(collection).find({}).toArray((err, result) => {
          if (err) {
            res.statusCode = 500;
            res.send('Error fetching collection');
          };
          res.json(result);
          db.close();
        });
      }
    });
  } catch (error) {
    res.statusCode = 500;
    res.send(error);
  }
}

const fetchData = (res) => {
  try {
    if (process.env.DB_ENDPOINT) return fetch(res);
    res.json(require('../mocks/data.json'))
  } catch (error) {
    console.log('fetchData - error');
    res.statusCode = 500;
    console.error(error);
    throw Error('Error retrieving data...', JSON.stringify(error));
  }
}

module.exports = { fetchData };