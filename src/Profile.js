import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Profile</h1>
      <Button as={Link} to="/sign-out">Sign out</Button>
    </div>
  );
};
