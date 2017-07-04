import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import SignUpSuccess from './SignUpSuccess';
import Profile from './Profile';
import EditProfile from './EditProfile';
import ResetPassword from './ResetPassword';
import NotFound from './NotFound';
import Header from './Header';
import * as api from './api';
import { getToken } from './token';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount = async () => {
    const token = getToken();
    if (!token) return;

    const user = await api.getUser();
    this.setUser(user);
  };

  setUser(user) {
    this.setState({ user });
  }

  clearUser() {
    this.setState({ user: null });
  }

  render() {
    const { user } = this.state;

    return (
      <Router>
        <div>
          <Header user={user} />
          <Container>
            <Switch>
              <Route exact path="/" render={() => <Home user={user} />} />
              <Route
                path="/sign-in"
                render={() => <SignIn setUser={user => this.setUser(user)} />}
              />
              <Route path="/sign-up/success" component={SignUpSuccess} />
              <Route path="/sign-up" component={SignUp} />
              <Route
                path="/sign-out"
                render={() => <SignOut clearUser={() => this.clearUser()} />}
              />
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
