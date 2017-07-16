import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { clearToken } from '../lib/token';

export default class SignOut extends Component {
  constructor(props) {
    super(props);
    this.state = { signedOut: false };
  }

  componentWillMount() {
    clearToken();
    this.props.clearUser();
    this.setState({ signedOut: true });
  }

  render() {
    if (this.state.signedOut) return <Redirect to="/" />;

    return null;
  }
}
