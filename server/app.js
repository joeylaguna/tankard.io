const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const request = require('request');
const app = express();
app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.send('success');
});

app.get('/:beer', (req, res) => {
  let beer = req.params.beer;
  let url = `http://beeradvocate.com/search/?q=${beer}&qt=beer`

  request(url, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      let results = [];
      $('#ba-content div ul li').each(function(item) {
      	let beerObj = {};
      	let li = $(this);
      	let temp = li.children('a').eq(0);
      	beerObj.name = temp.text();
      	beerObj.url = temp.attr('href');
      	results.push(beerObj);
      });
      res.send(results);
    } else {
      console.log(`error: ${error}`);
    }
  });
});

app.get('/:idOne/:idTwo', (req, res) => {
  const idOne = req.params.idOne;
  const idTwo = req.params.idTwo;
  const url = `https://www.beeradvocate.com/beer/profile/${idOne}/${idTwo}/`;
  request(url, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      let results = {};
      let beerName = $('.titleBar h1').text().split(' |')[0];
      let beerDetails = $($('#ba-content div .break').toArray())
      let beerType = $(beerDetails[1]).children('a').eq(4).text();
      results.beerName = beerName;
      results.beerType = beerType;
      res.send(results);
    } else {
      console.log(`Error: ${error}`);
      res.send(error);
    }
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

module.exports.app = app;