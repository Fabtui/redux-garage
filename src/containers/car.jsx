import React, { Component } from 'react';

class Car extends Component {
  render() {
    return (
      <div className="car">
        <div className="car-model">
        <h2>{this.props.car.brand}{this.props.car.model}</h2>
        </div>
        <div className="car-owner">
          <h3>{this.props.car.owner}</h3>
        </div>
        <div className="car-plate">
          <h3>{this.props.car.plate}</h3>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Car;
