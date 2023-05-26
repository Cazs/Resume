import React, { Component } from 'react';

// custom components
// import logo from './logo.svg';

import Nav from './components/nav';
import Slideshow from './components/slideshow';
import Introduction from './components/introduction';
import Skills from './components/skills';
import Education from './components/education';
import Work from './components/work';
import Stack from './components/stack';
import Projects from './components/projects';
import PetProjects from './components/petprojects';
import Footer from './components/footer';
// import Timeline from './components/timeline';

import './App.css';

const images =
[
  '../../public/cover_photo.jpg',
  '../../public/aurora.jpg',
  '../../public/galaxies.jpg',
  '../../public/martin.jpg',
];

class App extends Component
{
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
        <PetProjects />
        <Footer />
      </div>
    );
  }
}

export default App;
