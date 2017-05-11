import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Button, Input, Form, Icon } from 'semantic-ui-react';

export const simpleInput = (placeholder) => {
  return (field) => <Input fluid placeholder={placeholder} {...field.input} />
};

class PsAccountForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <Icon name='plus'/> Add account
          </Card.Header>
          <Card.Description>
            <Form onSubmit={handleSubmit}>
              <Form.Field required>
                <label htmlFor="username">Account username:</label>
                <Field name="username" component={simpleInput('Enter username')} type="text"/>
              </Form.Field>
              <Form.Field required>
                <label htmlFor="password">Account password:</label>
                <Field name="password" component={simpleInput('Get it from PS support')} type="password"/>
              </Form.Field>
              <Button fluid basic color='green'>Submit</Button>
            </Form>
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
