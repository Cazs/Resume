import React from 'react';
import Transition from 'react-motion-ui-pack';

import profile from './profile.jpg';

const MENU_ANIMATE_TO_Y = 10;
const MENU_Y_DEFAULT = -220;

class Nav extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      menu_y: MENU_Y_DEFAULT
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
          // height: this.state.menu_y
        }}
        leave={{
          // top: -70,
          translateY: this.state.menu_y
          // height: this.state.menu_y
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
          style={{
            top: '0px',
            width: '100%',
            position: 'fixed',
            height: '300px',
            boxShadow: '#000 0px 15px 30px'
          }}
        >
          <div className="row">
            <div className="col-lg-6">
              {/* <div style={{width: '70px', height: '70px', borderRadius: '70px', backgroundColor: '#343434', boxShadow: '#000 0px 0px 10px'}}/> */}
              <button
                className='btn btn-primary'
                style={{
                  marginTop: '-5px',
                  width: '110px',
                  height: '70px',
                  // marginLeft: '-10px',
                  // float: 'left',
                  border: '1px solid #fff'
                }}
              >
                Background
              </button>
            </div>

            <div className="col-lg-6">
              {/* <div style={{width: '70px', height: '70px', borderRadius: '70px', backgroundColor: '#343434', boxShadow: '#000 0px 0px 10px'}}/> */}
              <button
                className='btn btn-primary'
                style={{
                  marginTop: '-5px',
                  width: '160px',
                  height: '70px',
                  // marginLeft: '-10px',
                  // float: 'left',
                  border: '1px solid #fff'
                }}
              >
                Other Interests
              </button>
            </div>
          </div>
          <div
            style={{marginTop: '140px'}}
          >
            <button
              className='btn btn-primary nav-btn'
              style={{
                marginLeft: '-10px',
                float: 'left',
              }}
              onClick={()=>
              {
                this.state.menu_y == MENU_ANIMATE_TO_Y ? this.setState({menu_y: MENU_Y_DEFAULT}) : this.setState({menu_y: MENU_ANIMATE_TO_Y});
              }}>
              Menu
            </button>
            <img
              src={profile}
              className="nav-profile-image"
              alt="logo" />
            <button
              className='btn btn-success nav-btn'
              style={{
                marginRight: '-10px',
                float: 'right',
              }}>
            Contact Me
          </button>
          </div>
        </header>
      </Transition>
    );
  }
}

export default Nav;
