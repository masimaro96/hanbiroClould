import React from 'react';
import TopNav from '../homepage/header-banner/TopNav';
import CloudServices from '../homepage/cloud-services/cloudservices';
import CloudFeatures from '../homepage/cloud-features/cloud-features';
import Cloudconsult from '../homepage/consult/cloudconsult';
import Footer from '../homepage/footer/Footer';

const HomePage = () => {
    
    return (
        <header>
            <TopNav />
            <CloudServices />
            <CloudFeatures />
            <Cloudconsult />
            <Footer />
        </header>
    );
};

export default HomePage;