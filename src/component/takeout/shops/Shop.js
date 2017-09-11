import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './shop.css';
import food2 from '../../../static/images/food2.jpg';
import food3 from '../../../static/images/food3.jpg';
import food from '../../../static/images/food.jpg';


//定义店铺信息组件，推荐商家一下的部分

class Shops extends Component {

    render() {
        return (
            <div className="merchant">{/*推荐商家div*/}
                <h3>推荐商家</h3>
                <Link to="/foodmsg">
                    <div className="shop-list"> {/*具体的店铺*/}
                        <img className="fl" alt="" src={food2}/>
                        <div className="msg">
                            <h4><span>品牌</span>金百万（东坡府店）
                                <section className="fr">保</section>
                            </h4>
                            <h5 className="sell"> 4.4 月售5311单<span className="white fr">准时达</span>
                                <span className="blue fr">蜂鸟专送</span></h5>
                            <h5>¥20起送 | 配送费¥5<span className="fr">250m|30分钟</span></h5>
                            <div className="money">
                                <p><span>减</span>满30-15,满50-20</p>
                                <p><span className="gre">首</span>新用户下单立减20元</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="shop-list"> {/*具体的店铺*/}
                    <img className="fl" alt="" src={food3}/>
                    <h4><span>品牌</span>饭局</h4>
                    <h5 className="sell"> 4.4 月售5311单<span className="white fr">准时达</span>
                        <span className="blue fr">蜂鸟专送</span></h5>
                    <h5>¥20起送 | 配送费¥5<span className="fr">500m|20分钟</span></h5>
                    <div className="money">
                        <p><span>减</span>满30-3</p>
                        <p><span className="gre">首</span>新用户下单立减20元</p>
                    </div>
                </div>
                <div className="shop-list"> {/*具体的店铺*/}
                    <img className="fl" alt="" src={food}/>
                    <h4>张亮麻辣烫
                        <section className="fr">保</section>
                    </h4>
                    <h5 className="sell"> 4.4 月售5311单<span className="white fr">准时达</span>
                        <span className="blue fr">蜂鸟专送</span></h5>
                    <h5>¥20起送 | 配送费¥5<span className="fr">2.4km|50分钟</span></h5>
                    <div className="money">
                        <p><span>减</span>满60-25</p>
                        <p><span className="gre">首</span>新用户下单立减15元</p>
                    </div>
                </div>
                <div className="shop-list"> {/*具体的店铺*/}
                    <img className="fl" alt="" src={food}/>
                    <h4>德克士（双桥店）
                        <section className="fr">保</section>
                    </h4>
                    <h5 className="sell"> 4.4 月售6018单<span className="white fr">准时达</span>
                        <span className="blue fr">蜂鸟专送</span></h5>
                    <h5>¥20起送 | 配送费¥5<span className="fr">1.2km|31分钟</span></h5>
                    <div className="money">
                        <p><span>减</span>5折七夕狂欢</p>
                        <p><span className="gre">首</span>新用户下单立减15元</p>
                    </div>
                </div>
                <div className="shop-list"> {/*具体的店铺*/}
                    <img className="fl" alt="" src={food3}/>
                    <h4><span>品牌</span> 西域美食
                        <section className="fr">保</section>
                    </h4>
                    <h5 className="sell"> 4.4 月售5034单<span className="white fr">准时达</span>
                        <span className="blue fr">蜂鸟专送</span></h5>
                    <h5>¥20起送 | 配送费¥5<span className="fr">2.4km|50分钟</span></h5>
                    <div className="money">
                        <p><span>减</span>满60-25</p>
                        <p><span className="gre">首</span>新用户下单立减15元</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shops;