import React from 'react';
import axios from 'axios'; // don't forget to import axios

import Search from './seach'; // Correct the filename if it's misspelled
import './App.css';

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => { 
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296',
        },
      });
      console.log(response.data.results);
      this.setState({ images: response.data.results }); 
    } catch (error) {
      console.error('lỗi:', error);
    }
  };

  render() {
    return (
      <div>
        <Search onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <div className="image-container" style={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        {this.state.images.map((image) => (
          <img key={image.id} src={image.urls.regular} alt={image.alt_description}  style={{ width:'250px',height:'250px',marginRight:'20px',marginBottom:'20px'}}/>
        ))}
      </div>
      </div>
    );
  }
}

export default App;
