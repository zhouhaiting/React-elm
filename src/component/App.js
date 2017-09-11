import React, { Component } from 'react';
import Routes from '../routes/Routes';


//这是脚手架自带的js文件，最外边的div是root，每个页面都是用app包着的
class App extends Component {
  render() {
    return (
      <div className="App">
         {/*插入路由，可以看到路由被导出*/}
         <Routes/>
      </div>
    );
  }
}

export default App;
