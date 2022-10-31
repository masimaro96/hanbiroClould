import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import ElasticSearch from '../../homepage/header-banner/ElasticSearch';
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

function Clustercloudelasticsearch(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes Elastic Search")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Kubernetes for Elastic Search Engine")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("쿠버네티스 클러스터의 샤딩과 Replica 를", "지원하는 검색엔진","고성능의 Persistant Volume 운영, I/O","최적의 성능구현","ElasticSearch 는 Lucene 기반의 검색엔진이며,","데이터의 빠른 접근을 위한 Sharding 을 지원합니다.","컨테이너(POD)의 장애발생시 대기상태의","컨테이너에서 서비스를 유지하는 무정지시스템을 구현합니다. 한비로의 모든 소프트웨어에서 운영중인","검색엔진이며, 10년의 운영노하우를 보유하고 있습니다.","SSD 기반의 PV 볼륨으로 운영되고 있으며, 3개의","replica 컨테이너(POD)가 하나의 서비스단위입니다.","쿠버네티스 워커노드의 하드웨어 장애시에도 타","워커노드의 replica 컨테이너(POD)에서 서비스가","진행됩니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/elasticsearch_cluster.gif")}
                        {BoxCard("컨테이너(POD)하드웨어의 자유로운 구성으로 최적의 클러스터 구현","컨테이너(POD)에 할당되는 서버자원은 고객의 요구에 맞게 할당할 수 있으며, ElasticSearch 클러스터 시스템을 자유롭게 구성할 수 있습니다.","하드웨어장애시 컨테이너(POD) 자동으로 재배치, 무정지시스템구현","ElasticSearch 엔진의 컨테이너(POD)는 단위서비스별 3개의 replica 노드로 구성되며, 각각의 replica 컨테이너(POD)는 쿠버네티스의 다수의 워커노드에 분산배치되어 있습니다.","자동으로 스케일아웃하여 컨테이너 확장, 서비스의 부하분산 구현","CPU 사용률, 메모리 사용률, 또는 다른 커스텀 메트릭 기준으로 컨테이너(POD) 수량을 주기적으로 조정(증감)하며, 서비스 확장을 위한 하드웨어 자원을 확보할 필요없이 서비스를 구동할 수 있습니다. 서비스의 부하분산및 비용을 효율적으로 사용할 수 있는 클러스터 솔루션입니다.")}
                        <ServerPricing />
                        <ElasticSearch />
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

export default Clustercloudelasticsearch;