import { FETCH_CARS } from '../actions';
import { FETCH_GARAGE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CARS: {
      return action.payload;
    }
    case FETCH_GARAGE: {
      return action.payload;
    }
    default:
      return state;
  }
}
