import React, { Component } from 'react';

// custom components
import logo from './logo.svg';

import Nav from './components/nav';
import Slideshow from './components/slideshow';
import Introduction from './components/introduction';
import Skills from './components/skills';
import Education from './components/education';
import Work from './components/work';
import Stack from './components/stack';
import Projects from './components/projects';
import Footer from './components/footer';
// import Timeline from './components/timeline';


import './App.css';

const images =
[
    'http://casperweb.herokuapp.com:3001/aurora.jpg',
    'http://casperweb.herokuapp.com:3001/galaxies.jpg',
    'http://casperweb.herokuapp.com:3001/martin.jpg',
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
        <Slideshow images={images} />
        <Introduction />
        <Skills />
        <Education />
        <Work />
        <Stack />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
