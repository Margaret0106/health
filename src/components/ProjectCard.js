import React, { Component } from 'react';
import { Card, Button, Label } from 'semantic-ui-react';
import moment from 'moment';

export default class ProjectCard extends Component {
  getColor = () => {
    const { availability } = this.props;
    if (availability === null) {
      return 'grey';
    }

    switch(availability.status) {
      case 10:
        return 'green';
      case 20:
        return 'orange';
      case 30:
        return 'red';
      case 40:
        return 'grey';
    };

    return 'grey';
  };

  getLastCheckDate = () => {
    const { availability } = this.props;
    if (availability === null) {
      return 'Never checked';
    }
    const checkedAt = moment(availability.createdAt).format('LL');

    return `Last checked ${checkedAt}`;
  };

  render() {
    const { title } = this.props;

    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <Label circular color={this.getColor()} empty/>
            { ` ${title}` }
          </Card.Header>
          <Card.Meta>
            { this.getLastCheckDate() }
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
