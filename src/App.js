import React, { Component } from 'react';

// custom components
import logo from './logo.svg';

import Nav from './components/nav';
import Slideshow from './components/slideshow';
import Introduction from './components/introduction';
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
        <Slideshow images={images} />
        <Introduction />
        <div className="row" style={{width: '90%', margin: 'auto'}}>
          <div className="col-lg-6">
            <div style={{width: '80%', margin: '10px auto 0px auto', padding: '10px', background: 'rgba(255,255,255,.4)', borderRadius: '5px'}}>
              <p style={{textAlign: 'right'}}>Programming Skills</p>
              <div style={{display: 'block'}}>
                <p style={{margin: '0px 10px 0px 0px', textAlign: 'left'}}>Java</p>
                <div style={{display: 'flex', width: '50%', height: '5px', backgroundColor: '#3c3c3c', borderRadius: '5px', marginTop: '-15px', float: 'right'}}>
                  <div style={{width: '80%', height: '5px', backgroundColor: '#ff7400', borderRadius: '5px'}} />
                  <div style={{width: '20px', height: '20px', backgroundColor: '#ff7400', borderRadius: '20px', margin: '-7px 0px 0px -3px'}} />
                </div>
                <p style={{margin: '0px 0px 0px 0px', textAlign: 'right'}}>80%</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{width: '80%', margin: '10px auto 0px auto', padding: '10px', background: 'rgba(255,255,255,.4)', borderRadius: '5px'}}>
              <p style={{textAlign: 'right'}}>DevOps Skills</p>
              <div style={{display: 'block'}}>
                <p style={{margin: '0px 10px 0px 0px', textAlign: 'left'}}>Docker</p>
                <div style={{display: 'flex', width: '50%', height: '5px', backgroundColor: '#3c3c3c', borderRadius: '5px', marginTop: '-15px', float: 'right'}}>
                  <div style={{width: '80%', height: '5px', backgroundColor: '#ff7400', borderRadius: '5px'}} />
                  <div style={{width: '20px', height: '20px', backgroundColor: '#ff7400', borderRadius: '20px', margin: '-7px 0px 0px -3px'}} />
                </div>
                <p style={{margin: '0px 0px 0px 0px', textAlign: 'right'}}>50%</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div style={{width: '80%', margin: '10px auto 0px auto', padding: '10px', background: 'rgba(255,255,255,.4)', borderRadius: '5px'}}>
              <p style={{textAlign: 'right'}}>Other Skills</p>
              <div style={{display: 'block'}}>
                <p style={{margin: '0px 10px 0px 0px', textAlign: 'left'}}>Public Speaking</p>
                <div style={{display: 'flex', width: '50%', height: '5px', backgroundColor: '#3c3c3c', borderRadius: '5px', marginTop: '-15px', float: 'right'}}>
                  <div style={{width: '80%', height: '5px', backgroundColor: '#ff7400', borderRadius: '5px'}} />
                  <div style={{width: '20px', height: '20px', backgroundColor: '#ff7400', borderRadius: '20px', margin: '-7px 0px 0px -3px'}} />
                </div>
                <p style={{margin: '0px 0px 0px 0px', textAlign: 'right'}}>40%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        </div>
        <Timeline />
      </div>
    );
  }
}

export default App;
