import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Layout } from 'antd';

import Nav from '../containers/Nav'

import '../../styles/main.css';


const { 
    Header, 
    Content, 
    Footer, 
    Sider 
} = Layout;

class Dashboard extends Component {
  render() {
    return (
    	<Layout>
            <Sider>
                <Nav/>
            </Sider>
            <Layout className="full-height-container">
                {this.props.children}
            </Layout>
        </Layout>
    );
  }
}

export default Dashboard;