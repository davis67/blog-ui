import logo from "./logo.svg";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="container max-w-full  border-b border-gray-400">
          <div className="w-3/4 mx-auto flex items-center justify-between h-20 inset-0 px-6 ">
            <h2>
              <Link to="/">Blog</Link>
            </h2>
            <ul className="space-x-8 flex items-center text-sm font-medium h-full">
              <li className="nav_link">
                <Link to="/home">Profile</Link>
              </li>
              <li className="nav_link">
                <Link to="/home">logout</Link>
              </li>
              <li className="nav_link">
                <Link to="/login">login</Link>
              </li>
              <li className="nav_link">
                <Link to="/signup">signup</Link>
              </li>
            </ul>
          </div>
        </header>
        <div>
          <Switch>
            <Route path={"/login"} component={Login} />
            <Route path={"/signup"} component={Signup} />
            <Route path={"/home"} component={Home} />
            <Route path={"/"} component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
