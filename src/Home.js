import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import './Home.css';
import logo from './logo.svg';

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
          <Grid.Column width={0} computer={5} />
          <Grid.Column width={16} computer={6}>
            <Button primary fluid style={{ marginBottom: '8px' }}>
              Create an account
            </Button>
            <Button fluid>Already a member? Sign in</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
