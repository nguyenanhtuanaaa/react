// reducers.js
import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, RESET } from './action';

const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default combineReducers({
  count: countReducer
});
