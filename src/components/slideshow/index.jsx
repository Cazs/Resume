import React, { Component } from 'react';

class Slideshow extends Component
{
  constructor(props)
  {
      super(props);
      this.goToNextSlide = this.goToNextSlide.bind(this);
      this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
      // this.handleDotClick = this.handleDotClick.bind(this);

      this.state =
      {
        menu_y: 0,
        index: 0,
        autoplay: true,
        translateValue: 0
      }
  }

  componentDidMount()
  {
    if(this.state.autoplay)
    {
      window.setInterval(() =>
        {
          this.goToNextSlide()
        }, 3000);
    }
  }

  goToNextSlide()
  {
    this.setState({index: this.state.index + 1 >= this.props.images.length ? 0 : this.state.index + 1});
  }

  goToPreviousSlide()
  {
    this.setState(
      {
        // translateValue: this.state.translateValue + mainWindow.getSize()[0],
        index: this.state.index - 1 < 0 ? this.props.images.length-1 : this.state.index - 1
      });
  }

  render()
  {
    return (
      <div>
        <div
          style={{
            marginTop: '0px',
            width: '100%',
            height: '650px',
            background: 'url('+ this.props.images[this.state.index] + ')',
            borderBottom: '1px solid #fff',
            zIndex: '1'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '340px',
            left: '10px',
            width: '80px',
            height: '80px',
            borderRadius: '80px',
            border: '2px dashed #ff7200',
            background: 'url(http://casperweb.herokuapp.com/slider-left-arrow.svg)',
            backgroundSize: '70% 70%',
            backgroundPosition: '7px 10px',
            backgroundRepeat: 'no-repeat',
            zIndex: '1'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '340px',
            width: '80px',
            height: '80px',
            right: '10px',
            borderRadius: '80px',
            border: '2px dashed #ff7200',
            background: 'url(http://casperweb.herokuapp.com/slider-right-arrow.svg)',
            backgroundSize: '70% 70%',
            backgroundPosition: '15px 10px',
            backgroundRepeat: 'no-repeat',
            zIndex: '1'
          }}
        />
        <div style={{marginTop: '-50px'}}>
          <div
            style={{
              display: 'inline-block',
              height: '25px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '50px',
              borderRadius: '80px',
              border: '1px dashed #ff7200',
              backgroundColor: 'rgba(0,0,0,.5)'
            }}
          >
            <div style={{display: 'flex'}}>
              {this.props.images.map((img_path, index) =>
                (<div
                  style={{
                    width: '17px',
                    height: '17px',
                    marginLeft: '2px',
                    marginRight: '2px',
                    marginTop: '3px',
                    borderRadius: '20px',
                    backgroundColor: index === this.state.index ? '#ff7200' : '#fff'
                  }}
                />)
              )}
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Slideshow;
