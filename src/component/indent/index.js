import React from 'react';
import Footer from './../common/footer/Footer';
import Myorder from './myorder/Myorder';
import Nearby from  './nearby/Nearby';
import Mylike from "./mylike/Mylike";



const Indent = () => (
    <div>
        <Myorder/>
        <Nearby/>
        <Mylike/>
        <Footer/>
    </div>
);

export default Indent;