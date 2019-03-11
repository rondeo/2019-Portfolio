import React from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ProjectSkill extends React.PureComponent {
  render() {
    return <span className="project-skill">{this.props.skill}</span>;
  }
}

class ProjectSkills extends React.PureComponent {
  render() {
    return (
      <div className="project-skills">
        {this.props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} />;
        })}
      </div>
    );
  }
}

class ProjectLinks extends React.PureComponent {
  render() {
    const { preview } = this.props.links;
    return (
      <div className="project-links">
        <a
          href={preview}
          rel="noopener"
          target="_blank"
          className="project-link"
        >
          Live Demo
        </a>
      </div>
    );
  }
}

class ProjectCard extends React.PureComponent {
  render() {
    const { image, title, description, skills, links } = this.props;

    return (
      <div className="project-card">
        <img className="project-image" src={image} alt=""/>
        <div className="project-content">
          <div className="info">
            <h3>{title}</h3>
            <ProjectLinks links={links} />
          </div>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectSkills skills={skills} />
        </div>
      </div>
    );
  }
}

class Projects extends React.PureComponent {
  render() {
    const { projects } = this.props;
    return (
      <div className="projects-container">
        {projects.map(proj => (
          <ProjectCard
            title={proj.title}
            description={proj.description}
            skills={proj.skills}
            links={proj.links}
            image={proj.image}
            key={proj.title}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
