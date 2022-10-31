import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import MySql from '../../homepage/header-banner/MySql';
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
import BoxCard from '../../container/Box/Components/DefaultBox'
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
                        {Contentcloudcompute("Failover 기능추가, 고가용성 I/O 분산", "데이터베이스구현","고성능의 Persistant Volume 운영, I/O","최적의 성능구현","PostgreSQL 과 pg_auto_failover 를 기능을 이용한 Read 노드 자동확장 시스템을 구현합니다.","PostgreSQL Read 컨테이너(POD)는 사용량에 따라 자동으로 증감되어 I/O 분산을 구현합니다.","PostgreSQL 노드의 장애시 Monitor 노드가 장애처리를 진행하며, Primary 노드 컨테이너 장애에도","Monitor 노드에 의해서 Read Node 가 역활을","대행합니다.","SSD 기반의 PV 볼륨으로 운영되고 있으며, 3개의","replica 컨테이너(POD)가 하나의 서비스단위입니다.","쿠버네티스 워커노드의 하드웨어 장애시에도 타","워커노드의 replica 컨테이너(POD)에서 서비스가","진행됩니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/postgresql_cluster.gif")}
                        {BoxCard("컨테이너(POD) 하드웨어의 자유로운 구성으로 최적의 시스템 구성","컨테이너(POD)에 할당되는 서버자원은 고객의 요구에 맞게 구성할 수 있으며, Kubernetes PostreSQL의 컨테이너(POD)구성방식은 고객의 요구에 맞게 자유롭게 구성할 수 있습니다.","자동 Failover 로 서비스 안정성확보","Kubernetes PostgreSQL 컨테이너(POD)는 단위서비스별 3개의 replica 노드로 구성되며, 각각의 replica 컨테이너(POD)는 쿠버네티스의 다수의 워커노드에 분산배치되어 있습니다.","자동으로 스케일아웃(Autoscaling)하여 컨테이너 확장, 서비스의 부하분산 구현","CPU 사용률, 메모리 사용률, 또는 다른 커스텀 메트릭 기준으로 컨테이너(POD) 수량을 주기적으로 조정(증감)하며, 하드웨어 자원을 확보할 필요없이 서비스를 구동할 수 있습니다. 서비스의 부하분산및 비용을 효율적으로 사용할 수 있습니다.")}
                        <ServerPricing />
                        <MySql title={"PostgreSQL"} content={"PostgreSQL"} content1={"PostgreSQL"}/>
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