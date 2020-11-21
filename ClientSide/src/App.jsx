import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Writerev from "./pages/Writerev";
import Housereview from "./pages/Housereview";
import Afterreview from "./pages/Afterreview";
import Account from "./pages/Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    const loggedInUser = sessionStorage.getItem("user");
    //console.log(loggedInUser);
    if (loggedInUser) {
      //console.log(loggedInUser + "is logged in");
    } else {
      //console.log("no one is logged in");
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/writeareview"
              exact
              component={RequireAuth(Writerev)}
            />
            <Route
              exact
              path="/housereview/:id"
              render={(props) => <Housereview />}
            />
            <Route exact path="/thankyou" component={Afterreview} />
            <Route path="/account" exact component={Account} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const RequireAuth = (Component) => {
  return class App extends React.Component {
    componentWillMount() {
      const getToken = sessionStorage.getItem("user");
      if (!getToken) {
        this.props.history.replace({ pathname: "/account" });
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  };
};

export default App;
