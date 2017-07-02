import React from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Icon from './icon.svg';

export default () => (
  <Menu borderless style={{ borderRadius: 0, border: 0 }}>
    <Container>
      <Menu.Item as={Link} to="/">
        <img src={Icon} alt="Birdr" width="40" />
      </Menu.Item>
      <Menu.Item position="right">
        <Button basic as={Link} to="/sign-in">Sign in</Button>&nbsp;
        <Button basic as={Link} color="blue" to="/sign-up">Sign up</Button>
      </Menu.Item>
    </Container>
  </Menu>
);
