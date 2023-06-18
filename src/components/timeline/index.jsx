import React from 'react'
import Education from '../education'
import Work from '../work'

class CareerTimeline extends React.Component {
  render() {
    return (
      <div
        id="career-timeline-container"
        style={{ marginTop: '5vh' }}>
        <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Career Timeline</h2>
        <Education key="education-component" />
        <Work key="work-component" />
      </div>
    );
  }
}

export default CareerTimeline;
