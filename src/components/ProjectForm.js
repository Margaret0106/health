import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Button, Input } from 'semantic-ui-react';

export const requiredInput = (placeholder) => {
  return (field) => <Input
    label={{ icon: 'asterisk' }}
    labelPosition='left corner'
    placeholder={placeholder}
    {...field.input}
  />
};

export const simpleInput = (placeholder) => {
  return (field) => <Input placeholder={placeholder} {...field.input} />
};

class ProjectForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Description>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Project title</label>
                <Field name="title" component={requiredInput('Project title')} type="text"/>
              </div>
              <div>
                <label htmlFor="url">Project URL</label>
                <Field name="url" component={requiredInput('http://example.com')} type="text"/>
              </div>
              <div>
                <label htmlFor="url">Health script URL</label>
                <Field name="healthUrl" component={simpleInput('http://example.com/rf-health.php/')} type="text"/>
              </div>
              <Button basic color='green'>Submit</Button>
            </form>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

// Decorate the form component
ProjectForm = reduxForm({
  form: 'project' // a unique name for this form
})(ProjectForm);

export default ProjectForm;
