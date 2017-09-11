import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Shops from '../shops/Shop';
import './goodfood.css';
import $ from 'jquery';
import good1 from '../../../static/images/good1.jpg';
import good2 from '../../../static/images/good2.jpg';
import good3 from '../../../static/images/good3.jpg';
import good4 from '../../../static/images/good4.jpg';


@withRouter
export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.titles = [];
        this.contents = [];
        this.timer = null;//全局定时器
        this.loop = 0;//计数器
    }

    static defaultProps = {
        triggerType: "click",  //用来定义鼠标的触发类型，是click还是 mouseover
        effect: "default",         //用来定义内容切换效果,是直接切换还是淡入淡出效果
        invoke: 1,                 //默认显示第几个tab
        auto: 0,                //用来定义tab是否自动切换，当指定了时间间隔，就表示自动切换，且切换时间就是指定时间
        title: ['全部', '简餐便当', '面食粥点', '香锅冒菜'] //tab 标签

    }

    componentDidMount() {
        this.titles = $('.title-ul li');//标签列表
        this.contents = $('.content-item');//内容列表
        let config = this.props;
        if (config.triggerType === "click") {
            this.handleClick();
        } else if (config.triggerType === "mouseover") {
            this.handleMouseOver();
        }
        if (this.props.auto && this.props.auto !== 0) {
            this.handleAutoPaly();
            this.handleClearTimer();
        }
        //指定初始的页面
        if (this.props.invoke > 1) {
            this.handleInvoke(this.titles.eq(this.props.invoke - 1));
        }
    }

    //鼠标点击事件
    handleClick = () => {
        let _this = this;
        this.titles.bind("click", function () {
            _this.handleInvoke($(this));
        });
    }
    //鼠标悬浮事件
    handleMouseOver = () => {
        let _this = this;
        this.titles.bind("mouseover", function () {
            _this.handleInvoke($(this));
        });
    }
    //事件驱动函数
    handleInvoke = (currentItem) => {
        let index = currentItem.index();//当前点击的item,在titles集合里的位置
        //把点击的item上添加了 active class属性，并且把其他的兄弟元素的 active属性 移除
        currentItem.addClass("active").siblings().removeClass("active");
        let effect = this.props.effect;
        if (effect === "fade") {
            this.contents.eq(index).fadeIn().siblings().fadeOut();
        } else {
            this.contents.eq(index).addClass("current").siblings().removeClass("current");
        }
        //配置了自动切换，当前的loop值和当前的tab的index保持一致
        if (this.props.auto && this.props.auto !== 0) {
            this.loop = index;
        }
    }
    //自动切换
    handleAutoPaly = () => {
        let auto = this.props.auto;
        let _this = this;
        let length = this.titles.length;
        let tabItem = this.titles;
        if (auto && auto !== 0) {
            this.timer = window.setInterval(function () {
                _this.loop++;
                if (_this.loop >= length) {
                    _this.loop = 0;
                }
                tabItem.eq(_this.loop).trigger(_this.props.triggerType);//触发被选元素的指定事件类型。
            }, auto);
        }
    }
    //清除定时器
    handleClearTimer = () => {
        let _this = this;
        this.contents.hover(function () {
            window.clearInterval(_this.timer);
        }, function () {
            _this.handleAutoPaly();
        });
    }

//判断是否是pc
    handleIsPc = () => {
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    };

    render() {
        //对象结构赋值写法，this.props包含：history是最常用的，match，location可以获取当前页的路径
        const {history} = this.props
        // console.log(this.props)
        return (
            <div className="tab-food">
                <div className="li-list">
                    <div className="title4">
                        <i onClick={history.goBack} className="icon iconfont  icon-icon"></i>
                        <span>美食</span>
                    </div>
                    <ul className="title-ul">
                        <li className="active"><a>{this.props.title[0]}</a></li>
                        <li><a>{this.props.title[1]}</a></li>
                        <li><a>{this.props.title[2]}</a></li>
                        <li><a>{this.props.title[3]}</a></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="content-item current">
                        <div className="set-mail">{/*热卖套餐*/}
                            <h2>热卖套餐</h2>
                            <ul>
                                <li><img src={good1} alt=""/>
                                    <p>鸡腿卤肉拼饭</p>
                                    <p>¥32</p>
                                </li>
                                <li><img src={good1} alt=""/>
                                    <p>鸭腿卤肉拼饭</p>
                                    <p>¥30</p>
                                </li>
                                <li><img src={good1} alt=""/>
                                    <p>欧文卤肉饭</p>
                                    <p>¥28</p>
                                </li>
                            </ul>
                        </div>
                        {/*热卖套餐 end*/}
                        <Shops/> {/*复用首页的组件*/}
                    </div>
                    <div className="content-item">
                        <div className="set-mail">{/*简餐便当*/}
                            <h2>简餐便当</h2>
                            <ul>
                                <li><img src={good2} alt=""/>
                                    <p>大份黄焖鸡微辣</p>
                                    <p>¥32</p>
                                </li>
                                <li><img src={good2} alt=""/>
                                    <p>小份黄焖鸡</p>
                                    <p>¥30</p>
                                </li>
                                <li><img src={good2} alt=""/>
                                    <p>黄焖鸡</p>
                                    <p>¥28</p>
                                </li>
                            </ul>
                        </div>{/*简餐便当 end*/}
                        <Shops/>
                    </div>
                    <div className="content-item">
                        <div className="set-mail">{/*面食粥点*/}
                            <h2>面食粥点</h2>
                            <ul>
                                <li><img src={good3} alt=""/>
                                    <p>皮蛋瘦肉粥</p>
                                    <p>¥10</p>
                                </li>
                                <li><img src={good3} alt=""/>
                                    <p>芹菜肉末粥</p>
                                    <p>¥8</p>
                                </li>
                                <li><img src={good3} alt=""/>
                                    <p>大米粥</p>
                                    <p>¥6</p>
                                </li>
                            </ul>
                        </div>{/*面食粥点 end*/}
                        <Shops/>
                    </div>
                    <div className="content-item">
                        <div className="set-mail">{/*香锅冒菜*/}
                            <h2>香锅冒菜</h2>
                            <ul>
                                <li><img src={good4} alt=""/>
                                    <p>牛肉热干面</p>
                                    <p>¥28</p>
                                </li>
                                <li><img src={good4} alt=""/>
                                    <p>香锅</p>
                                    <p>¥20</p>
                                </li>
                                <li><img src={good4} alt=""/>
                                    <p>冒菜</p>
                                    <p>¥26</p>
                                </li>
                            </ul>
                        </div>{/*香锅冒菜 end*/}
                        <Shops/>
                    </div>
                </div>
            </div>
        )
    }
}