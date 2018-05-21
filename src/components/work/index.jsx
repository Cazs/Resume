import React from 'react';

class Work extends React.Component
{
  render()
  {
    return (
      <div style={{marginBottom: '250px'}}>
        <h3 style={{textAlign: 'center', margin: '50px 0px 50px 0px', color: '#fff'}}>Work Experience</h3>
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
          left: '22.5%',
          // top: '-20px',
          width: '350px',
          height: '100px',
          background: 'url(http://casperweb.herokuapp.com:3001/arrow-right-solid.svg)',
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
            <p style={{fontSize: '15px', textAlign: 'left', fontWeight: 'bolder'}}>Patrish Mobile Nails ( 2014 ­- 2016)</p>
            <p>
              My role at PMN was to help uplift the company’s online presence by developing and maintaining a modern, responsive and SEO compliant web application.
            </p>
            <p>
              For this project I initially used pHp with MySQL, and eventually rewrote the project in NodeJS.
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
          <p style={{fontSize: '18px', paddingTop: '18px', color: '#fff', fontWeight: 'bolder'}}>2016</p>
        </div>
        <div style={{
          position: 'absolute',
          marginTop: '-58px',
          left: '52.5%',
          // top: '-20px',
          width: '350px',
          height: '100px',
          background: 'url(http://casperweb.herokuapp.com:3001/arrow-left-solid.svg)',
          // backgroundColor: 'red',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 0%'
        }}>
          <div style={{
              width: '87%',
              // height: '85px',
              margin: '-10px 0px 0px 14%',
              borderRadius: '5px',
              backgroundColor: '#eeeeee',
              padding: '10px'
              // border: '1px solid #343434'
            }}>
            <p style={{fontSize: '15px', textAlign: 'left', fontWeight: 'bolder'}}>Omega Fire &amp; Security (2016 - present)</p>
            <p>
              My primary role at Omega was to develop an internal tool to help the company better manage various aspects of its business operations such as, human resource management, project management, quoting, invoicing, task management, time &amp; attendance as well as a policy/regulatory document ­management system - essentially a miniature ERP system.
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

export default Work;
