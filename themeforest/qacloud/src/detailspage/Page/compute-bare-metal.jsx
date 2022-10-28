import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import Cardintroducecontent from '../../container/Card';
import {
    Container, Row, Col
  } from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import LuuNgo from '../../homepage/consult/luucloud2'
import BoxCard from '../../container/Box/Components/Box'

function Computebaremetal(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Compute 베어메탈 서버")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>

                    <Col md={9}>
                        {BoxCard("Kubernetes 데이터베이스 또는 어플리케이션 클러스터와 연동지원","한비로 Cloud 플랫폼의 쿠버네티스 어플리케이션및 데이터베이스 서비스와 연동해서 클러스터 시스템을 구현할 수 있습니다.")}
                        <LuuNgo />
                    </Col>
                </Row>
            </Container>
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Computebaremetal;