import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Objectstore from '../../homepage/header-banner/Objectstore';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import BoxCard from '../../container/Box/Components/Box'
import DetailContent from '../../container/Table/Components/detail-content';
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"

function Storeobjectstore(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Hanbiro Cloud 오브젝트 Storage")}
            <Container>
                <Row>
                    <Col md={12} lg={3}>
                        <Sidebar />
                    </Col>
                    <Col md={12} lg={9}>
                        {Titlecloudcompute("오브젝트 Storage")}
                        {Contentcloudcard("프라이빗 오브젝트 Storage 구축 별도문의")}
                        {Contentcloudcompute("Amazone S3 호환되며, HTTPS, Restful API 를 지원", "Amazone S3 및 Swift 와 호환되며, Restful API를 지원합니다. 데이터를 오브젝트 단위로 저장하고, 고유식별자와 메타데이터를 부여 빠른검색을 구현합니다.","대용량의 데이터를 무제한으로 저장","파일크기와 상관없이 대용량의 데이터를 무제한으로 저장할 수 있습니다. 다수의 가상서버(인스턴스)에서 동시에 사용할 수 있으며, 운영체제의 제한이 없습니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/hanbiro_storage.gif")}
                        {BoxCard("객체단위 파일저장, 파일단위 권한설정","버킷 또는 파일단위의 권한관리가 가능합니다, 파일단위로 여러사용자에게 권한을 부여할 수 있습니다. 접근권한이 있는 사용자는 HTTPS 프로토콜로 파일에 직접 접근할 수 있습니다.")}
                        <Objectstore />
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

export default Storeobjectstore;