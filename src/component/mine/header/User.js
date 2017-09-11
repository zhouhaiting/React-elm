import React,{Component} from 'react';
//页面需要做路由跳转就要引入react-router
import {Link} from 'react-router-dom';
import { Avatar } from 'antd';
import './user.css';


//定义用户头部信息组件
class User extends Component{
    render(){
        return(
            <div>
                <div className="user"> {/*蓝色我的详情区域*/}
                    <div className="top">
                        <h1><i className="icon iconfont icon-icon"></i>我的</h1>
                    </div>
                    <div className="login clearfix">
                        <span className="fl"></span>
                        <div className="right">
                            {/*点击登录的时候，找到router.js 页面里的路由设置，login对应的组件是Login*/}
                            <p className="p1"><Link to="/login">登录/</Link><Link to="/register">注册</Link></p>
                            <p className="p2">登录后享受更多特权</p>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <a>
                        <i className="icon iconfont icon-hongbao"></i>
                        <p>优惠</p>
                    </a>
                    <a className="fr">
                        <i className="icon iconfont icon-jifen"></i>
                        <p>积分</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default User;