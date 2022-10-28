import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import DetailContent from '../../homepage/cloud-features/detail-content';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import Titlecloudcompute from "../../container/Titlecloudcompute"
import Contentcloudcompute from "../../container/Contentcloudcompute"
import Contentcloudcard from "../../container/Contentcloudcard"
import Imagecloudcompute from "../../container/Imagecloudcompute"


function Clusterkafka(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes Kafka Data Streamming Engine")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Kubernetes for Kafka Engine")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("클라우드기반 이벤트 및 데이터 스트리밍 플랫폼",
                            "Apache Kafka 엔진의 쿠버네티스 기반 클러스터 데이터 스트리밍 플랫폼입니다. 한비로 Cloud 플랫폼의 가상서버(인스턴스)와 연동한 클러스터 구축을 지원합니다.",
                            "쿠버네티스 클러스터의 샤딩과 Replica 를 지원하는 검색엔진",
                            "컨테이너(POD)의 장애발생시 대기상태의 컨테이너에서 서비스를 유지하는 무정지시스템을 구현합니다. Kfaka는 샤딩을 통해 수평확장을 지원하며, 토픽로그를 분산된 컨테이너로 분할 저장합니니다. 한비로의 모든 소프트웨어에서 운영중인 실시간 데이터 스트리밍 엔진입니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/kafka_cluster.gif")}
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

export default Clusterkafka;