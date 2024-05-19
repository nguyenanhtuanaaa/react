import { createStore } from 'redux';
import rootReducer from './reducers'; // assuming you have a root reducer

const store = createStore(rootReducer); // create the Redux store with your root reducer

export default store; // export the created store
