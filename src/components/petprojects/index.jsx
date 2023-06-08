import React from 'react';
import Accordion from 'bootstrap';
// import styled from 'styled-components';

// const GithubLink = styled.a`
//     width: 30px;
//     height: 30px;
//     margin: 0px auto 0px auto;
//     background: url(http://casperweb.herokuapp.com/github-logo.svg);
//     backgroundSize: contain
//     &:hover
//     {
//         background-color: #fff;
//         border-radius: 30px;
//     }
// `;

// const LinkedinLink = styled.a`
//     width: 30px;
//     height: 30px;
//     margin: 0px auto 0px auto;
//     background: url(http://casperweb.herokuapp.com/linkedin-logo.svg);
//     backgroundSize: contain
//     &:hover
//     {
//         background-color: #fff;
//         border-radius: 5px;
//     }
// `; 

class PetProjects extends React.Component {
    render() {
        // requestFullscreen();
        return (
            <div style={{
                width: '100%',
                height: 'auto',
                backgroundColor: '#56b4d3',
                marginTop: '20px',
                borderTop: '1px solid #fff'
            }}>
                <h2>Pet Projects and Proof of Concepts</h2>
                <p>Unfortunately I don't have enough time to work on all my side projects, but don't worry, something really cool is coming!<span role="img" aria-label="Shhh Emoji">🤫</span></p>
                {/* <p><strong>Note:</strong> The <strong>data-parent</strong> attribute makes sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.</p> */}
                {/* <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            First Item
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Second Item
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
                <div id="accordion">
                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                Capture The Flag Game (3rd Year Computer Science Project)
                            </a>
                        </div>
                        <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                                <a href='https://calm-ground-0c6108310.3.azurestaticapps.net/static/media/capture-the-flag.zip'></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                                Platformer Game Level Editor (2nd Year Computer Science Project)
                            </a>
                        </div>
                        <div id="collapseTwo" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                                <a href='https://calm-ground-0c6108310.3.azurestaticapps.net/static/media/platformer-level-editor.zip'></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseThree">
                                Arduino Mega Stuff
                            </a>
                        </div>
                        <div id="collapseThree" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                                <iframe className="pet-project-video" src="https://drive.google.com/file/d/1x2RGKhvKIErYOzhJkaq4uxwI_6WfTQFp/preview" allow="fullscreen"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                                RC Car Project
                            </a>
                        </div>
                        <div id="collapseFour" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                <iframe className="pet-project-video" src="https://drive.google.com/file/d/1uEUQSd3nP1A1ky5FIsFp18r6Y7qM5xS0/preview" allow="fullscreen"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                                Makeshift Steering System for RC car
                            </a>
                        </div>
                        <div id="collapseFive" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                <iframe className="pet-project-video" src="https://drive.google.com/file/d/1LmSRjo13e7qKwGtfdDrCESt_LZ6EDkj7/preview" allow="fullscreen"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PetProjects;
