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
import 'bootstrap/dist/css/bootstrap.min.css';

const images =
[
  './cover_photo.jpg',
  './aurora.jpg',
  './galaxies.jpg',
  './martin.jpg',
];

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Nav key="nav-component" />
        <Slideshow key="slideshow-component" images={images} />
        <Introduction key="introduction-component" />
        <Skills key="skills-component" />
        <Work key="work-component" />
        <Education key="education-component" />
        <Stack key="stack-component" />
        <Projects key="projects-component" />
        <PetProjects key="pet-projects-component" />
        <Footer key="footer-component" />
      </div>
    );
  }
}

export default App;
