import React, { Component } from 'react';

// custom components
import logo from './logo.svg';

import Nav from './components/nav';
import Slideshow from './components/slideshow';
import Timeline from './components/timeline';


import './App.css';

const images =
[
    'http://localhost:3001/aurora.jpg',
    'http://localhost:3001/galaxies.jpg',
    'http://localhost:3001/martin.jpg',
];

class App extends Component
{
  constructor(props)
  {
    super(props);
  }

  componentDidMount()
  {
  }

  render()
  {
    return (
      <div className="App">
        <Nav />
        <Slideshow images={images}/>
        <Timeline />
      </div>
    );
  }
}

export default App;
