import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import LoadBalancer from '../../homepage/header-banner/LoadBalancer';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import DetailContent from '../../container/Table/Components/detail-content';
import LiveChat from '../../container/Table/Components/live-chat';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"


function Computeloadbalance(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Compute Load Balancer")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Load Balancer")}
                        {Contentcloudcompute("한비로 Cloud 가상서버(인스턴스)를 연결, 클러스터 시스템 구축", "한비로 Cloud 플랫폼의 가상서버의 로드발랜싱을 구현하며. 오토스케일링으로 확장된 가상서버와 자동으로 로드발랜서와의 연결을 지원합니다.","쿠버네티스 기반 데이터베이스 및 어플리케이션과 통합 클러스터 플랫폼 구축","한비로 Cloud 플랫폼의 인스턴스 또는 베어메탈 서버와 쿠버네티스 기반의 Application 클러스터와 데이터베이스 클러스터와의 연결을 구현합니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/loadbalancer.gif")}
                        <LoadBalancer />
                        <TrafficFee />
                        <DetailContent />
                        <LiveChat />
                    </Col>
                </Row>
            </Container>
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Computeloadbalance;