import React from 'react';
import Footer from './../common/footer/Footer';
import User from "./header/User";
import Content from "./content/content";

//我的--》页面组件构成
const Mine = () =>(
    <div>
        <User/>
        <Content/>
        <Footer/>
    </div>
);

export default Mine;