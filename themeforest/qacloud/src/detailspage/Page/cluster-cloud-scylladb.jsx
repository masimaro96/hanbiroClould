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
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"



function Clustercloudscylladb(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes ScyllaDB (Cassandra)")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Kubernetes for ScyllaDB")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("쿠버네티스 클러스터 기반 Cassandra 호환 NoSQL 데이터베이스 엔진",
 	                    "ScyllaDB는 Cassandra와 호환되며, Cassandra 에 비해 수배이상 빠른 속도를 보장합니다. ScyllaDB는 C++기반의 Seastar 프레임워크로 개발됐습니다. ScyllaDB Cluster, Node, Shard로 구성되어, Scale out (확장)을 효율적으로 운영할 수 있습니다.",
	                    "고성능의 Persistant Volume 운영, I/O 최적의 성능구현",
	                    "SSD 기반의 PV 볼륨으로 운영되고 있으며, 3개의 replica 컨테이너(POD)가 하나의 서비스단위입니다. 쿠버네티스 워커노드의 하드웨어 장애시에도 타 워커노드의 replica 컨테이너(POD)에서 서비스가 진행됩니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/scylla_cluster.gif")}
                       
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

export default Clustercloudscylladb;