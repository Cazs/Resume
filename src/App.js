import React, { Component } from 'react';

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

import './css/bootstrap.min.css';
import './css/app.css';

const images = [
  { name: '/media/slideshow/cover_photo.jpg' },
  { name: '/media/slideshow/slide-0.jpg' },
  { name: '/media/slideshow/slide-1.jpg' },
  { name: '/media/slideshow/slide-2.jpg', transform: '', },
  { name: '/media/slideshow/slide-3.jpg' },
  { name: '/media/slideshow/slide-4.jpg' },
  { name: '/media/slideshow/slide-5.jpg' },
  { name: '/media/slideshow/slide-6.jpg', transform: '', },
  { name: '/media/slideshow/slide-7.jpg' },
  { name: '/media/slideshow/slide-8.jpg', transform: '', },
  { name: '/media/slideshow/slide-9.jpg', transform: '', },
];

class App extends Component {
  componentDidMount() { }

  render() {
    return (
      <div className="app">
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
