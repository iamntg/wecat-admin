import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import '../../styles/main.css';
import Dashboard from '../containers/Dashboard';
import User from '../containers/User';
import Feed from '../containers/Feed';
import Login from '../components/Login';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

class App extends Component {
  render() {
    return (
    	<Router history={browserHistory}>
    		<Route path="/home/" component={Dashboard}>
    			<Route path="/home/user" component={User}>
                    <Route path="/home/user/list" component={UserList}/>
                    <Route path="/home/user/add" component={UserForm}/>
                </Route>
    			<Route path="/home/feed" component={Feed}></Route>
    		</Route>
    		<Route path="/" component={Login}/>
    	</Router>
    );
  }
}

export default App;