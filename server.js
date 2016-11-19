const express = require('express');
const app = express();
const http = require('http').Server(app);
const routes = express.Router();
const request = require('request');

const getFlickrFeed = () => {
  return new Promise((resolve, reject) => {
    request.get({
      url: 'https://api.flickr.com/services/feeds/photos_public.gne?id=24662369@N07&format=json&nojsoncallback=1',
      headers: {
        'Content-Type': 'application/json'
      }
    }, (err, res, body) => {
      if (err) {
        return reject(`testApi Error: ${err}`);
      }
      
      resolve(body);
    });
  });
};

routes.get('/flickrfeed', (req, res) => {
  getFlickrFeed()
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