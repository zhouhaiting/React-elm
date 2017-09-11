import React,{Component} from 'react';
import './nearby.css';


//定义订单页面的，附件买过组件
class Nearby extends Component{
    render(){
        return(
            <div className="buy">{/*附近买过*/}
               <ul className="buyed clearfix">
                   <li className="on"><a>附近买过</a></li>
                   <li><a>附近收藏</a></li>
               </ul>
            </div>
        )
    }
}
export default Nearby;