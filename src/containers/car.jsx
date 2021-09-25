import React, { Component } from 'react';

class Car extends Component {
  render() {
    return (
      <div className="car">
        <div className="car-model">
        <h1>{this.props.car.brand}{this.props.car.model}</h1>
        </div>
        <div className="car-owner">
          <h2>{this.props.car.owner}</h2>
        </div>
        <div className="car-plate">
          <h2>{this.props.car.plate}</h2>
        </div>
      </div>
    );
  }
}

export default Car;
