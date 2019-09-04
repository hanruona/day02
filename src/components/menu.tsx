import * as React from 'react';
import { Menu, Icon, Switch } from 'antd';
const { SubMenu } = Menu;
class MenuAntd extends React.Component{
    render(){
        return (
            <div>
 <div>
                        <Menu
                            theme="dark"
                            style={{ width: 256, height: 600 }}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>试题管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1">添加试题</Menu.Item>
                                <Menu.Item key="2">试题分类</Menu.Item>
                                <Menu.Item key="3">查看试卷</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>用户管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5">添加用户</Menu.Item>
                                <Menu.Item key="6">用户展示</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>考试管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="9">添加考试</Menu.Item>
                                <Menu.Item key="10">考试列表</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub5"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>班级管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="9">班级管理</Menu.Item>
                                <Menu.Item key="10">教室管理</Menu.Item>
                                <Menu.Item key="11">学生管理</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub6"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>阅卷管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="9">待批班级</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
            </div>
        )
    }
}
export default MenuAntd