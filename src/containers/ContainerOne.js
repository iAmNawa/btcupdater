import React, { Component } from 'react';

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
      </div>
    )
  }
}
export default ContainerOne;
