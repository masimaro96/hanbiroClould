import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner';
import DetailContent from '../../homepage/cloud-features/detail-content';
import BoxCard from '../../container/Box';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar'
import Titlecloudcompute from "../../container/Titlecloudcompute"
import Contentcloudcompute from "../../container/Contentcloudcompute"
import Contentcloudcard from "../../container/Contentcloudcard"
import Imagecloudcompute from "../../container/Imagecloudcompute"

// Titlecloudcompute
function Computevps() {
    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD", "Compute 가상서버(인스턴스)")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>

                        {Titlecloudcompute("가상서버 (인스턴스)")}
                        {Contentcloudcard("고객별 서버자원의 독립성보장, 안정적인 서비스운영","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("한비로 Cloud 관리자 콘솔에서 수분내에 서버생성 및 서비스개시", "시간단위로 사용요금을 측정하며, 사용한만큼의 비용을 지불할 수 있습니다. 단기간의 서비스나 고용량의 서버가 필요하지 않을 경우 적절한 서비스입니다. 관리자 콘솔에서 한번의 클릭으로 수분내에 선택한 운영체재의 서버가 생성됩니다.","쿠버네티스 기반 데이터베이스 및 어플리케이션과 통합 클러스터 플랫폼 구축","한비로는 쿠버네티스와의 통합 Cloud 플랫폼을 운형하고 있으며, 가상서버(인스턴스)는 한비로 Cloud 쿠버네티스 기반 서비스와 연동할 수 있습니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/vps.gif")}

                        <BoxCard />
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

export default Computevps;