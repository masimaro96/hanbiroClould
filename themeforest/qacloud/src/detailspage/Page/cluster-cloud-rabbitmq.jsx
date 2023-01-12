import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import RabbitMQ from '../../homepage/header-banner/RabbitMQ';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import '../../container/Sidebar/sidebar.css'
import BoxCard from '../../container/Box/Components/DefaultBox'
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"

function Clustercloudrabbitmq(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes RabbitMQ")}
            <Container className='main-body'>
                <Row>
                    <Col md={12} lg={3}>
                        <Sidebar />
                    </Col>
                    <Col md={12} lg={9} className="right-content">
                        {Titlecloudcompute("Kubernetes for RabbitMQ")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("메세지를 신뢰성있게 전달 할 수 있는 데이터 스트리밍 플랫폼", "AMQP 기반의 오픈소스 메세지 지향형 미들웨어입니다. RabbitMQ 서비스를 통해 신뢰성있는 메세지의 전달, 비동기처리 및 작업 Queue를 구현할 수 있습니다.","고성능의 Persistant Volume 운영, I/O 최적의 성능구현","SSD 기반의 PV 볼륨으로 운영되고 있으며, 3개의 replica 컨테이너(POD)가 하나의 서비스단위입니다. 워커노드의 하드웨어 장애시에도 타 워커노드의 replica 컨테이너(POD)에서 서비스가 진행됩니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/rabbitmq_cluster.gif")}
                        {BoxCard("자동 Failover 로 서비스 안정성확보","쿠버네티스 워커노드별로 분산된 replica 컨테이너(POD)로 서비스 단위가 운영되고 있으며, 서비스중인 컨테이너(POD)의 장애시 대기중인 타 워커노드의 컨테이너(POD)에서 서비스가 운영됩니다.","자동으로 스케일아웃(Autoscaling)하여 컨테이너 확장, 서비스의 부하분산 구현","CPU 사용률, 메모리 사용률, 또는 다른 커스텀 메트릭 기준으로 컨테이너(POD) 수량을 주기적으로 조정(증감)하며, 하드웨어 자원을 확보할 필요없이 서비스를 구동할 수 있습니다. 서비스의 부하분산및 비용을 효율적으로 사용할 수 있는 목적에 부합됩니다.","컨테이너(POD) 하드웨어의 자유로운 구성으로 최적의 시스템 구성","컨테이너(POD)에 할당되는 서버자원은 고객의 요구에 맞게 구성할 수 있으며, RabbitMQ MiddleWare 엔진의 구성방식은 고객의 요구에 맞게 자유롭게 구성할 수 있습니다.")}
                       
                        <RabbitMQ />
                        
                    </Col>
                </Row>
            </Container>
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Clustercloudrabbitmq;