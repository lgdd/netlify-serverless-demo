'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda
app.use('/', router);

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(`{
    "delaiMoyenSejourGlobal": "14J",
    "nbrConteneurs": "120000",
    "nbrConteneursInspectes": "349"
  }`);
  res.end();
});

module.exports = app;
module.exports.handler = serverless(app);
