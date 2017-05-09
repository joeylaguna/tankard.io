import React from 'react';

class InputArea extends React.Component {
  constructor(props){
  	super(props);
    this.state = {
      beerQuery: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      beerQuery: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let beer = this.state.beerQuery;
    this.props.handleBeerSearch(beer);
  }

  render(){
  	return(
  	  <div>
        <form onSubmit={this.handleSubmit}>
  	      <input type="text" value={this.state.beerQuery} onChange={this.handleChange}></input>
        </form>
  	  </div>
  	)
  }
}


export default InputArea;