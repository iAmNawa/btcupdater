import React, { Component } from 'react';
import ComponentOne from '../components/ComponentOne';
import BitcoinPrice from './BitcoinPrice';

class ContainerOne extends Component {
state = {
    stateone: {
       one: 0,
       two: 0
    },
    statetwo: 0,
    statethree: 0,
    statefour: 0
  }

  stateSetter = () => {
    this.setState({statefour: 4});
  }

  render () {
    return (
      <div>
       <h1>"Is this working?"</h1>
       <h1>{this.state.statefour}</h1>
       <button onClick={this.stateSetter}>Click me to update state</button>
       <ComponentOne name="World" />
       <BitcoinPrice />
      </div>
    )
  }
}
export default ContainerOne;
