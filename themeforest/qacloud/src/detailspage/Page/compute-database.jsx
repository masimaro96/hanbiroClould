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
import CardButtonWhite from '../../container/CardButton/Components/CardButton-White'
import CardButtonGray from '../../container/CardButton/Components/CardButton-Gray'
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"

function Computedatabase(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Hanbiro Cloud Database")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("Database 인스턴스(가상서버)")}
                        {Contentcloudcard("고객별 서버자원의 독립성보장, 안정적인 서비스운영","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/database.gif")}
                        {CardButtonWhite("MySQL (Maria) Database","고객별 서버자원의 독립성보장, 안정적인 서비스운영","물리적인 CPU 코어를 할당하는 가상서버(인스턴스) 제공","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당","쿠버네티스 기반 데이터베이스 및 어플리케이션과 통합 클러스터 플랫폼 구축","서버복제 및 오토스케일링 기능제공, 클러스터시스템 구축및 이벤트서버 구축","https://hanbiro.com/cloud/images/db/1.png","MySQL (Maria) Database 요금안내","가상서버(인스턴스)요금만 부과되며, 별도의 추가요금이 발생하지 않습니다.","https://hanbiro.com/cloud/images/db/2.png","/cluster-cloud-mysql-db","Kubernetes MySQL 클러스터 확인하기")}
                        {CardButtonGray("PostgreSQL Database","고객별 서버자원의 독립성보장, 안정적인 서비스운영","물리적인 CPU 코어를 할당하는 가상서버(인스턴스) 제공","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당","쿠버네티스 기반 데이터베이스 및 어플리케이션과 통합 클러스터 플랫폼 구축","서버복제 및 오토스케일링 기능제공, 클러스터시스템 구축및 이벤트서버 구축","https://hanbiro.com/cloud/images/db/3.png","PostgreSQL Database 요금안내","가상서버(인스턴스)요금만 부과되며, 별도의 추가요금이 발생하지 않습니다.","https://hanbiro.com/cloud/images/db/4.png","/cluster-cloud-postgresql-db","Kubernetes PostgreSQL 클러스터 확인하기")}
                        {CardButtonWhite("Redis","고객별 서버자원의 독립성보장, 안정적인 서비스운영","물리적인 CPU 코어를 할당하는 가상서버(인스턴스) 제공","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당","쿠버네티스 기반 데이터베이스 및 어플리케이션과 통합 클러스터 플랫폼 구축","서버복제 및 오토스케일링 기능제공, 클러스터시스템 구축및 이벤트서버 구축","https://hanbiro.com/cloud/images/db/5.png","Redis 요금안내","가상서버(인스턴스)요금만 부과되며, 별도의 추가요금이 발생하지 않습니다.","https://hanbiro.com/cloud/images/db/6.png","/cluster-cloud-redis","Kubernetes Redis 클러스터 확인하기")}
                        {CardButtonGray("MongoDB","고객별 서버자원의 독립성보장, 안정적인 서비스운영","물리적인 CPU 코어를 할당하는 가상서버(인스턴스) 제공","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당","쿠버네티스 기반 데이터베이스 및 어플리케이션과 통합 클러스터 플랫폼 구축","서버복제 및 오토스케일링 기능제공, 클러스터시스템 구축및 이벤트서버 구축","https://hanbiro.com/cloud/images/db/7.png","MongoDB 요금안내","가상서버(인스턴스)요금만 부과되며, 별도의 추가요금이 발생하지 않습니다.","https://hanbiro.com/cloud/images/db/8.png","/cluster-cloud-mongodb","Kubernetes MongoDB 클러스터 확인하기")}
                        {CardButtonWhite("SycllaDB on Cloud Server","고객별 서버자원의 독립성보장, 안정적인 서비스운영","물리적인 CPU 코어를 할당하는 가상서버(인스턴스) 제공","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당","쿠버네티스 기반 데이터베이스 및 어플리케이션과 통합 클러스터 플랫폼 구축","서버복제 및 오토스케일링 기능제공, 클러스터시스템 구축및 이벤트서버 구축","https://hanbiro.com/cloud/images/db/9.png","SycllaDB 데이터베이스 요금안내","가상서버(인스턴스)요금만 부과되며, 별도의 추가요금이 발생하지 않습니다.","https://hanbiro.com/cloud/images/db/10.png","/cluster-cloud-scylladb","Kubernetes ScyllaDB 클러스터 확인하기")}
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

export default Computedatabase;