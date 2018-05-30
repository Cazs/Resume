import React from 'react';

class Skill extends React.Component
{
    render()
    {
        return (
            <div
                className='skill-container'
            >
                <p style={{textAlign: 'center', fontWeight: 'bolder'}}>{this.props.skills_category}</p>
                <div style={{display: 'block'}}>
                {
                    this.props.skills.map((skill, index) =>
                    (
                        <div className='row'>
                        {/* style={{display: 'flex'}} */}
                            <div className='col-lg-4'>
                                <p style={{margin: '0px 10px 0px 0px', textAlign: 'left', float: 'left'}}>{skill.title}</p>
                            </div>
                            <div className='col-lg-4'>
                                <div style={{display: 'flex', width: '50%', height: '5px', backgroundColor: '#3c3c3c', borderRadius: '5px', marginTop: '-15px', marginLeft: '-50px', float: 'right'}}>
                                    <div style={{width: `${skill.level}%`, height: '5px', backgroundColor: '#ff7400', borderRadius: '5px'}} />
                                    <div style={{width: '20px', height: '20px', backgroundColor: '#ff7400', borderRadius: '20px', margin: '-7px 0px 0px -3px'}} />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <p style={{margin: '-25px -45px 0px 0px', textAlign: 'right', float: 'right'}}> {skill.level}%</p>
                            </div>
                        </div>
                    )
                )}
                </div>
            </div>
        );
    }
}

export default Skill;