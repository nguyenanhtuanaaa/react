import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from './actions'; // Bỏ comment dòng này
import rootReducer from './reducers/store';
import Songlist from './component/songlist';
function App(props) {
  return (
    <>
    <Songlist/>
      
    </>
  );
}



export default (App);
