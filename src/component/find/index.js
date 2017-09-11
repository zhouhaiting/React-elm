import React from 'react';
import Header from './header/Header';
import Footer from "../common/footer/Footer";
import find2 from '../../static/images/find2.jpg';
import Hotcake from "./hot/Hot";

const Find = () => (
    <div>
        <Header/>
        <div className="banner" style={{margin:'0.1rem 0'}}>
            <img src={find2} alt="" width='100%'/>
        </div>
        <Hotcake/>
        <Footer/>
    </div>
);

export default Find;