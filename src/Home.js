import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import './Home.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <img src={logo} alt="Birdr" className="Logo" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer="5" />
          <Grid.Column width="16" computer="6">
            <Button
              primary
              fluid
              style={{ marginBottom: '8px' }}
              as={Link}
              to="/sign-up"
            >
              Create an account
            </Button>
            <Button fluid as={Link} to="sign-in">
              Already a member? Sign in
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
