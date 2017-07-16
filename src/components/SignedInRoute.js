import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const SignedInRoute = props => {
  const { user } = props;

  if (user) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/sign-in" />;
  }
};

export default SignedInRoute;
