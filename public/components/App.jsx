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
      loading: false
    };
  }

  handleBeerSearch(beer) {
    this.setState({
      currentBeer: beer,
      loading: true
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
  this.setState({
    loading: true
  });
  let urlString = beer['url'].split('/');
  let firstCode = urlString[urlString.length - 3];
  let secondCode = urlString[urlString.length - 2];
  axios.get(`/${firstCode}/${secondCode}`)
    .then((response) => {
      //build current beer
      let currentBeer = {};
      currentBeer.name = response.data['beerName'];
      currentBeer.type = response.data['beerType'];
      this.setState({
        currentBeer: currentBeer,
        loading: false
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
        {!this.state.loading ? <div><BeerPair currentBeer={this.state.currentBeer} /> <Details currentBeer={this.state.currentBeer}/></div> : 'Loading...'}
        
      </div>
    );
  }
}

export default App;
