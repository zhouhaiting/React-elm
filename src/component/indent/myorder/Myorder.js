import React,{Component} from 'react';
import './myorder.css';


//定义订单页面的，我的订单组件
class Myorder extends Component{
    render(){
        return(
            <div className="myorder">{/*我的订单最外div*/}
                <div className="title clearfix"> {/*第一行蓝色标题*/}
                    <span className="fl">订单</span>
                    <span className="fr">早餐</span>
                </div>
                <div className="my clearfix"> {/*我的订单div*/}
                    <h3 className="fl">我的订单</h3>
                    <span className="fr"><a>全部订单></a></span>
                    <p><a >查看全部></a></p>
                </div>
            </div>
        )
    }
}
export default Myorder;