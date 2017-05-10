import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card, Button, Label, Dropdown } from 'semantic-ui-react';
import moment from 'moment';
import * as actions from './../actions/actions';

export class ProjectCard extends Component {
  getColor = () => {
    const { availability } = this.props;
    if (!availability) {
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
    if (!availability) {
      return 'Never checked';
    }
    const checkedAt = moment(availability.createdAt).format('LL [at] h:mm');

    return `Last checked ${checkedAt}`;
  };

  render() {
    const { id, title, startDeleteProject } = this.props;

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

          <Dropdown text='Actions'>
            <Dropdown.Menu>
              <Dropdown.Item text='Check availability' />

              <Dropdown.Divider />

              <Dropdown.Item icon='folder' text='Edit' />
              <Dropdown.Item icon='trash' text='Delete' onClick={ () => startDeleteProject(id) } />
            </Dropdown.Menu>
          </Dropdown>
        </Card.Content>
      </Card>
    );
  }
}

export default connect((state) => state, actions)(ProjectCard);
