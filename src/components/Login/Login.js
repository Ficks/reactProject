import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

import { editIsLogin } from '../../actions/userInfo';
import "./Login.css"

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};


const FormItem = Form.Item;
class NormalLoginForm extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.editIsLogin(true);
                this.props.history.push('/')
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_body">
                <div className="mask"></div>
                <div className="login">
                    <h1>登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem {...formItemLayout} label="账号">
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入您的登录账号!' }],
                                initialValue: 'admin'
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="密码">
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入您的登录密码!' }],
                                initialValue: 123456
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem className="ordi">
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">忘记密码</a>
                        </FormItem>
                        <FormItem className="submit_btn">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editIsLogin: (...args) => dispatch(editIsLogin(...args))
    }
}
var LoginApp = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)
export default LoginApp;