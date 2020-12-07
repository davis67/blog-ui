import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import { history } from "./_helpers/history";
import { authenticationService } from "./_services/authentication.service";
import { PrivateRoute } from "./components/privateRoute";
import { HomePage } from "./HomePage/HomePage";
import { LoginPage } from "./LoginPage/LoginPage";
import Profile from "./components/profile";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) => this.setState({ currentUser: x }));
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/profile" className="nav-item nav-link">
                Profile
              </Link>
              {currentUser && (
                <div className="d-flex">
                  <a onClick={this.logout} className="nav-item nav-link">
                    Logout
                  </a>
                </div>
              )}
            </div>
          </nav>

          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <PrivateRoute exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/profile" component={Profile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export { App };
