import React from "react";

class ExperienceCards extends React.PureComponent {
  render() {
    const {
      start_date,
      end_date,
      job_title,
      location,
      position,
      description
    } = this.props;

    return (
      <div className="resume-card">
        <div className="resume-info">
          <span>
            {start_date} - {end_date}
          </span>
          <h3>
            {job_title} - {location}
          </h3>
          <p>{position}</p>
        </div>
        <div className="resume-detail">
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    );
  }
}

class Experience extends React.PureComponent {
  render() {
    const { experience } = this.props;
    return (
      <div className="resume-container">
        {experience.map(exp => (
          <ExperienceCards
            start_date={exp.start_date}
            end_date={exp.end_date}
            job_title={exp.job_title}
            location={exp.location}
            position={exp.position}
            description={exp.description}
            key={exp.job_title}
          />
        ))}
      </div>
    );
  }
}

export default Experience;
