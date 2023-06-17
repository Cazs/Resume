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
// import Resume from './components/resume';
// import Timeline from './components/timeline';
import './css/app.css';
import './css/bootstrap.min.css';

const images =
[
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
  { name: '/media/slideshow/slide-9.jpg', transform: '', }, // rotate(-90deg)
  // './aurora.jpg',
  // './galaxies.jpg',
  // './martin.jpg',
  // 'IMG20230303150833.jpg',
  // 'IMG20220820150824.jpg',
  // 'IMG20230219205446.jpg',
  // 'IMG20230224231640.jpg',
  // 'IMG20230408172427.jpg',
  // 'IMG20230410222448.jpg',
  // 'IMG20230410233914.jpg',
  // 'IMG20230418222718.jpg',
  // 'IMG20230428161624~2.jpg',
  // 'IMG20230604171651.jpg',
];

class App extends Component {
  componentDidMount() {}

  render() {
    // return 
    // window.location.pathname?.includes('resume') ? 
    // (
    //   <div style={{ backgroundColor: '#fff' }}>
    //     <Resume key="resume-component" />
    //   </div>
    // ) :
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
