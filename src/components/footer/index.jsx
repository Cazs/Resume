import React from 'react';
import styled from 'styled-components';

const GithubLink = styled.a`
    // display: inline;
    width: 30px;
    height: 30px;
    margin: 100px auto 0px auto;
    background: url(http://casperweb.herokuapp.com/github-logo.svg);
    backgroundSize: contain
    &:hover
    {
        background-color: #fff;
        border-radius: 30px;
    }
`;

const LinkedinLink = styled.a`
    // display: inline;
    width: 30px;
    height: 30px;
    margin: 100px auto 0px auto;
    background: url(http://casperweb.herokuapp.com/linkedin-logo.svg);
    backgroundSize: contain
    &:hover
    {
        background-color: #fff;
        border-radius: 5px;
    }
`; 

class Footer extends React.Component
{
    render()
    {
        return (
            <div style={{
                width: '100%',
                height: '240px',
                backgroundColor: '#56b4d3',
                marginTop: '20px',
                borderTop: '1px solid #fff'
            }}>
                <p style={{width: '80%', textAlign: 'center', margin: 'auto', paddingTop: '60px', color: '#fff'}}>
                    At some point in the near future I'd like to work with embedded systems, big data, neural nets and VR.
                </p>
                <div style={{display: 'flex'}}>
                    <GithubLink href="https://github.com/Cazs" target="_blank" style={{marginRight: '-100px'}}/>
                    <LinkedinLink href="https://www.linkedin.com/in/casper-ndlovu" target="_blank" style={{marginLeft: '-100px'}}/>
                </div>
            </div>
        );
    }
}

export default Footer;