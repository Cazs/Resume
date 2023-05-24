import React from 'react';
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
                <div id="accordion">
                    <div class="card">
                        <div class="card-header">
                            <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                Arduino Mega Stuff
                            </a>
                        </div>
                        <div id="collapseOne" class="collapse show" data-parent="#accordion">
                            <div class="card-body">
                                <iframe src="https://drive.google.com/file/d/1x2RGKhvKIErYOzhJkaq4uxwI_6WfTQFp/preview" width="900" height="400" allow="autoplay" ></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                RC Car Project
                            </a>
                        </div>
                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                <iframe src="https://drive.google.com/file/d/1uEUQSd3nP1A1ky5FIsFp18r6Y7qM5xS0/preview" width="900" height="400" allow="autoplay" ></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                Makeshift Steering System for RC car
                            </a>
                        </div>
                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                <iframe src="https://drive.google.com/file/d/1LmSRjo13e7qKwGtfdDrCESt_LZ6EDkj7/preview" width="900" height="400" allow="autoplay" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PetProjects;
