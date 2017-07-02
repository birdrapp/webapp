import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import './Home.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Grid columns={16}>
        <Grid.Row>
          <Grid.Column width="0" computer="4" />
          <Grid.Column width="16" computer="8">
            <img src={logo} alt="Birdr" className="Logo" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="0" computer="4" />
          <Grid.Column width="16" computer="8">
            <p>
              <Button primary size="large" fluid as={Link} to="/sign-up">
                Create an account
              </Button>
            </p>
            <p>
              <Button fluid size="large" as={Link} to="sign-in">
                Already a member? Sign in
              </Button>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
