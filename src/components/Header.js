import React, { Component } from 'react';
import { Button, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoImage from './icon.svg';
import * as ui from '../ui';

class Header extends Component {
  renderUnauthenicatedLinks() {
    return (
      !this.props.user &&
      this.props.hasLoadedAuth &&
      <div>
        <Button basic as={Link} to="/sign-in">Sign in</Button>&nbsp;
        <Button basic as={Link} color="blue" to="/sign-up">Sign up</Button>
      </div>
    );
  }

  renderAuthenicatedLinks() {
    return (
      this.props.user &&
      this.props.hasLoadedAuth &&
      <div>
        <Button basic as={Link} to="/profile" color="blue">
          <Icon name="user circle outline" />
          {this.props.user.firstName}
        </Button>
      </div>
    );
  }

  render(props) {
    return (
      <ui.Header>
        <ui.Header.Left>
          <Link to="/">
            <Image
              src={LogoImage}
              alt="Birdr"
              height={30}
              style={{ marginTop: '3px' }}
            />
          </Link>
        </ui.Header.Left>
        <ui.Header.Right>
          {this.renderUnauthenicatedLinks()}
          {this.renderAuthenicatedLinks()}
        </ui.Header.Right>
      </ui.Header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  hasLoadedAuth: PropTypes.bool
};

export default Header;
