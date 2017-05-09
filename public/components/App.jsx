import React from 'react';
import InputArea from './InputArea.jsx';
import QueryArea from './QueryArea.jsx';
import BeerPair from './BeerPair.jsx';
import Details from './Details.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.handleBeerSearch = this.handleBeerSearch.bind(this);
    this.handleIndividalBeerSearch = this.handleIndividalBeerSearch.bind(this);
    this.state = {
      currentBeer: {},
      beerList: [],
    };
  }

  handleBeerSearch(beer) {
    this.setState({
      currentBeer: beer,
    });

    axios.get(`/${beer}`)
    .then((response) => {
      let beerList = [];
      response.data.forEach((item) => {
        beerList.push(item);
      });
      this.setState({
        beerList: beerList,
      });
      //get beer codes
      let firstCode;
      let secondCode;
      if (beerList.length > 0) {
        //first code 
        this.handleIndividalBeerSearch(beerList[0]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

handleIndividalBeerSearch(beer) {
  let urlString = beer['url'].split('/');
  let firstCode = urlString[urlString.length - 3];
  let secondCode = urlString[urlString.length - 2];
  axios.get(`/${firstCode}/${secondCode}`)
    .then((response) => {
      //build current beer
      let currentBeer = {};
      currentBeer.name = response.data['beerName'];
      currentBeer.type = response.data['beerType'];
      console.log(`worked! ${JSON.stringify(currentBeer)}`);
      this.setState({
        currentBeer: currentBeer,
      });
    })
    .catch((error) => {
      console.log(`error in 2nd step: ${error}`);
    });
}

  render() {
    return (
      <div>
        <InputArea handleBeerSearch={this.handleBeerSearch} />
        <QueryArea beerList={this.state.beerList} handleIndividalBeerSearch={this.handleIndividalBeerSearch}/>
        <BeerPair currentBeer={this.state.currentBeer} />
        <Details currentBeer={this.state.currentBeer}/>
      </div>
    );
  }
}

export default App;
