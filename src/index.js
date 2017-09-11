//入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import './style/index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';//引用history
import shoppingChat from './store/shoppingChat';
const history = createHistory();
history.push('/takeout');//转换默认路径，默认路径为/takeout

const store = {
    shoppingChat
};

ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
