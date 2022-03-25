import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from '@material-ui/core/styles'
// import theme from './theme';
import { Switch, Route } from 'react-router-dom'
import SearchBar from '../SearchBar';


class Main extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" component={SearchBar} />
        </Switch>
    );
  }
}

export default Main;
