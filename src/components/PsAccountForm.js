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

class PsAccountForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Description>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Account username:</label>
                <Field name="username" component={requiredInput('Enter username')} type="text"/>
              </div>
              <div>
                <label htmlFor="password">Account password:</label>
                <Field name="password" component={requiredInput('Get it from PS support')} type="password"/>
              </div>
              <br />
              <Button basic color='green'>Submit</Button>
            </form>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

// Decorate the form component
PsAccountForm = reduxForm({
  form: 'psAccount' // a unique name for this form
})(PsAccountForm);

export default PsAccountForm;
