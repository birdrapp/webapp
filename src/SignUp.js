import React from 'react';
import { Grid, Form, Button, Header } from 'semantic-ui-react';
import './Home.css';

export default () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="0" computer="4" />
          <Grid.Column width="16" computer="8">
            <Header as="h1">Sign up</Header>
            <Form>
              <Form.Field>
                <label>First name</label>
                <input placeholder="First name" required />
              </Form.Field>
              <Form.Field>
                <label>Last name</label>
                <input placeholder="Last name" required />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input type="email" placeholder="Email" required />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" required />
              </Form.Field>
              <Button type="submit" primary fluid size="large">
                Sign up
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
