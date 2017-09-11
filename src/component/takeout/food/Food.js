import React, {Component} from 'react';
import {Link} from 'react-router-dom';//页面需要路由跳转就要引react-router
import './food.css';
import pic1 from '../../../static/images/pic1.jpeg';
import pic2 from '../../../static/images/pic2.jpeg';
import pic3 from '../../../static/images/pic3.jpeg';
import pic4 from '../../../static/images/pic4.jpeg';
import pic5 from '../../../static/images/pic5.jpeg';
import activity from '../../../static/images/new.jpg';


//可以滑动的食物列表
class Food extends Component{
    render(){
        return(
            <div className="slide-list">
                <div className="list">
                    <section>
                        <a>
                            <img src={pic1} alt=""/>
                            <p>甜品饮品</p>
                        </a>
                    </section>
                    <section>
                        <Link to="/goodfood">
                            <img src={pic2} alt=""/>
                            <p>美食</p>
                        </Link>
                    </section>
                    <section>
                        <img src={pic3} alt=""/>
                        <p>准时达</p>
                    </section>
                    <section>
                        <img src={pic4} alt=""/>
                        <p>新店特惠</p>
                    </section>
                </div>
                <div className="list">
                    <section>
                        <img src={pic5} alt=""/>
                        <p>鲜花蛋糕</p>
                    </section>
                    <section>
                        <img src={pic2} alt=""/>
                        <p>包子粥店</p>
                    </section>
                    <section>
                        <img src={pic1} alt=""/>
                        <p>商超便利</p>
                    </section>
                    <section>
                        <img src={pic3} alt=""/>
                        <p>预订早餐</p>
                    </section>
                </div>
                {/*最高立减图片*/}
                <div className="discounts">
                    <img  style={{width:'100%',height:'auto'}} alt="" src={activity}/>
                </div>
            </div>

        )
    }
}
export default Food;