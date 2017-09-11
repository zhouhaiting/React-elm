import React, {Component} from 'react';
import './header.css';
import hongbao from '../../../static/images/hongbao.jpeg';
import find4 from '../../../static/images/find4.jpeg';


//定义发现页面的，header组件
class Header extends Component{
    render(){
        return(
               <div className="head">
                    <div className="find">
                        <p>发现</p>
                    </div>
                    <div className="integral clearfix"> {/*宽度等分的4个div*/}
                        <a className="section clearfix" href="javascript:;"> {/*4个a标签转化为行内块*/}
                            <div className="fl note">
                                <p className="p1">积分商城</p>
                                <p>0元好物在这里</p>
                            </div>
                            <img className="fr" src={hongbao} alt=""/>
                        </a>
                        <a className="section clearfix" href="javascript:;">
                            <div className="fl note">
                                <p className="p1">美味爆料</p>
                                <p>水果奇葩吃法</p>
                            </div>
                            <img className="fr" src={find4} alt=""/>
                        </a>
                        <a className="section clearfix" href="javascript:;">
                            <div className="fl note">
                                <p className="p1">推荐有奖</p>
                                <p>5元现金拿不停</p>
                            </div>
                            <img className="fr" src={hongbao} alt=""/>
                        </a>
                        <a className="section clearfix" href="javascript:;">
                            <div className="fl note">
                                <p className="p1">有红包快抢</p>
                                <p>礼包福利领不停</p>
                            </div>
                            <img className="fr" src={find4} alt=""/>
                        </a>
                    </div>
               </div>
        )
    }
}
export default Header;