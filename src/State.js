import React, { Component } from 'react';

export default class State extends Component {

  constructor() {
    super();

    this.state = {

      Name: 'Bhargav',
      Eduction: 'B.sc Chemestry '

    }
  }

  display = () => {

    this.setState({ Name: "Bhumi" });
    this.setState({ Eduction: "MBA" });
  }

  render() {
    return (
      <div>

        <h1>{this.state.Name}</h1>
        <h1>{this.state.Eduction}</h1>
        <button onClick={this.display}>Click</button>

      </div>
    );
  }
}
