import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item name="Projects" as={Link} to="/" />
        <Menu.Item name="PS Accounts" as={Link} to="/ps" />

        <Menu.Menu>

        </Menu.Menu>
      </Menu>
    );
  }
}
