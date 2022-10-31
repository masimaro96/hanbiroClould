import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Vitess from '../../homepage/header-banner/Vitess';
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
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"


function Clustercloudvitess(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes Vitess")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Kubernetes for Vitess")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("클라우드 기반 MySQL 컨테이너(POD)배포및 복제, 관리를 위한 플랫폼",
 	                    "Vitess는 MySQL 컨테이너(POD)의 대규모 클러스터를 위한 배포 증가및 축소등의 관리솔루션입니다. Vitess는 여러 중요한 MySQL 기능과 수직 분할 및 수평 분할을 지원하며, 결합하고 확장합니다. Vitess는 MySQL의 주요기능과 NoSQL DB의 확장성을 결합했으며. 내장 샤딩으로 특별한 로직 추가없이 유연하게 확장이 가능합니다. YouTube에서 시작된 Vitess는 모든 YouTube 데이터베이스 트래픽을 제공하고 있습니다.",
	                    "고성능의 Persistant Volume 운영, I/O 최적의 성능구현",
	                    "SSD 기반의 PV 볼륨으로 운영되고 있으며, 3개의 replica 컨테이너(POD)가 하나의 서비스단위입니다. 워커노드의 하드웨어 장애시에도 타 워커노드의 replica 컨테이너(POD)에서 서비스가 진행됩니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/vitess_cluster.gif")}
                        <Vitess />
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

export default Clustercloudvitess;