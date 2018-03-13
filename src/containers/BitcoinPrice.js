import React, { Component } from 'react';
const ROOT_URL = 'http://localhost:7777/results';

class BitcoinPrice extends Component {
  state = {
    btcprice: 0
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

  render () {
    return (
      <div>
        <h1>{this.state.btcprice}</h1>
       <button onClick={this.letUsGetResults}>Click me for current price of bitcoin</button>
      </div>
    )
  }
}
export default BitcoinPrice;
