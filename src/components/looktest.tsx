import * as React from 'react';
class Looktest extends React.Component {
    render() {
        return (
            <div className="router-bg">
                <h2 className="style">查看试题</h2>
                <div className="content">
                    <form className="ant-from">
                        <div className="fromBox">
                            <div>
                                <div className="ant-row">
                                    <div className="row-top">
                                        <div className="ant-row ant-form-item">
                                            <div className="ant-col-2 ant-form-item-label">
                                                <label>课程类型</label>
                                            </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                All
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                javeScript上
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                javeScript下
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                模块化开发
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                移动端开发
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                node基础
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                组件化开发(vue)
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                渐进式开发(react)
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                项目实战
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                javeScript高级
                                                </div>
                                            <div className="ant-tag ant-tag-checkable">
                                                node高级
                                                </div>
                                        </div>
                                       <div className="select">
                                           <div className="testtype">
                                               <span>考试类型</span>
                                               
                                           </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Looktest