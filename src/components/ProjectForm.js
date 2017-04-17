import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Button } from 'semantic-ui-react';

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
                <Field name="title" component="input" type="text"/>
              </div>
              <div>
                <label htmlFor="url">Project URL</label>
                <Field name="url" component="input" type="text"/>
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
