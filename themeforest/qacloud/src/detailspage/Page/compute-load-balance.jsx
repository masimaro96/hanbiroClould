import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner';


function Computeloadbalance(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Compute Load Balancer")}
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Computeloadbalance;