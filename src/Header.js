import React, { Component } from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Icon from './icon.svg';
import PropTypes from 'prop-types';

class Header extends Component {
  renderUnauthenicatedLinks() {
    return (
      !this.props.user &&
      <div>
        <Button basic as={Link} to="/sign-in">Sign in</Button>&nbsp;
        <Button basic as={Link} color="blue" to="/sign-up">Sign up</Button>
      </div>
    );
  }

  renderAuthenicatedLinks() {
    return (
      this.props.user &&
      <div>
        <Button basic as={Link} to="/sign-out">Sign out</Button>
      </div>
    );
  }

  render(props) {
    return (
      <Menu borderless style={{ borderRadius: 0, border: 0 }}>
        <Container>
          <Menu.Item as={Link} to="/">
            <img src={Icon} alt="Birdr" width="40" />
          </Menu.Item>
          <Menu.Item position="right">
            {this.renderUnauthenicatedLinks()}
            {this.renderAuthenicatedLinks()}
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object
};

export default Header;
