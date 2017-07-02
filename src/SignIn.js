import React, { Component } from 'react';
import {
  Grid,
  Form,
  Button,
  Header,
  Container,
  Message
} from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import './Home.css';
import * as api from './api';
import { saveToken, clearToken } from './token';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      error: null,
      isLoading: false,
      success: false
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderError() {
    if (!this.state.error) return null;

    return <Message negative>{this.state.error}</Message>;
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const { email, password } = this.state;

    try {
      const { token } = await api.signIn({ email, password });
      saveToken(token);

      const user = await api.getUser();
      this.props.setUser(user);

      this.setState({ error: null, isLoading: false, success: true });
    } catch (err) {
      let message = err.message;

      if (err.status === 401) {
        message = 'Please check your username and password and try again.';
      } else {
        message = 'Something went wrong. please try again.';
      }

      this.setState({ error: message, isLoading: false });
      clearToken();
    }
  };

  render() {
    if (this.state.success) return <Redirect push to="/birds" />;

    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column computer="4" />
            <Grid.Column width="16" computer="8">
              <Header as="h1">Sign in</Header>
              {this.renderError()}
              <Form onSubmit={event => this.handleSubmit(event)}>
                <Form.Field>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    onChange={event => this.handleChange(event)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    type="password"
                    required
                    name="password"
                    onChange={event => this.handleChange(event)}
                  />
                </Form.Field>
                <p>
                  <Button
                    type="submit"
                    primary
                    fluid
                    size="large"
                    loading={this.state.isLoading}
                    disabled={this.state.isLoding}
                  >
                    Sign in
                  </Button>
                </p>
                <Container textAlign="center">
                  <p>
                    <Link to="/reset-password">Forgotten your password?</Link>
                  </p>
                </Container>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
