import React from 'react';

class Education extends React.Component
{
  render()
  {
    return (
      <div style={{marginBottom: '150px'}}>
        <h3 style={{textAlign: 'center', margin: '50px 0px 50px 0px', color: '#fff'}}>Education</h3>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '60px',
            backgroundColor: '#ff7400',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '1px solid #fff'
          }}
        >
          <p style={{fontSize: '18px', paddingTop: '18px', color: '#fff', fontWeight: 'bolder'}}>2009</p>
        </div>
        <div style={{
          position: 'absolute',
          marginTop: '-58px',
          left: '22.5%',
          // top: '-20px',
          width: '350px',
          height: '100px',
          background: 'url(http://localhost:3001/arrow-right-solid.svg)',
          // backgroundColor: 'red',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 0%'
        }}>
          <div style={{
              width: '86%',
              // height: '85px',
              marginTop: '-10px',
              borderRadius: '5px',
              backgroundColor: '#eeeeee',
              padding: '10px'
              // border: '1px solid #343434'
            }}>
            <p style={{fontSize: '15px', textAlign: 'left', fontWeight: 'bolder'}}>Rand Park High School ( 20­09 - 2013)</p>
            <p style={{fontSize: '15px', textAlign: 'left', fontWeight: 'bolder'}}>Nation Senior Certificate</p>
            <p>
              This is where Casper would fall in love with the art of programming.
            </p>
          </div>
        </div>
        <div
          style={{
            width: '2px',
            height: '70px',
            borderRadius: '10px',
            backgroundColor: '#ff7400',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '60px',
            backgroundColor: '#ff7400',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '1px solid #fff'
          }}
        >
          <p style={{fontSize: '18px', paddingTop: '18px', color: '#fff', fontWeight: 'bolder'}}>2014</p>
        </div>
        <div style={{
          position: 'absolute',
          marginTop: '-58px',
          left: '52.5%',
          // top: '-20px',
          width: '350px',
          height: '100px',
          background: 'url(http://localhost:3001/arrow-left-solid.svg)',
          // backgroundColor: 'red',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 0%'
        }}>
          <div style={{
              width: '95%',
              // height: '85px',
              margin: '-10px 0px 0px 14%',
              borderRadius: '5px',
              backgroundColor: '#eeeeee',
              padding: '10px'
              // border: '1px solid #343434'
            }}>
            <p style={{fontSize: '15px', textAlign: 'left', fontWeight: 'bolder'}}>Univ. of Johannesburg (2014 - present)</p>
            <p style={{fontSize: '15px', textAlign: 'left', fontWeight: 'bolder'}}>BSc Information Technology</p>
            <p>
              Majoring in Computer Science &amp; Informatics and minoring in Mathematics (Calculus 1 &amp; Descrete 1), Business Management 1 and Information Management 1.
            </p>
          </div>
        </div>
        <div
          style={{
            width: '2px',
            height: '70px',
            borderRadius: '10px',
            backgroundColor: '#ff7400',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '60px',
            backgroundColor: '#ff7400',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <p style={{fontSize: '18px', paddingTop: '18px', color: '#fff', fontWeight: 'bolder'}}>Now</p>
        </div>
      </div>
    );
  }
}

export default Education;
