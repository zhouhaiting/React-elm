import React, {Component} from 'react';
// import {Button} from 'antd';
import {withRouter} from 'react-router-dom';
import './foodmsg.css';
import jinbaiwan from '../../../static/images/food2.jpg';
import list1 from '../../../static/images/list1.jpg';
import list3 from '../../../static/images/list3.jpg';
import list2 from '../../../static/images/list2.jpg';
import list4 from '../../../static/images/list4.jpg';
import add from '../../../static/images/add.png';

import {inject, observer} from 'mobx-react';


//定义商品详情页组件
@inject('shoppingChat') @withRouter @observer
class Foodmsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }

    //定义点击购物车事件的方法，出现商品清单,如果没有商品，点击不了
    show = () => {
        if (this.props.shoppingChat.food.length === 0) {
            return false
        } else {
            this.setState({
                display: !this.state.display
            })
        }

    };
    //定义选择菜品的方法
    add = (msg) => {
        this.props.shoppingChat.addFood(msg);
    };
    //减数量的方法
    subtract = (msg) => {
        this.props.shoppingChat.subtractFood(msg);
    }
    //加数量的方法
    added = (msg)=>{
        this.props.shoppingChat.added(msg);
    }
    //清空购物车的方法
    emptyChat = () => {
        this.props.shoppingChat.emptyChat()
        this.setState({
            display: false
        })
    }

    render() {
        // console.log(this.props.shoppingChat.addFood);
        const {history} = this.props;
        return (
            <div className="foodmsg"> {/*店铺整个页面*/}
                <div className="shop-header"> {/*店铺头部信息*/}
                    <i onClick={history.goBack} className="icon iconfont  icon-icon"></i>
                    <div className="jinbaiwan">
                        <img className="fl" src={jinbaiwan} alt=""/>
                        <h2>金百万（东坡府店）<i className="icon iconfont icon-iconfontyoujiantou"></i></h2>
                        <p>金百万客服：13683457089</p>
                        <p><span className="yel">品牌</span><span className="min">蜂鸟专送.约28分钟</span></p>
                    </div>
                    <p className="new"><span className="shou">首</span>新用户下单立减17.0元(不与其他优惠同享)</p>
                </div>
                <div className="tab">
                    <ul className="li clearfix">
                        <li className="on4">商品</li>
                        <li>评价4.4分</li>
                    </ul>
                    <div className="commodity clearfix"> {/*食物列表div*/}
                        <div className="left-list fl"> {/*左边的列表是左浮动的*/}
                            <ul>
                                <li className="on6">热销</li>
                                <li>优惠</li>
                                <li>北京烤鸭</li>
                                <li>热菜</li>
                                <li>凉菜</li>
                                <li>小份菜</li>
                                <li>套餐组合</li>
                                <li>主食</li>
                                <li>饮料</li>
                                <li>饿了吗专享</li>
                                <li>点餐须知</li>
                            </ul>
                        </div>
                        <div className="right-list"> {/*图片列表*/}
                            <h2>热销 大家喜欢吃，才叫真好吃</h2>
                            <section className="pic-list">
                                <img className="fl" src={list1} alt=""/>
                                <div className="name">
                                    <p className="name1">开花馒头</p>
                                    <p>色白喧软，香甜可口</p>
                                    <p>月售1388份 好评率97%</p>
                                    <p className="food-price">¥2.9</p>
                                    <i className="icon iconfont icon-add-cart"
                                       onClick={() => {
                                           this.add({name: '开花馒头', rmb: 2.9})
                                       }}
                                    > </i> {/*菜品下边的加号按钮*/}
                                </div>
                            </section>
                            <section className="pic-list">
                                <img className="fl" src={list3} alt=""/>
                                <div className="name">
                                    <p className="name1">砂锅扁豆</p>
                                    <p>扁豆与肉片的完美烹制</p>
                                    <p>月售138份 好评率85%</p>
                                    <p className="food-price">¥28</p>
                                    <i className="icon iconfont icon-add-cart"
                                       onClick={() => {
                                           this.add({name: '砂锅扁豆', rmb: 28})
                                       }}> </i>
                                </div>
                            </section>
                            <section className="pic-list">
                                <img className="fl" src={list2} alt=""/>
                                <div className="name">
                                    <p className="name1">金百万招牌烤鸭（1份）</p>
                                    <p>招牌烤鸭1份</p>
                                    <p>月售1043份 好评率94%</p>
                                    <p className="food-price">¥99</p>
                                    <i className="icon iconfont icon-add-cart"
                                    onClick={()=>{
                                        this.add({name:'招牌烤鸭1份',rmb:99})
                                    }}> </i>
                                </div>
                            </section>
                            <section className="pic-list">
                                <img className="fl" src={list4} alt=""/>
                                <div className="name">
                                    <p className="name1">干锅花菜</p>
                                    <p>出口感翠，焦香四溢</p>
                                    <p>月售138份 好评率85%</p>
                                    <p className="food-price">¥28</p>
                                    <i className="icon iconfont icon-add-cart"
                                    onClick={()=>{
                                        this.add({name:'干锅花菜',rmb:28})
                                    }}> </i>
                                </div>
                            </section>
                            <section className="pic-list">
                                <img className="fl" src={list1} alt=""/>
                                <div className="name">
                                    <p className="name1">农家小炒肉</p>
                                    <p>油而不腻，色香味俱全</p>
                                    <p>月售188份 好评率90%</p>
                                    <p className="food-price">¥32</p>
                                    <i className="icon iconfont icon-add-cart"
                                    onClick={()=>{
                                        this.add({name:'农家小炒肉',rmb:32})
                                    }}> </i>
                                </div>
                            </section>
                        </div>
                    </div>
                    {/*右边的图片列表结束*/}
                </div>
                <div className="detailed-list"
                     style={this.state.display ? {display: 'block'} : {display: 'none'}}> {/*购物车清单*/}
                    <p className="subtract">满30减8，满60减15</p>
                    <p className="gray clearfix">
                        <span className="fl">已选商品</span>
                        {/*清空按钮*/}
                        <span className="fr" onClick={this.emptyChat}>清空</span>
                    </p>
                    <ul>
                        {
                            this.props.shoppingChat.food.map((f, index) => (
                                <li key={index}>
                                    <span>{f.name}</span>
                                    <span>￥{f.rmb}</span>
                                    <div className="btnn">
                                        <span onClick={() => {
                                            this.subtract({name: '开花馒头', rmb: 2.9})
                                        }}><i className="icon iconfont icon-shanjian"> </i></span>{/*减1按钮*/}
                                        <span>1</span>
                                        <span onClick={()=>{
                                            this.added({name:'开花馒头',rmb:2.9})
                                        }}><i className="icon iconfont icon-add-cart"> </i> </span> {/*加1*/}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <p className="more">商品如需分开打包，请使用多人订餐</p>
                </div>
                <div className="trolley"> {/*底部的添加购物车*/}
                    <span className="add" onClick={this.show}><i className="icon iconfont icon-cart"> </i></span>
                    <span className="pay fr">20元起送</span>
                </div>
            </div> //最外边的div结束
        )
    }
}

export default Foodmsg;