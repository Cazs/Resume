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
    'http://casperweb.herokuapp.com/aurora.jpg',
    'http://casperweb.herokuapp.com/galaxies.jpg',
    'http://casperweb.herokuapp.com/martin.jpg',
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
        <Work />
        <Education />
        <Stack />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
