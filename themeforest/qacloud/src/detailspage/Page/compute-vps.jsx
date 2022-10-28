import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container//Banner/Banner';
import DetailContent from '../../homepage/cloud-features/detail-content';
import BoxCard from '../../container/Box/Components/DefaultBox';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import LuuNgo from '../../homepage/consult/kimquynh'
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
                        {BoxCard("서버의 스토리지용량의 자유로운 확장과 서비스 시스템 구성의 간편함과 동시성 구현","관리콘솔에서 생성된 가상서버에 블록 Storage 의 볼륨을 연결해서 서버의 용량을 확장할 수 있으며, S3, Restful API 연결을 통해서 데이터를 오브젝트 Storage 직접 저장할 수 있습니다. 오브젝트 Storage 는 표준 Amazone S3와 호환되며, 기존의 S3 연동기능을 사용할 수 있습니다.","서버복제 및 오토스케일링 기능제공, 클러스터시스템 구축및 이벤트서버 구축","가상서버(인스턴스)의 복제 및 자동 증감를 지원하는 오토스케일링 기능을 운영하며, 오픈스택의 Load Balancer를 통한 클러스터 시스템을 구현할 수 있습니다.","리눅스 및 윈도우 서버 외 다양한 어플리케이션 서버이미지 제공","대부분의 리눅스운영체제 서버이미지를 사용해서 관리자콘솔에서 서버생성과 동시에 운영할 수 있습니다. 윈도우 서버운영체제도 다양한 버전의 운영체제를 지원하며, 빈번히 사용되는 WAS서버, GATEWAY서버, WordPress서버등의 이미지도 제공합니다.")}
                        <DetailContent />
                        <LuuNgo />
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