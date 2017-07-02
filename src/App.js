import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignUpSuccess from './SignUpSuccess';
import Profile from './Profile';
import EditProfile from './EditProfile';
import ResetPassword from './ResetPassword';
import NotFound from './NotFound';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up/success" component={SignUpSuccess} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/profile" component={Profile} />
              <Route path="/profile/edit" component={EditProfile} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
