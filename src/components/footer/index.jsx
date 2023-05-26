import React from 'react';
import styled from 'styled-components';

const GithubLink = styled.a`
    width: 30px;
    height: 30px;
    margin: 0px auto 0px auto;
    background: url(./github-logo.svg);
    backgroundSize: contain
    &:hover
    {
        background-color: #fff;
        border-radius: 30px;
    }
`;

const LinkedinLink = styled.a`
    width: 30px;
    height: 30px;
    margin: 0px auto 0px auto;
    background: url(./linkedin-logo.svg);
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
                height: 'auto',
                backgroundColor: '#56b4d3',
                marginTop: '20px',
                borderTop: '1px solid #fff'
            }}>
                <p style={{width: '80%', textAlign: 'center', margin: '10px auto 0px auto', borderRadius: '10px', paddingTop: '10px', color: '#fff', backgroundColor: 'rgba(0,0,0,.4)'}}>
                    At some point in the near future I'd like to work with Virtual Reality <span role="img" aria-label="VR Emoji">🌋</span> and/or Augmented Reality systems, 🗺 use big data 🗄 (and neural nets 🕸) to make the lives of people easier/happier 🌍 🙂 and maybe embedded systems, robots anyone? 🤖
                </p>
                <p style={{color: '#fff', marginTop: '20px'}}>You can also find a printer friendly version of my CV <a href='https://calm-ground-0c6108310.3.azurestaticapps.net/resume.html' target="_blank" rel="nofollow noopener noreferrer">here</a></p>
                <br/>
                <span role="img" aria-label="Ghost Emoji">👻</span>
                <div style={{display: 'flex'}}>
                    <GithubLink href="https://github.com/Cazs" target="_blank" rel="nofollow noopener noreferrer" style={{marginRight: '-100px'}}/>
                    <LinkedinLink href="https://www.linkedin.com/in/casper-ndlovu" target="_blank" rel="nofollow noopener noreferrer" style={{marginLeft: '-100px'}}/>
                </div>
            </div>
        );
    }
}

export default Footer;
