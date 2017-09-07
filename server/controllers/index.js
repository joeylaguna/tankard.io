const cheerio  = require('cheerio');
const request  = require('request');

module.exports = {
  beerQuery: ((req, res) => {
    const beer = req.params.beer;
    const url = `http://beeradvocate.com/search/?q=${beer}&qt=beer`

    request(url, (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        let results = [];
        $('#ba-content div ul li').each(function(item) {
          const beerObj = {};
          const li = $(this);
          const temp = li.children('a').eq(0);
          beerObj.name = temp.text();
          beerObj.url = temp.attr('href');
          results.push(beerObj);
        });
        res.send(results);
      } else {
        res.send(error)
      }
    });
  }),

  typeQuery: ((req, res) => {
    const idOne = req.params.idOne;
    const idTwo = req.params.idTwo;
    const url = `https://www.beeradvocate.com/beer/profile/${idOne}/${idTwo}/`;
    request(url, (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        const results = {};
        const beerName = $('.titleBar h1').text().split(' |')[0];
        const beerDetails = $($('#ba-content div .break').toArray())
        let beerType = $(beerDetails[1]).children('a').eq(4).text() || $(beerDetails[1]).children('a').eq(3).text();
        results.beerName = beerName;
        results.beerType = beerType;
        res.send(results);
      } else {
        res.send(error);
      }
    });
  })
}