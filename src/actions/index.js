import React from 'react';

const ROOT_URL = 'http://localhost:7777/results';

const letUsGetResults = () => {
  var request = new XMLHttpRequest();
  //request.addEventListener("load", letUsGetResults);
  request.open('GET', ROOT_URL);
  request.responseType = 'json';

  request.onload = function() {
    console.log(request.response.price)
  }

  request.send();

  return <h1>{this.request.response.price}</h1>
}

export default letUsGetResults;
