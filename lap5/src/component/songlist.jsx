import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class Songlist extends Component {
  render() {
    return (
      <>
        <div style={{ display:'flex', justifyContent:'center',alignItems:'center'}}>
        
        <div style={{ marginRight:'30px'}}>
        
        <h1>Song</h1>
          {this.props.songs.map(song => (
            <li key={song.title} >
              {song.title} - {song.duration}
              <button style={{marginLeft:'30px', marginBottom:'20px'}}  class="btn btn-primary"onClick={() => this.props.selectSong(song)}>Select</button> 
             
              
            </li>
          ))}
          </div>
          <div>
          <h2>Detail Song:</h2>
          {this.props.selectedSong ? (
            <>
              <p>Title: {this.props.selectedSong.title}</p>
              <p>Duration: {this.props.selectedSong.duration}</p>
            </>
          ) : (
            <p>No song selected</p>
          )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps, { selectSong })(Songlist);
