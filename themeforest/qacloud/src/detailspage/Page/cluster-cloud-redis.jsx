import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
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

function Clustercloudredis(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes Redis")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Kubernetes for Redis")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("쿠버네티스 클러스터 기반의 Sharding를 지원하는 NoSQL 데이터베이스 엔진",
 	                    "스냅샷형식의 저장방식으로 영속성을 지원하는 인메모리 데이터저장소입니다. 쓰기 성능 증대를 위한 클라이언트 측 샤딩(Sharding)을 지원하며, 읽기성능향상을 위한 노드복제를 지원합니다. 리스트, 배열과 같은 데이터를 처리하는데 유용하며, 읽기속도의 성능이 매우 높은 NoSQL 엔진입니다.",
	                    "고성능의 Persistant Volume 운영, I/O 최적의 성능구현",
	                    "SSD 기반의 PV 볼륨으로 운영되고 있으며, 3개의 replica 컨테이너(POD)가 하나의 서비스단위입니다. 쿠버네티스 워커노드의 하드웨어 장애시에도 타 워커노드의 replica 컨테이너(POD)에서 서비스가 진행됩니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/redis_cluster.gif")}
                        <ServerPricing />
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

export default Clustercloudredis;