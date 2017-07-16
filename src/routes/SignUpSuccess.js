import React from 'react';
import { Message, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Main, PageHeader, Card } from '../ui';

export default () => (
  <Main>
    <Grid>
      <Grid.Row>
        <Grid.Column computer="4" />
        <Grid.Column width="16" computer="8">
          <PageHeader>Sign up</PageHeader>
          <Card>
            <Message positive>Your account was successfully created</Message>
            <Button as={Link} to="/sign-in" fluid primary>
              Sign in
            </Button>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Main>
);
