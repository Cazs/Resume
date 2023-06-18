import React from 'react';

class PetProjects extends React.Component {
    render() {
        return (
            <div style={{
                width: '100%',
                height: 'auto',
                backgroundColor: '#56b4d3',
                marginTop: '20px',
                borderTop: '2px solid #000'
            }}>
                <h2 style={{ marginTop: '15px', fontWeight: 'bold' }}>Pet Projects and Proof of Concepts</h2>
                <p>Unfortunately I don't have enough time to work on all my side projects, but don't worry, something really cool is coming!<span role="img" aria-label="Shhh Emoji">🤫</span></p>

                <div id="accordion" style={{ borderTop: '2px solid #000' }}>
                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapse1">
                                Capture The Flag Game (3rd Year Computer Science Project)
                            </a>
                        </div>
                        <div id="collapse1" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                                <img className="pet-project-preview" src="https://image.ibb.co/iHVTMT/ctf600x375_15fps.gif" style={{ marginBottom: '15px' }} width="240" height="180" alt="Capture The Flag game preview" datatype="gif" />
                                <br />
                                <a href='/media/executables/capture-the-flag.zip'>
                                    <span role="img" aria-label="Floppy Disk Emoji">💾 Download Capture The Flag</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapse2">
                                Platformer Game Level Editor (2nd Year Computer Science Project)
                            </a>
                        </div>
                        <div id="collapse2" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                <img className="pet-project-preview" src="https://i.ibb.co/D9m4t93/level-editor700x438-30fps.gif" style={{ marginBottom: '15px' }} width="240" height="180" alt="Capture The Flag game preview" datatype="gif" />
                                <br />
                                <a href='/media/executables/platformer-level-editor.zip' download>
                                    <span role="img" aria-label="Floppy Disk Emoji">💾 Download Platformer Level Editor</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapse3">
                                Arduino Mega Stuff
                            </a>
                        </div>
                        <div id="collapse3" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                <iframe className="pet-project-video" src="https://drive.google.com/file/d/1x2RGKhvKIErYOzhJkaq4uxwI_6WfTQFp/preview"></iframe>
                                <br />
                                <iframe className="pet-project-video" src="https://drive.google.com/file/d/1T5vddSPC97gu36LvCkJgvx4eu74zPr9e/preview"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapse4">
                                RC Car Project
                            </a>
                        </div>
                        <div id="collapse4" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                <iframe className="pet-project-video" src="https://drive.google.com/file/d/1uEUQSd3nP1A1ky5FIsFp18r6Y7qM5xS0/preview"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapse5">
                                Makeshift Steering System for RC car
                            </a>
                        </div>
                        <div id="collapse5" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                <iframe className="pet-project-video" src="https://drive.google.com/file/d/1LmSRjo13e7qKwGtfdDrCESt_LZ6EDkj7/preview"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapse6">
                                Makeshift dashcam using a generic IP cam & 9v battery
                            </a>
                        </div>
                        <div id="collapse6" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                <iframe className="pet-project-video" src="https://drive.google.com/file/d/1Xw3gJk5i_csiskaKGK4pw-G3UHdwl3UY/preview"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PetProjects;
