import React from 'react'
import Skill from './Skill'

const programming_skills =
[
    {
        title: 'Java',
        level: 80
    },
    {
        title: 'C#',
        level: 70
    },
    {
        title: 'JavaScript',
        level: 85
    },
    {
        title: 'HTML5',
        level: 88
    },
    {
        title: 'CSS3',
        level: 83
    },
    {
        title: 'C++',
        level: 60
    },
    {
        title: 'SQL',
        level: 76
    },
    {
        title: 'NoSQL',
        level: 80
    },
    {
        title: 'Delphi (Pascal)',
        level: 40
    }
];

const devops_skills =
[
    {
        title: 'Git',
        level: 75
    },
    {
        title: 'Docker',
        level: 80
    },
    {
        title: 'Kubernetes',
        level: 30
    },
    {
        title: 'Jest',
        level: 50
    },
    {
        title: 'JUnit',
        level: 50
    },
    {
        title: 'NPM',
        level: 70
    },
    {
        title: 'Yarn',
        level: 30
    },
    {
        title: 'WebPack',
        level: 50
    },
    {
        title: 'Travis CI',
        level: 30
    },
    {
        title: 'Jenkins',
        level: 30
    }
];

const other_skills =
[
    {
        title: 'Public Speaking',
        level: 40
    }
]

const soft_skills =
[
    {
        title: 'Public Speaking',
        level: 45
    },
    {
        title: 'Communication',
        level: 80
    },
    {
        title: 'Flexibility',
        level: 90
    },
    {
        title: 'Critical Thinking',
        level: 91
    },
    {
        title: 'Professionalism',
        level: 100
    },
    {
        title: 'Courtesy',
        level: 100
    },
    {
        title: 'Integrity',
        level: 100
    },
    {
        title: 'Work Ethic',
        level: 100
    },
    {
        title: 'Team Work',
        level: 100
    }
];

class Skills extends React.Component
{
    render()
    {
        return (
        <div className="row" style={{width: '90%', margin: 'auto'}}>
          <div className="col-lg-6">
            <Skill skills_category='Programming Skills' skills={programming_skills}/>
          </div>
          <div className="col-lg-6">
            <Skill skills_category='DevOps Skills' skills={devops_skills}/>
          </div>

          <div className="col-lg-6">
            <Skill skills_category='Soft Skills' skills={soft_skills}/>
          </div>
        </div>);
    }
}

export default Skills;