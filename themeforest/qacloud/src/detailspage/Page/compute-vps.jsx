import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner';
import DetailContent from '../../homepage/cloud-features/detail-content';
import Cardintroducecontent from '../../container/Card';
import {
    Container, Row, Col
  } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar'

function Computevps(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Compute 가상서버(인스턴스)")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                    <DetailContent />

                    </Col>
                </Row>
            </Container>         
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Computevps;