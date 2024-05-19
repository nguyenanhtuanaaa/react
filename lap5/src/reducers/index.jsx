import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:50' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'NAME', duration: '4:30' },
    { title: 'The Last Song', duration: '3:50' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer });
