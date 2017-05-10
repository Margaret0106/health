import React from 'react';
import { Card, Container } from 'semantic-ui-react';

import PsAccountForm from './PsAccountForm';
import PsAccountCard from './PsAccountCard';

export default class PsAccounts extends React.Component {
  handleSubmit = (psAccount) => {
    const { startAddPsAccount } = this.props;
    startAddPsAccount(psAccount);
  };

  componentDidMount() {
    this.props.startAddPsAccounts();
  }

  render() {
    const {psAccounts} = this.props;
    console.log(psAccounts);

    const renderPsAccounts = () => {
      return this.props.psAccounts.map(account => <PsAccountCard {...account} key={account.id} />);
    };

    return (
        <Container>
          <Card.Group>
            { renderPsAccounts() }
            <PsAccountForm onSubmit={this.handleSubmit} />
          </Card.Group>
        </Container>
    );
  }
}
