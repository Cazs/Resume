import React from 'react';
import Transition from 'react-motion-ui-pack';
// import profile from './psybr-tech-sec.png';

const MENU_ANIMATE_TO_Y = 10;
const MENU_Y_DEFAULT = -220;

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state =
    {
      menu_y: MENU_Y_DEFAULT
    }
  }

  render() {
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
        }}
      >
        <header
          key='app-header'
          id='app-header'
          className="app-header"
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
              <button
                className='btn btn-primary'
                style={{
                  marginTop: '-5px',
                  width: '110px',
                  height: '70px',
                  border: '1px solid #fff',
                  visibility: 'hidden'
                }}
              >
                Background
              </button>
            </div>

            <div className="col-lg-6">
              <button
                className='btn btn-primary'
                style={{
                  marginTop: '-5px',
                  width: '160px',
                  height: '70px',
                  border: '1px solid #fff',
                  visibility: 'hidden'
                }}
              >
                Other Interests
              </button>
            </div>
          </div>
          <div
            id="nav-form-controls"
            style={{marginTop: '140px', display: 'flex'}}
          >
            <button
              id="nav-menu-btn"
              className='btn btn-primary nav-btn'
              style={{
                marginLeft: '-10px',
                float: 'left',
              }}
              onClick={()=>
              {
                this.state.menu_y === MENU_ANIMATE_TO_Y ? this.setState({menu_y: MENU_Y_DEFAULT}) : this.setState({menu_y: MENU_ANIMATE_TO_Y});
              }}>
              Menu
            </button>
            <div
              style={{width: '100px', height: '100px', background: 'url(/media/navbar/psybr-tech-sec.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
              id="nav-profile-image"
              onClick={()=>window.location='/'}
            />
            <button
              id="nav-contact-btn"
              className='btn btn-success nav-btn'
              style={{
                marginRight: '-10px',
                float: 'right'
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
