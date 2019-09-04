import * as React from 'react';
// import { inject, observer } from 'mobx-react'
// interface Props {
//     user: any,
//     abc?: string
// }

// @inject('user')
// @observer
class Login extends React.Component{
    constructor(props: any) {
        super(props)
        this.state = {
            user_name: "",
            user_pwd: ""
        }
    }
    render() {
        return (
            <div className="loginBg">
                <div className="loginBox">
                    <h2 className="title">考试管理平台</h2>
                    <p>
                        <input type="text" placeholder=" 请输入用户名" onChange={(e) => {
                            this.setState({
                                user_name: e.target.value
                            })
                        }} />
                    </p>
                    <p>
                        <input type="text" placeholder=" 请输入密码" onChange={(e) => {
                            this.setState({
                                user_pwd: e.target.value
                            })
                        }} />
                    </p>
                    <p>
                        <input type="checkbox" className="checbox" />
                        <span>记住密码</span><a href="#">忘记密码</a>
                    </p>
                    <button onClick={this.hasPrppos.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
    hasPrppos() {
        this.props["history"].push('/main')
    }

}

export default Login
