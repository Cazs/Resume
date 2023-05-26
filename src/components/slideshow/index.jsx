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
        }, 8000);
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
      <div className='slideshow-container'>
        <div
          className='slideshow'
          style={{
            background: 'url('+ this.props.images[this.state.index] + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        />
        {/* Slider next/previous buttons */}
        <div
          className='slider-btn'
          style={{
            left: '10px',
            background: 'url(./slider-left-arrow.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70% 70%',
            backgroundPosition: '15px 10px'
          }}
          onClick={()=>this.goToPreviousSlide()}
        />
        <div
          className='slider-btn'
          style={{
            right: '10px',
            background: 'url(./slider-right-arrow.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70% 70%',
            backgroundPosition: '15px 10px'
          }}
          onClick={()=>this.goToNextSlide()}
        />
        {/* Slider nav */}
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