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


function Clusterclickhouse(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes ClickHouse")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Kubernetes for ClickHouse")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("실시간 온라인분석처리(OLAP) 를 위한 오픈소스 컬럼 기반 DBMS",
 	                    "데이터는 사용 가능한 노드 에 기록 된후 모든 노드에 복재본이 배포됩니다. 페타 바이트 규모의 데이터를 저장하고 처리 할 수 있습니다. 전통적인 DBMS 보다 100배이상 빠르고, 실시간 온라인 데이터 분석에 사용됩니다.",
	                    "데이터를 Shard에 분산저장하며, 비동기 멀티 마스터 지원",
	                    "Multi-master 비동기 복제를 지원하며, 복제된 임의의 노드에서 데이터수집합니다. 데이터를 Shard 에 분산저장하며, 연산결과를 병렬로 실행하며 병합합니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/clickhouse.jpeg")}
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

export default Clusterclickhouse;