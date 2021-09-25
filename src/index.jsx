// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
// internal modules
import CarsIndex from './components/cars_index';
import carsReducer from './reducers/cars_reducer';
import '../assets/stylesheets/application.scss';

// State and reducers
const garageName = `garage${Math.floor(10 + (Math.random() * 90))}`; // prompt("What is your garage?") ||
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer
});

// [...]
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={CarsIndex} />
        <Route path="/:garage" component={CarsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
