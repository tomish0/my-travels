import React, { Component } from "react";

class Travels extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.destination}
        <br></br>
        {this.props.country}<br></br>

        {this.props.distance}<br></br>
        <img src={this.props.photo} />
      </div>
    );
  }
}

export default Travels;
