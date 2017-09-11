import React, {Component} from 'react';
import './hot.css';
import list1 from '../../../static/images/list1.jpg';
import list2 from '../../../static/images/list2.jpg';
import hot1 from '../../../static/images/hot1.jpeg';
import hot2 from '../../../static/images/hot2.jpeg';
import hot3 from '../../../static/images/hot3.jpeg';

//定义美食热推组价
class Hotcake extends Component{
   render(){
       return(
           <div className="hotfood">{/*美食热推div*/}
               <div className="food-content">
                   <h3><span></span><i className="icon iconfont icon-bangbang"></i>美食热推<span></span></h3>
                   <p>你的口味，我都懂得</p>
                   <div className="hot-list">
                      <img src={list1} alt=""/>
                       <img src={hot1} alt=""/>
                       <img src={hot2} alt=""/>
                   </div>
               </div>
               <div className="food-content">
                   <h3><span></span><i className="icon iconfont icon-tejia"></i>天天特价<span></span></h3>
                   <p>特价商品，一网打尽</p>
                   <div className="hot-list">
                       <img src={list2} alt=""/>
                       <img src={hot2} alt=""/>
                       <img src={hot1} alt=""/>
                   </div>
               </div>
               <div className="food-content">
                   <h3><span></span><i className="icon iconfont icon-bangbang"></i>限时好礼<span></span></h3>
                   <p>小积分换豪礼</p>
                   <div className="hot-list">
                       <img src={hot3} alt=""/>
                       <img src={hot3} alt=""/>
                       <img src={hot3} alt=""/>
                   </div>
               </div>

           </div>
       )
   }
}
export default Hotcake;