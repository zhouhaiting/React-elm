import React,{Component} from 'react';
import './content.css';


//定义我的页面--》中间内容部分
class Content extends Component{
    render(){
        return(
            <div className="box">
                <div className="colom">
                    <a >
                        <i className="icon iconfont icon-dingdan"></i>
                        <p>我的订单<i className="icon right iconfont icon-iconfontyoujiantou"></i></p>
                    </a>
                    <a>
                        <i className="icon iconfont icon-points"></i>
                        <p>积分商城<i className="icon right iconfont icon-iconfontyoujiantou"></i></p>
                    </a>
                </div>
                <div className="colom">
                    <a>
                        <i className="icon iconfont icon-3"></i>
                        <p>服务中心<i className="icon right iconfont icon-iconfontyoujiantou"></i></p>
                    </a>
                    <a>
                        <i className="icon iconfont icon-elmyhq"></i>
                        <p>下载APP<i className="icon right iconfont icon-iconfontyoujiantou"></i></p>
                    </a>
                </div>
            </div>
        )
    }
}

export default Content;