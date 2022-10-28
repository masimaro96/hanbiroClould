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


function Clustercloudpostgresqldb(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes PostgreSQL")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Kubernetes for PostgreSQL")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("Failover 기능추가, 고가용성 I/O 분산 데이터베이스구현",
                        "PostgreSQL 과 pg_auto_failover 를 기능을 이용한 Read 노드 자동확장 시스템을 구현합니다. PostgreSQL Read 컨테이너(POD)는 사용량에 따라 자동으로 증감되어 I/O 분산을 구현합니다. PostgreSQL 노드의 장애시 Monitor 노드가 장애처리를 진행하며, Primary 노드 컨테이너 장애에도 Monitor 노드에 의해서 Read Node 가 역활을 대행합니다.",
                        "고성능의 Persistant Volume 운영, I/O 최적의 성능구현",
                        "SSD 기반의 PV 볼륨으로 운영되고 있으며, 3개의 replica 컨테이너(POD)가 하나의 서비스단위입니다. 쿠버네티스 워커노드의 하드웨어 장애시에도 타 워커노드의 replica 컨테이너(POD)에서 서비스가 진행됩니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/postgresql_cluster.gif")}
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

export default Clustercloudpostgresqldb;