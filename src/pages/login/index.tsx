import * as React from 'react';
import { Component } from 'react';
import './index.less'
import ParticlesBg from 'particles-bg'
import LoginMain from './login-layout/loginMain'
export interface LoginProps {

}

export interface LoginState {

}

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        // this.state = { :  };
    }
    render() {
        return (
            <div className='login'>
                <div className="login-layout">

                <div className="login-layout-header"></div>
                <LoginMain loading={false}></LoginMain>
                <div className="login-layout-footer"></div>
                <ParticlesBg type='circle' bg={true}></ParticlesBg>
                </div>

            </div>
         );
    }
}

export default Login;