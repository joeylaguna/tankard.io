var expect  = require('chai').expect;
var request = require('request');
let app = require('../server/app.js');

var server = app;

before(() => {
  server.listen(8080, () => {
  });
});

after(function (done) {
  process.exit();
});


it('Connects to the server and gets a 200 response', (done) => {
  request('http://localhost:8080', (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

it('Returns a response object when searching for a beer that exists', (done) => {
  request('http://localhost:8080/pliny', (error, response, body) => {
    let responseData = JSON.parse(response.body);
    expect(responseData).to.be.an('array');
    expect(responseData[0]).to.have.property('name', 'Pliny The Elder');
    expect(responseData[0]).to.have.property('url', '/beer/profile/863/7971/');

    expect(responseData[1]).to.have.property('name', 'Pliny The Younger');
    expect(responseData[1]).to.have.property('url', '/beer/profile/863/21690/');

    expect(responseData[2]).to.have.property('name', 'Arizona Pliny');
    expect(responseData[2]).to.have.property('url', '/beer/profile/27354/190362/');
    done();
  })
});

it('Returns a response object when searching for a beer that doesn\'t exists', (done) => {
  request('http://localhost:8080/beerThatDoesntExist', (error, response, body) => {
    let responseData = JSON.parse(response.body);
    expect(responseData).to.be.an('array');
    expect(responseData).to.have.lengthOf(0);
    done();
  })
});

it('Returns the beer details when searching by beer codes', (done) => {
  request('http://localhost:8080/863/7971', (error, response, body) => {
    let responseData = JSON.parse(response.body);
    expect(responseData).to.be.an('object');
    expect(responseData).to.have.property('beerName', 'Pliny The Elder');
    expect(responseData).to.have.property('beerType', 'American Double / Imperial IPA');
    done();  
  });
});