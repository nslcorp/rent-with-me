import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import Main from "./components/Main";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from './components/Header';
import AddRental from './components/rental/add-rental';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Header />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <Route expath="/add-rent" component={AddRental} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
