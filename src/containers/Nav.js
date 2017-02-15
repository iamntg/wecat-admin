import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Icon } from 'antd';

import '../../styles/main.css';

const { 
    Header, 
    Content, 
    Footer,  
} = Layout;

const { SubMenu } = Menu;


class Nav extends Component {
  render() {
    return (
    	<div>
    		<div className="logo" />
        	<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
	        	<SubMenu key="user" title={<span><Icon type="user" />Users</span>}>
            		<Menu.Item key="listUsers">
            			<Link to="/home/user/list">User List</Link>
            		</Menu.Item>
	            	<Menu.Item key="addUser">
	            		<Link to="/home/user/add">Add User</Link>
	            	</Menu.Item>
	            </SubMenu>
	            <SubMenu key="feed" title={<span><Icon type="notification" />Feeds</span>}>
	            	<Menu.Item key="listFeeds">Feeds List</Menu.Item>
	            	<Menu.Item key="addFeed">Add Feed</Menu.Item>
	            </SubMenu>
	            <Menu.Item key="logout">
	            	<Link to="/">
	            		<Icon type="upload" />
	              		<span className="nav-text">Logout</span>
	            	</Link>
	            </Menu.Item>
        	</Menu>
    	</div>
    );
  }
}

export default Nav;