import React from 'react';
import Header from './header/Header';
import Food from './food/Food';
import Shops from './shops/Shop';
import Footer from './../common/footer/Footer';

//页面内组件之间的顺序
const TakeOut = () => (
    <div>
        <Header/>
        <Food/>
        <Shops/>
        <Footer/>
    </div>
);

export default TakeOut;