import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import '../../styles/main.css';
import Login from '../components/Login';
import Dashboard from '../containers/Dashboard';

class App extends Component {
  render() {
    return (
    	<Router history={browserHistory}>
    		<Route path="/home/" component={Dashboard}>
    		</Route>
    		<Route path="*" component={Login}/>
    	</Router>
    );
  }
}

export default App;