import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';

import ProjectForm from './ProjectForm';
import ProjectCard from './ProjectCard';

class ProjectsList extends Component {
  handleSubmit = (project) => {
    const { startAddProject } = this.props;
    startAddProject(project);
  };

  componentDidMount() {
    this.props.startAddProjects();
  }

  render() {
    const { projects } = this.props;

    const renderProjectCards = () => {
      return projects.map((project) => <ProjectCard { ...project } key={project.id} />);
    };

    return (
      <Container>
        <Card.Group>
          { renderProjectCards() }
          <ProjectForm onSubmit={this.handleSubmit} />
        </Card.Group>
      </Container>
    );
  }
}

export default ProjectsList;
