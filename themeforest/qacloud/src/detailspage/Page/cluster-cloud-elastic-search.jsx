import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner';


function Clustercloudelasticsearch(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes Elastic Search")}
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Clustercloudelasticsearch;