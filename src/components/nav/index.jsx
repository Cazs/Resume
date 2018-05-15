import React from 'react';
import Transition from 'react-motion-ui-pack';

import profile from './profile.jpg';

const MENU_ANIMATE_TO_Y = 100;

class Nav extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      menu_y: 0
    }
  }

  render()
  {
    return (
      <Transition
        component={false}
        enter={{
          // top: 80,
          translateY: this.state.menu_y
        }}
        leave={{
          // top: -70,
          translateY: this.state.menu_y
        }}
        ref={(el)=> this.menu_bar = el}
        style={{
          zIndex: '100',
          // background: 'rgb(180, 180, 180)'
          // left: window.innerWidth * 0.010 + '%',
        }}
      >
        <header
          key='app-header'
          className="App-header"
          style={{zIndex: '100'}}
        >
          <button
            style={{
              position: 'fixed',
              top: '5px',
              left: '2px',
              marginTop: '0px',
              width: '100px',
              height: '80px'
            }}
            onClick={()=>
            {
              this.state.menu_y == MENU_ANIMATE_TO_Y ? this.setState({menu_y: 0}) : this.setState({menu_y: MENU_ANIMATE_TO_Y});
            }}
          >
            Menu
          </button>
          <img
            src={profile}
            style={{
              marginTop: '10px',
              width: '100px',
              height: '100px',
              borderRadius: '80px',
              border: '2px solid #3e3e3e'
            }}
            alt="logo" />
          <button style={{position: 'fixed', top: '5px', right: '2px', marginTop: '0px', width: '100px', height: '80px'}}>Contact Me</button>
        </header>
      </Transition>
    );
  }
}

export default Nav;
