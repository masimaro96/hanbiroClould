import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner';
import Cardintroducecontent from '../../container/Card'


function Clusterclickhouse(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes ClickHouse")}
            <Cardintroducecontent />

            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Clusterclickhouse;