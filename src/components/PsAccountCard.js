import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Card, Dropdown } from 'semantic-ui-react';
import * as actions from './../actions/psAccountsActions';

import ConfirmModal from './ConfirmModal';
import PsProduct from './PsProduct';

export class PsAccountCard extends Component {

  render() {
    const { username, startDeletePsAccount, id, products } = this.props;
    console.log(products);
    const renderProducts = () => products.map((product) => <PsProduct key={product.id} {...product} />)

    return (
      <Card>
        <Card.Content>
          <Card.Header>
            { ` ${username}` }
          </Card.Header>
          <Card.Meta>
          </Card.Meta>
          <Card.Description>
            { renderProducts() }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

          <Dropdown text='Actions'>
            <Dropdown.Menu>
              <Dropdown.Item text='Check availability' />

              <Dropdown.Divider />

              <Dropdown.Item icon='folder' text='Edit' />
              <ConfirmModal
                onConfirm={ () => startDeletePsAccount(id) }
                title='Delete project?'
                description={`This operation will delete ${username} and it's project. It cannot be undone!`}
                >
                <Dropdown.Item icon='trash' text='Delete' />
              </ConfirmModal>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Content>
      </Card>
    );
  }
}

export default connect((state) => state, actions)(PsAccountCard);
