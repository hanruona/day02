import * as React from 'react';
import "./index.css"
//头部组件
import Header from '../../components/header';
//导航栏组件
import MenuAntd from '../../components/menu';
//路由组件
// import RouterView from '../../router/RouterView';
//查看试卷组件
import Looktest from '../../components/looktest';
export default class Main extends React.Component {
    state = {
        current: '',
    };
    render() {
        return (
            <div>
                <Header />
                <div className="router-box">

                    <div className="maini-left">
                        <MenuAntd />
                    </div>
                    <div className="maini-right">
                        {/* <RouterView routes={this.props.children[0]} /> */}
                        <Looktest />
                    </div>
                </div>

            </div>
        )
    }
}

