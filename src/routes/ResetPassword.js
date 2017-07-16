import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { Main, PageHeader, Card } from '../ui';

export default () => {
  return (
    <Main>
      <Grid>
        <Grid.Row>
          <Grid.Column computer="4" />
          <Grid.Column width="16" computer="8">
            <PageHeader>Reset password</PageHeader>
            <Card>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input type="email" placeholder="Email" required />
                </Form.Field>
                <Button type="submit" primary fluid>
                  Reset password
                </Button>
              </Form>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Main>
  );
};
