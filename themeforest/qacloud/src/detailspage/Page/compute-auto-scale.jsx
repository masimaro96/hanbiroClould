import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container//Banner/Banner';
import DetailContent from '../../homepage/cloud-features/detail-content';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import LuuNgo from '../../homepage/consult/kimquynh'

function Computeautoscale(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Compute 오토스케일링")}
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Computeautoscale;