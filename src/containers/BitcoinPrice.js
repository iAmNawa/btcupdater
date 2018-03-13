import React, { Component } from 'react';
const ROOT_URL = 'http://localhost:7777/results';

class BitcoinPrice extends Component {
  state = {
    btcprice: 0,
    secondsElapsed: 0
  }

  letUsGetResults = () => {
    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', ROOT_URL);
    request.responseType = 'json';

    request.onload = function() {
      this.setState({btcprice: request.response.price})
      console.log(request.response.price)
    }.bind(this)
    request.send();
 }

  componentDidMount = () => {
     this.interval = setInterval(this.letUsGetResults, 1000);
   }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render () {
    return (
      <div>
        <h1>{this.state.btcprice}</h1>
        <h1>The price of bitcoin</h1>
      </div>
    )
  }
}
export default BitcoinPrice;
