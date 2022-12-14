import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import MsSql from '../../homepage/header-banner/MsSql';
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

function Computems(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Hanbiro Cloud Database")}
            <Container className='main-body'>
                <Row>
                    <Col md={12} lg={3}>
                        <Sidebar />
                    </Col>
                    <Col md={12} lg={9} className="right-content">
                        {Titlecloudcompute("MS-SQL / Windows 가상서버(인스턴스)")}
                        {Contentcloudcard("고객별 서버자원의 독립성보장, 안정적인 서비스운영","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>{CardBox("Hanbiro Cloud CMS 에서 수분내에 MS-SQL 데이터베이스 서버생성및 서비스", "MS-SQL 라이센스 비용이며, MS-SQL를 운영하기 위해서는 윈도우운영체제의 비용이 추가됩니다. MS- SQL 은 2012 ~ 2019 Standard 버전을 지원합니다. Microsoft SQL 또는 운영체제의 라이센스는 신청시 월단위로 과금됩니다.")}</Grid>
                            <Grid item xs={12} sm={6}>{CardBox("쿠버네티스 기반 데이터베이스 및 어플리케이션과 통합 클러스터 플랫폼 구축","가상서버(인스턴스)는 한비로 Cloud 쿠버네티스 기반 서비스와 연동할 수 있습니다. 한비로는 오픈스택과 쿠버네티스의 통합 Cloud 플랫폼을 운영하고 있습니다.")}</Grid>
                            <Grid item xs={12}>{Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/database.gif")}</Grid>
                        </Grid>
                        
                        <MsSql />
                        
                    </Col>
                </Row>
            </Container>
            <Cloudconsult />
            <Footer />
        </div>
        
    );

};

export default Computems;