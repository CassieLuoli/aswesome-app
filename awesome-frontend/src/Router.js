import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import App from './App'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={App} />
      </Router>
    );
  }
}

export default AppRouter;
