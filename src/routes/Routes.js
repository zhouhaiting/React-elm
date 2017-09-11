import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

//引入每一个页面，他会去找下面的index.js文件，从index.js入口逐个引入
import TakeOut from '../component/takeout';
import Find from '../component/find';
import Indent from '../component/indent';
import Mine from '../component/mine';
import Login from '../component/mine/login/Login';
import Goodfood from '../component/takeout/goodfood/Goodfood';
import Foodmsg from '../component/takeout/foodmsg/Foodmsg';
//设置路由
const Routes = () => (
    <Router>
        <Switch> {/*只能匹配一个*/}
            <Route exact path="/takeout" component={TakeOut} /> {/*exact：唯一的，路径对应的组件*/}
            <Route exact path="/find" component={Find} />
            <Route exact path="/indent" component={Indent}/>
            <Route exact path="/mine" component={Mine}/>
            <Route exact path="/login" component={Login}/> {/*点击登录的时候，去找Login这个组件*/}
            <Route exact path="/goodfood" component={Goodfood}/>
            <Route exact path="/foodmsg" component={Foodmsg}/>
        </Switch>
    </Router>
);
export default Routes;