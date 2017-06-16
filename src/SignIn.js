import React from 'react';
import { Grid, Form, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column computer="5" />
          <Grid.Column width="16" computer="6">
            <Header as="h1">Sign in</Header>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input type="email" placeholder="Email" required />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" required />
              </Form.Field>
              <Button type="submit" primary fluid>
                Sign in
              </Button>
              <p>
                <Link to="/reset-password">Forgotten your password?</Link>
              </p>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
