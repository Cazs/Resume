import React from 'react';

class Skill extends React.Component {
    render() {
        return (
            <div
                className='skill-container'
            >
                <p style={{ textAlign: 'center', fontWeight: 'bolder' }}>{this.props.skills_category}</p>
                <div style={{ display: 'block' }}>
                    {
                        this.props.skills.map((skill, index) =>
                        (
                            <div key={skill.id} className='row'>
                                {/* style={{display: 'flex'}} */}
                                <div className='col-lg-4'>
                                    <p style={{ margin: '0px 10px 0px 0px', textAlign: 'left', float: 'left' }}>{skill.title}</p>
                                </div>
                                <div className='col-lg-4'>
                                    <div id={`skill-bar-${index}`} className='skill-bar'>
                                        <div id={`skill-level-${index}`} style={{ width: `${skill.level}%`, height: '5px', backgroundColor: '#ff7400', borderRadius: '5px' }} />
                                        <div style={{ width: '20px', height: '20px', backgroundColor: '#ff7400', borderRadius: '20px', margin: `-13px 0px 0px ${skill.level - 5}%` }} />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <p className='skill-level' style={{ textAlign: 'right', float: 'right' }}>{skill.level}%</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Skill;