import * as React from 'react';
import { Component } from 'react';
import { Form, Button, Input, notification, message } from 'antd'
export interface LoginMainProps {
    loading: boolean
}
const { Item } = Form

export interface LoginMainState {

}
class LoginMain extends React.Component<LoginMainProps, LoginMainState> {

    constructor(props: LoginMainProps) {
        super(props);
        // this.state = { :  };

    }

    render() {

        return (
            <div className='login-layout-main'>
                <div className="main-form">
                <h2>登录</h2>
                <Form className='main-form-box'>
                    <Item>
                        <Input placeholder="请输入用户名"></Input>
                    </Item>
                    <Item>
                        <Input type="password" placeholder="请输入密码"></Input>
                    </Item>
                    <Item>
                        <Button>登录</Button>
                    </Item>
                    <Item>
                        <div className='main-form-box-other'>
                            <p>其他登录方式</p>
                            <div className='any'>
                                <span>QQ</span>
                                <span>微信</span>
                                <span>手机号</span>
                            </div>
                        </div>
                    </Item>
                </Form>
                </div>
            </div>
        );
    }
}

export default LoginMain;