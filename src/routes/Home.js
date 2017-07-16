import React from 'react';
import { Image, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import BirdList from './BirdList';
import { Page } from '../ui';

export default ({ user }) => {
  if (user) return <BirdList user={user} />;

  return (
    <Page>
      <Grid>
        <Grid.Row>
          <Grid.Column computer="4" />
          <Grid.Column width="16" computer="8">
            <Image
              src={logo}
              alt="Birdr"
              className="Logo"
              centered
              height={275}
            />
            <p>
              <Button primary fluid as={Link} to="/sign-up">
                Create an account
              </Button>
            </p>
            <p>
              <Button fluid as={Link} to="sign-in">
                Already a member? Sign in
              </Button>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Page>
  );
};
