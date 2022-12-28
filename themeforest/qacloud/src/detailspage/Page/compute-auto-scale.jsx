import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import DetailContent from '../../container/Table/Components/detail-content';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import BoxCard from '../../container/Box/Components/Box'
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"


function Computeautoscale(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Compute 오토스케일링")}
            <Container>
                <Row>
                    <Col md={12} lg={3}>
                        <Sidebar />
                    </Col>
                    <Col md={12} lg={9}>
                        {Titlecloudcompute("오토스케일링")}
                        {Contentcloudcard("오토스케일링서비스 무료로 제공 / 증설된 가상서버(인스턴스)의 요금적용")}
                        {Contentcloudcompute("유동적인 서버확장과 축소, 클러스터 시스템구축", "가상서버(인스턴스)의 증가시 로드발랜서가 자동으로 확장된 서버의 부하분산을 구현합니다.","트래픽및 하드웨어사용량에 따라서 가상서버(인스턴스)를 자동으로 확대 축소","관리자 콘솔에서 트래픽의 증가와 감소, 서버의 CPU 및 메모리 사용량의 증가와 감소 임계치를 설정한후 임계치값의 초과시 가상서버를 증가시키며, 임계치값 미만시 가상서버를 감소시킵니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/single_DB_web_autoscale.gif")}
                        {BoxCard("이벤트서비스, 부하분산서비스에 적합한 서비스","단기 대용량의 서비스가 필요할 경우, 대용량의 트래픽이 발생할 수 있는 서비스를 운영할 경우 저비용으로 효율적인 서비스확장을 구현할 수 있는 플랫폼입니다.")}
                        <ServerPricing title={"오토스케일링(증설된 가상서버) 요금안내"}/>
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

export default Computeautoscale;