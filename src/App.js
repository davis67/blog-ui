import logo from "./logo.svg";
import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { PrivateRoute } from "./components/privateRoute";
import { authenticationService } from "./_services/authentication.service";
import { history } from "./_helpers/history";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Post from "./components/post";
import PostCreate from "./components/PostCreate";
import Profile from "./components/profile";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((user) => this.setState({ currentUser: user }));
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser } = this.state;
    let navLink;
    if (currentUser == null) {
      navLink = (
        <div className="flex items-center space-x-8">
          <li className="nav_link">
            <Link to="/login">login</Link>
          </li>
          <li className="nav_link">
            <Link to="/signup">signup</Link>
          </li>
        </div>
      );
    } else {
      navLink = (
        <div className="flex items-center">
          <li className="nav_link">
            <Link to="/profile">Profile</Link>
          </li>
          <a onClick={this.logout} className="nav-item nav-link">
            Logout
          </a>
        </div>
      );
    }
    return (
      <div>
        <Router history={history}>
          <header className="container max-w-full  border-b border-gray-400">
            <div className="w-3/4 mx-auto flex items-center justify-between h-20 inset-0 px-6 ">
              <h2>
                <Link to="/">Blog</Link>
              </h2>
              <ul className="space-x-8 flex items-center text-sm font-medium h-full">{navLink}</ul>
            </div>
          </header>
          <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/signup"} component={Signup} />
            <Route exact path={["/home", "/"]} component={Home} />
            <Route exact path="/posts/:id" component={Post} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute path="/add-post" component={PostCreate} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
