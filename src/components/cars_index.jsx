import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions';
import Car from '../containers/car';
import CarShow from './cars_show';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render () {
    return (
      <div className="garage-container">
        <h1>{this.props.garage}</h1>
        {
          this.props.cars.map((car) => {
            return (
              <Link to={`/cars/${car.id}`} key={car.id}>
                <Car key={car.id} car={car} />;
              </Link>);
          })
        }
        <div className="addbutton">
          <Link className="btn btn-primary btn-cta" to="/cars/new">
            Add a new car
          </Link>
        </div>
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
