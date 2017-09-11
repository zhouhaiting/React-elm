import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './footer.css';

//定义底部导航组件，可复用，归档为common文件夹
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-nav">
                    <section className="button">
                        {/*navlink to 1.切换导航指向的页面。2.是添加点击变蓝的状态。3.当做a标签用*/}
                        <NavLink to="/takeout" activeClassName="show">
                            <i className="icon iconfont icon-elmyhq"> </i>
                            外卖
                        </NavLink>
                    </section>
                    <section className="button">
                        <NavLink to="/find" activeClassName="show">
                            <i className="icon iconfont icon-faxian"> </i>
                            发现
                        </NavLink>
                    </section>
                    <section className="button">
                        <NavLink to="/indent" activeClassName="show">
                            <i className="icon iconfont icon-dingdan"> </i>
                            订单
                        </NavLink>
                    </section>
                    <section className="button">
                        <NavLink to="/mine" activeClassName="show">
                            <i className="icon iconfont icon-wode"> </i>
                            我的
                        </NavLink>
                    </section>
                </div>
            </footer>
        )
    }
}

export default Footer;