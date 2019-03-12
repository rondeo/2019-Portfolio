import React from 'react';


class EducationCard extends React.PureComponent {
  render() {
    const { start_date, end_date, school, location, degree } = this.props;

    return (
      <div className="resume-card">
        <div className="resume-info">
            <span>{start_date} - {end_date}</span>
            <h3>{school} - {location}</h3>
            <p>{degree}</p>
        </div>
      </div>
    );
  }
}

class Education extends React.PureComponent {
  render() {
    const { education } = this.props;
    return (
      <div className="resume-container">
        {education.map(edu => (
          <EducationCard
            start_date={edu.start_date}
            end_date={edu.end_date}
            school={edu.school}
            location={edu.location}
            degree={edu.degree}
            key={edu.school}
          />
        ))}
      </div>
    );
  }
}

export default Education;
