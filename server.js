const express = require('express');
const app = express();
const http = require('http').Server(app);
const routes = express.Router();
const request = require('request');

const testApi = () => {
  return new Promise((resolve, reject) => {
    request.get('https://api.flickr.com/services/feeds/photos_public.gne', (err, res, body) => {
      if (err) {
        return reject(`testApi Error: ${err}`);
      }
      
      resolve(body);
    });
  });
};

routes.get('/testApi', (req, res) => {
  testApi()
      .then((val) => {
        res.send(val);
      })
      .catch((err) => {
        console.log(`Failure: ${err}`);
        res.send(err);
      });
});

routes.get('/', (req, res) => {

  res.send('Hello')
});

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': 'true'
  });
  
  return next();
});

app.use('/', routes);

http.listen(3030);