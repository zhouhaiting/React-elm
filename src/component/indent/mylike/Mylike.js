import React,{Component} from 'react';
import './mylike.css';
import hot1 from '../../../static/images/hot1.jpeg';
import hot2 from '../../../static/images/hot2.jpeg';


//定义猜你喜欢组件，存放动态的个性化推荐
class Mylike extends Component{
    render(){
        return(
            <div className="your-like"> {/*猜你喜欢div*/}
                <h3>猜你喜欢</h3>
                <div className="like-list clearfix"> {/*喜欢的食物列表*/}
                    <div className="row"> {/*一行是2个section*/}
                        <section>
                            <img src={hot1} alt=""/>
                            <p>三文鱼刺身</p>
                            <p>¥28</p>
                        </section>
                        <section>
                            <img src={hot2} alt=""/>
                            <p>醉秋风</p>
                            <p>¥26</p>
                        </section>
                    </div>
                    <div className="row">
                        <section>
                            <img src={hot2} alt=""/>
                            <p>醉秋风</p>
                            <p>¥26</p>
                        </section>
                        <section>
                            <img src={hot1} alt=""/>
                            <p>三文鱼刺身</p>
                            <p>¥28</p>
                        </section>
                    </div>

                </div>
            </div>
        )
    }
}

export default Mylike;