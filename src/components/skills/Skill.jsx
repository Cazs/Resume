import React from 'react';

class Skill extends React.Component
{
    render()
    {
        return (
            <div
                style={{
                    width: '80%',
                    margin: '10px auto 0px auto',
                    padding: '10px',
                    background: 'rgba(255,255,255,.4)',
                    borderRadius: '5px'
                }}>
                <p style={{textAlign: 'center', fontWeight: 'bolder'}}>{this.props.skills_category}</p>
                <div style={{display: 'block'}}>
                {
                    this.props.skills.map((skill, index) =>
                    (
                        <div>
                            <p style={{margin: '0px 10px 0px 0px', textAlign: 'left'}}>{skill.title}</p>
                            <div style={{display: 'flex', width: '50%', height: '5px', backgroundColor: '#3c3c3c', borderRadius: '5px', marginTop: '-15px', float: 'right'}}>
                                <div style={{width: `${skill.level}%`, height: '5px', backgroundColor: '#ff7400', borderRadius: '5px'}} />
                                <div style={{width: '20px', height: '20px', backgroundColor: '#ff7400', borderRadius: '20px', margin: '-7px 0px 0px -3px'}} />
                            </div>
                            <p style={{margin: '0px 0px 0px 0px', textAlign: 'right'}}>{skill.level}%</p>
                        </div>
                    )
                )}
                </div>
            </div>
        );
    }
}

export default Skill;