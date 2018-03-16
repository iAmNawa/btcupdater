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
       <ComponentOne name="World" />
       <BitcoinPrice />
      </div>
    )
  }
}
export default ContainerOne;
