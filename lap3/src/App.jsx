import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Season from './SeasonDisplay'
import React from 'react';
import Spinner from './spiner'
class App extends React.Component{
  state={ lat:null ,err:''};
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position=>this.setState({ lat:position.coords.latitude}),
      err=>this.setState({err:err.message})
    )
  }

  render(){
    if(this.state.err && !this.state.lat){
      return<div> err:{this.state.err}</div>
    }
    if(!this.state.err && this.state.lat){
      return<Season lat={this.state.lat}/>;
    }
    return <Spinner message="Please wait while we fetch your location" />;
  }
}

export default App
