import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Button, Input, Form, Icon } from 'semantic-ui-react';

export const requiredInput = (placeholder) => {
  return (field) => <Input
    label={{ icon: 'asterisk' }}
    fluid
    labelPosition='left corner'
    placeholder={placeholder}
    {...field.input}
  />
};

export const simpleInput = (placeholder) => {
  return (field) => <Input fluid placeholder={placeholder} {...field.input} />
};

class ProjectForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <Icon name='plus'/> Add project
          </Card.Header>
          <Card.Description>
            <Form onSubmit={handleSubmit}>
              <Form.Field required>
                <label htmlFor="title">Project title</label>
                <Field name="title" component={simpleInput('Project title')} type="text"/>
              </Form.Field>
              <Form.Field required>
                <label htmlFor="url">Project URL</label>
                <Field name="url" component={simpleInput('http://example.com')} type="text"/>
              </Form.Field>
              <Form.Field>
                <label htmlFor="url">Health script URL</label>
                <Field name="healthUrl" component={simpleInput('http://example.com/rf-health.php/')} type="text"/>
              </Form.Field>
              <Button basic color='green' fluid>Submit</Button>
            </Form>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

// Decorate the form component
ProjectForm = reduxForm({
  form: 'newProject' // a unique name for this form
})(ProjectForm);

export default ProjectForm;
