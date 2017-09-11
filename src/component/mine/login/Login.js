import React,{Component} from 'react';
import './login.css';
import $ from 'jquery';


//const Login = ()=>()无状态组件，跟class的区别是没有生命周期
//箭头函数的写法，后面直接跟小括号代表直接到return那步
class Login extends Component{
    constructor(props) {
        super(props);
        //获取验证码设置初始状态的值为true，也就是不可点击
        this.state={
            phone:'',
            disabled: true
        };
        this.titles = [];
        this.cons = [];
        this.timer = null;//全局定时器
        this.loop = 0;//计数器
    }
    //选项卡设置
    static defaultProps = {
        triggerType: "click",  //用来定义鼠标的触发类型，是click还是 mouseover
        effect: "default",         //用来定义内容切换效果,是直接切换还是淡入淡出效果
        invoke: 1,                 //默认显示第几个tab
        auto: 0,                //用来定义tab是否自动切换，当指定了时间间隔，就表示自动切换，且切换时间就是指定时间
        title:['短信登录','密码登录'] //tab 标签

    }

    componentDidMount() {
        this.titles = $('.login-ul li');//标签列表
        this.cons = $('.input');//内容列表
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
        if(this.props.invoke>1){
            this.handleInvoke(this.titles.eq(this.props.invoke-1));
        }
    }

    //鼠标点击事件
    handleClick = () => {
        let _this = this;
        this.titles.bind("click", function () {
            _this.handleInvoke($(this));
        });
    }
    //事件驱动函数
    handleInvoke = (currentItem) => {
        let index = currentItem.index();//当前点击的item,在titles集合里的位置
        currentItem.addClass("on5").siblings().removeClass("on5"); //把点击的item上添加了 active class属性，并且把其他的兄弟元素的 active属性 移除
        let effect = this.props.effect;
        if (effect === "fade") {
            this.cons.eq(index).fadeIn().siblings().fadeOut();
        } else {
            this.cons.eq(index).addClass("cur").siblings().removeClass("cur");
        }
        //配置了自动切换，当前的loop值和当前的tab的index保持一致
        if (this.props.auto && this.props.auto !== 0) {
            this.loop = index;
        }
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
    }
    //判断手机号输入是否准确，准确则按钮可以点击
    fn(event){
        //改变他的状态为用户输入的内容
        this.setState({
            phone:event.target.value
        });
        //定义手机号正则
        const patten = /^(13[0-9]|15[0-9]|14[579]|17[0135678]|18[0-9])\d{8}$/;
        //判断是否符合上述正则表达式，if括号里代表如果符合，则disbalded变为false可点击的
        if (patten.test(event.target.value)) {
            this.setState({
                disabled: false
            })
        } else {
            this.setState({
                disabled: true
            })
        }
    }
    render(){
        return(
            <div className="login-page">
                <h1><i className="icon iconfont icon-elmyhq"> </i>饿了吗</h1>
                <p className="title2">美好生活，触手可得</p>
                <div className="login-method">
                    <div className="title3"> {/*可点击的li列表*/}
                       <ul className="login-ul">
                           <li className="on5"><a>{this.props.title[0]}</a></li>
                           <li><a>{this.props.title[1]}</a></li>
                       </ul>
                    </div>
                    <div className="cons">
                        <div className="input cur"> {/*可变换的div*/}
                            <p className="telephone">
                                <input ref='phone' type="text" placeholder="手机号" onInput={this.fn.bind(this)}/>
                                <input ref='yanzheng' id="verify" type="button" value='获取验证码'
                                       disabled={this.state.disabled}/>
                            </p>{/*监测输入框的手机号来决定按钮的状态，oninput事件是在用户输入时触发*/}
                            <p><input type="text" placeholder="验证码"/></p>
                            <p className="p3">温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，
                                且代表您已同意《用户服务协议》</p>
                            <p><button>登录</button></p>
                        </div>
                        <div className="input">
                            <p><input type="text" placeholder="手机/邮箱/用户名"/></p>
                            <p><input type="pasword" placeholder="密码"/></p>
                            <p><button>登录</button></p>
                        </div>
                    </div>
                </div>
                <div className="beian">
                    <h4>所有方：上海拉扎斯信息科技有限公司</h4>
                    <p>增值电信业务许可证，上海工商行政管理</p>
                </div>
            </div>
        )
    }
}

export default Login;