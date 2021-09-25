import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';
import Car from '../containers/car';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render () {
    return (
      <div className="garage-container">
        <div className="garage">
          <h1>{this.props.garage}</h1>
        </div>
        {
          this.props.cars.map((car) => {
            return <Car key={car.id} car={car} />;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
