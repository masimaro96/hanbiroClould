import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Redis from '../../homepage/header-banner/Redis';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import '../../container/Sidebar/sidebar.css'
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"
import CardBox from '../../container/Box/Components/CardBox'
import { Grid } from '@mui/material';

function Clustercloudredis(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Kubernetes Redis")}
            <Container className='main-body'>
                <Row>
                    <Col md={12} lg={3}>
                        <Sidebar />
                    </Col>
                    <Col md={12} lg={9} className="right-content">
                        {Titlecloudcompute("Kubernetes for Redis")}
                        {Contentcloudcard("모든 컨테이너(POD) 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>{CardBox("쿠버네티스 클러스터 기반의 Sharding를 지원하는 NoSQL 데이터베이스 엔진", "스냅샷형식의 저장방식으로 영속성을 지원하는 인메모리 데이터저장소입니다. 쓰기 성능 증대를 위한 클라이언트 측 샤딩(Sharding)을 지원하며, 읽기성능향상을 위한 노드복제를 지원합니다. 리스트, 배열과 같은 데이터를 처리하는데 유용하며, 읽기속도의 성능이 매우 높은 NoSQL 엔진입니다.")}</Grid>
                            <Grid item xs={12} sm={6}>{CardBox("고성능의 Persistant Volume 운영, I/O 최적의 성능구현","SSD 기반의 PV 볼륨으로 운영되고 있으며, 3개의 replica 컨테이너(POD)가 하나의 서비스단위입니다. 쿠버네티스 워커노드의 하드웨어 장애시에도 타 워커노드의 replica 컨테이너(POD)에서 서비스가 진행됩니다.")}</Grid>
                            <Grid item xs={12}>{Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/redis_cluster.gif")}</Grid>
                            <Grid item xs={12} sm={6}>{CardBox("컨테이너(POD) 하드웨어의 자유로운 구성으로 최적의 시스템 구성","컨테이너(POD)에 할당되는 서버자원은 고객의 요구에 맞게 구성할 수 있으며, Kubernetes Redis의 컨테이너(POD) 구성방식은 고객의 요구에 맞게 자유롭게 구성할 수 있습니다.")}</Grid>
                            <Grid item xs={12} sm={6}>{CardBox("자동 Failover 로 서비스 안정성확보","Kubernetes Redis의 컨테이너(POD)는 단위서비스별 3개의 replica 노드로 구성되며, 각각의 replica 컨테이너(POD)는 쿠버네티스의 다수의 워커노드에 분산배치되어 있습니다.")}</Grid>
                            <Grid item xs={12} sm={6}>{CardBox("자동으로 스케일아웃(Autoscaling)하여 컨테이너 확장, 서비스의 부하분산 구현","CPU 사용률, 메모리 사용률, 또는 다른 커스텀 메트릭 기준으로 컨테이너(POD) 수량을 주기적으로 조정(증감)하며, 하드웨어 자원을 확보할 필요없이 서비스를 구동할 수 있습니다. 서비스의 부하분산및 비용을 효율적으로 사용할 수 있습니다.")}</Grid>
                        </Grid>
                        <Redis />
                    </Col>
                </Row>
            </Container>
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Clustercloudredis;