import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner';
import DetailContent from '../../homepage/cloud-features/detail-content';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar'
import Titlecloudcompute from "../../container/Titlecloudcompute"
import Contentcloudcompute from "../../container/Contentcloudcompute"
import Contentcloudcard from "../../container/Contentcloudcard"
import Imagecloudcompute from "../../container/Imagecloudcompute"

function Computedatabase(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Hanbiro Cloud Database")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Database 인스턴스(가상서버)")}
                        {Contentcloudcard("고객별 서버자원의 독립성보장, 안정적인 서비스운영","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/database.gif")}
                        <ServerPricing />
                        <TrafficFee />
                        <DetailContent />
                    </Col>
                </Row>
            </Container>
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Computedatabase;