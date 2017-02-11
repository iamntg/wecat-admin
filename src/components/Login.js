import React, { Component } from 'react';
import { Row, Col, Layout, Form, Icon, Input, Button, Checkbox } from 'antd';

import '../../styles/main.css';


const FormItem = Form.Item;
const { 
	Header, 
	Content, 
	Footer, 
	Sider 
} = Layout;


const LoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    	<Form onSubmit={this.handleSubmit} className="login-form">
	        <FormItem>
		    	{getFieldDecorator('userName', {
		        	rules: [{ type:'email', 
		        			  required: true, 
		        			  message: 'Please input your username!' }],
		          })(
		    		<Input addonBefore={<Icon type="user" />} 
		    			   placeholder="Username" />
		    	)}
	        </FormItem>
	        <FormItem>
	        	{getFieldDecorator('password', {
	        		rules: [{ required: true, 
	        				  message: 'Please input your Password!' }],
	        	})(
	        		<Input addonBefore={<Icon type="lock" />} 
	        			   type="password" 
	        			   placeholder="Password" />
	        	)}
	        </FormItem>
	        <FormItem>
	          
	          <Button type="primary" 
	          		  htmlType="submit" 
	          		  className="login-form-button">
	            Log in
	          </Button>
	        </FormItem>
    	</Form>
    );
  },
}));



class Login extends Component {
	render() {
		return(
			<Layout className="login-form-layout">
				<Content className="login-form-content">
					<Row>
						<Col span={8}></Col>
					    <Col span={8}><LoginForm/></Col>
					    <Col span={8}></Col>
				    </Row>
				</Content>
			</Layout>
		);
	}
}

export default Login;