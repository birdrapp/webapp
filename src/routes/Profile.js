import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Main, PageHeader } from '../ui';

export default () => {
  return (
    <Main>
      <PageHeader>Profile</PageHeader>
      <Button as={Link} to="/sign-out" primary>Sign out</Button>
    </Main>
  );
};
