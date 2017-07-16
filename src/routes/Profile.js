import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Page, Heading } from '../ui';

export default () => {
  return (
    <Page>
      <Heading>Profile</Heading>
      <Button as={Link} to="/sign-out" primary>Sign out</Button>
    </Page>
  );
};
