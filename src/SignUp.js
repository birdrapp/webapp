import React, { Component } from 'react';
import { Grid, Form, Button, Header, Message } from 'semantic-ui-react';
import './Home.css';
import * as api from './api';
import { Redirect } from 'react-router-dom';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
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

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const { firstName, lastName, email, password } = this.state;

    try {
      await api.signUp({ firstName, lastName, email, password });
      this.setState({ error: null, isLoading: false, success: true });
    } catch (err) {
      this.setState({ error: err.message, isLoading: false });
    }
  };

  renderError() {
    if (this.state.error) {
      return (
        <Message negative>Something went wrong. Please try again.</Message>
      );
    }

    return null;
  }

  render() {
    if (this.state.success) return <Redirect push to="/sign-up/success" />;

    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column computer="4" />
            <Grid.Column width="16" computer="8">
              <Header as="h1">Sign up</Header>
              {this.renderError()}
              <Form onSubmit={event => this.handleSubmit(event)}>
                <Form.Field>
                  <label>First name</label>
                  <input
                    placeholder="First name"
                    required
                    name="firstName"
                    onChange={event => this.handleChange(event)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Last name</label>
                  <input
                    placeholder="Last name"
                    required
                    name="lastName"
                    onChange={event => this.handleChange(event)}
                  />
                </Form.Field>
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
                <Button
                  type="submit"
                  primary
                  fluid
                  size="large"
                  disabled={this.state.isLoading}
                >
                  Sign up
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
