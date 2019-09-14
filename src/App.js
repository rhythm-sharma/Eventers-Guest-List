import React, { Component } from 'react';
import Box  from './components/Box/Box';
import './App.css';

class App extends Component {
  
  render(){

      return (
        <div className='container'>
          <div className='heading'>
            <h2>Eventers</h2>
            <h3>Choose your guest List</h3>
          </div>
          <Box />
        </div>
      )
  }

}

export default App;
