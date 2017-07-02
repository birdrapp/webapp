import React from 'react';
import { Message, Button, Header, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default () => (
  <Grid>
    <Grid.Row>
      <Grid.Column computer="4" />
      <Grid.Column width="16" computer="8">
        <Header as="h1">Sign up</Header>
        <Message positive>Your account was successfully created</Message>
        <Button as={Link} to="/sign-in" fluid primary size="large">
          Sign in
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
