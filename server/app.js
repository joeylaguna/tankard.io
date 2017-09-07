const express           = require('express');
const cors              = require('cors');
const axios             = require('axios');

const controller        = require('./controllers');
const app               = express();

app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.static(__dirname + '/../public'));
app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.send(200);
});

app.get('/:beer', controller.beerQuery);
app.get('/:idOne/:idTwo', controller.typeQuery);

app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'))
})

module.exports = app;