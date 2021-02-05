import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import store from "../store";
import { Provider } from "react-redux";


// import { connect } from "react-redux";
import Header from "./layout/Header";
import Dashboard from "./todo/Dashboard";



// import TodoList from "./todoList/TodoList";

// Alert Options


class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    return (
        <Provider store={store}>
            <Fragment>
              <Header />
              <div className="container">
                  <Dashboard/>
              </div>
            </Fragment>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
