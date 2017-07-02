import React from 'react';
import { Grid, Form, Button, Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column computer="4" />
          <Grid.Column width="16" computer="8">
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
              <p>
                <Button type="submit" primary fluid size="large">
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
};
