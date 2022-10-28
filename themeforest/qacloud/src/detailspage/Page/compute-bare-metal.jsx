import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner';
import DetailContent from '../../homepage/cloud-features/detail-content';
import {
    Container, Row, Col
  } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar'
import Titlecloudcompute from "../../container/Titlecloudcompute"
import Contentcloudcompute from "../../container/Contentcloudcompute"
import Contentcloudcard from "../../container/Contentcloudcard"
import Imagecloudcompute from "../../container/Imagecloudcompute"

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
                        {Titlecloudcompute("베어메탈 서버")}
                        {Contentcloudcard("베어메탈 서버는 일반 코로케이션 서버의 상품과 가격이 동일","https://www.hanbiro.com/hosting/product-list.html")}
                        {Contentcloudcompute("클라우드 환경내에서 고성능의 물리서버를 단독으로 이용", "서비스 운영체제를 물리서버에 직접 설치해서 운영하는 서버입니다. 고객이 원하는 하드웨어 구성할 수 있으며, 고성능 대용량 서비스에 적합합니다.","대용량의 입출력이 필요하거나 응답속도가 빠른 서비스에 적합","서버의 하드웨어자원을 공유하지 않고, 독립적으로 사용되는 서버입니다. 일반적인 Co-location 서버와 동일한 방식으로 운영할 수 있으며, 높은 응답속도와 대용량의 입출력이 요구되는 서비스에 적합합니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/baremetal.gif")}
                        <DetailContent />
                    </Col>
                </Row>
            </Container>
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Computebaremetal;