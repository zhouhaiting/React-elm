import React, {Component} from 'react';
import './header.css';

//定义外卖页面的，header组件，蓝色区域
class Header extends Component {
//设置滚动条置顶的状态
    constructor(props) {
        super(props);
        //设置初始值的状态，走问号后面的代码
        this.state = {
            isShow: true
        };
    }
   //加载
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
   //卸载
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    //定义滚动条滚动距离的方法
    handleScroll = (e) => {
        // console.log(e.srcElement.body.scrollTop);
        //如果滚动条距离大于100，改变他的状态为false，走冒号后面的代码
        if (e.srcElement.body.scrollTop > 100) {
            this.setState({
                isShow: false
            })
        } else {
            this.setState({
                isShow: true
            })
        }
    };
    render() {
        // console.log(this.state.isShow)
        return (
            <header style={this.state.isShow ? {display: 'block'} : {position:'fixed',top: '0'} }>
               <div className="h-content">
                   <div className="site clearfix" style={this.state.isShow ? {display:'block'} : {display: 'none'}} > {/*第一行地点div*/}
                       <span className="localtion fl">爱家臻品宫</span>
                       <span className="weather fr">19°多云夜</span>
                   </div>
                   <div className="searchdiv"> {/*搜索框部分*/}
                       <input type="text" name="text" className="search" placeholder="搜索商家，商品名称"/>
                   </div>
                   <div className="food-list" style={this.state.isShow ? {display:'block'} : {display: 'none'}}> {/*食物列表*/}
                       <ul className="ul-list">
                           <li>意大利面</li>
                           <li>三明治</li>
                           <li>豌豆黄</li>
                           <li>绝味</li>
                           <li>健身餐</li>
                           <li>串串</li>
                       </ul>
                   </div>
               </div>

            </header>
        )
    }
}
export default Header;