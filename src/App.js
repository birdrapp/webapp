import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import SignOut from './routes/SignOut';
import SignUpSuccess from './routes/SignUpSuccess';
import Profile from './routes/Profile';
import EditProfile from './routes/EditProfile';
import ResetPassword from './routes/ResetPassword';
import NotFound from './routes/NotFound';
import Header from './components/Header';
import * as api from './lib/api';
import { getToken } from './lib/token';
import SignedInRoute from './components/SignedInRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      hasLoadedAuth: false
    };
  }

  componentDidMount = async () => {
    const token = getToken();

    if (!token) {
      this.setState({ hasLoadedAuth: true });
      return;
    }

    const user = await api.getUser();

    this.setState({
      user,
      hasLoadedAuth: true
    });
  };

  setUser(user) {
    this.setState({ user });
  }

  clearUser() {
    this.setState({ user: null });
  }

  renderRoute() {
    const { user, hasLoadedAuth } = this.state;

    if (!hasLoadedAuth) return null;

    return (
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
        <Route path="/reset-password" component={ResetPassword} />
        <SignedInRoute path="/profile" component={Profile} user={user} />
        <SignedInRoute
          path="/profile/edit"
          component={EditProfile}
          user={user}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }

  render() {
    const { user, hasLoadedAuth } = this.state;

    return (
      <Router>
        <div>
          <Header user={user} hasLoadedAuth={hasLoadedAuth} />
          {this.renderRoute()}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
