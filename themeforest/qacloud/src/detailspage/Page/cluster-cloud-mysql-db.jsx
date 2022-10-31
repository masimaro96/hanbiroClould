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
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"


function Clustercloudmysqldb(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes MySQL(Maria)")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("쿠버네티스 MySQL(Maria)")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("Master/Slave 구성, 읽기전용서버의", "Autoscaling 지원","고성능의 Persistant Volume 운영, I/O","최적의 성능구현","MySQL 슬레이브 컨테이너(POD)는 사용량에 따라","자동으로 증감되어 I/O 분산을 구현하며, MySQL 과","Maria 데이터베이스의 동일한 시스템 구성을","지원합니다.","","SSD 기반의 PV 운영되고 있으며, 3개의 replica","컨테이너(POD)가 하나의 서비스단위입니다.","워커노드의 하드웨어 장애시에도 타 워커노드의","replica 컨테이너(POD)에서 서비스가 진행됩니다.","")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/mysql_cluster.gif")}
                        <MySql title={"MySQL"} content={"MySQL"} content1={"MySQL"}/>
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

export default Clustercloudmysqldb;