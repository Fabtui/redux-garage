import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CarShow extends Component {
  render () {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div className="garage-container">
        <h1>{this.props.car.brand}{this.props.car.model}</h1>
        <h2>{this.props.car.owner}</h2>
        <h2>{this.props.car.plate}</h2>
      <Link to='/'>
        Back
      </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(p => p.id === id);
  return {
    car
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchCars }, dispatch);
// }

export default connect(mapStateToProps)(CarShow);
