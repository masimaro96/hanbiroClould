import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import DetailContent from '../../container/Table/Components/detail-content';
import LiveChat from '../../container/Table/Components/live-chat';
import BoxCard from '../../container/Box/Components/DefaultBox';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"
import Ngoctesst from '../../container/Sidebar/Ngoctesst';

// Titlecloudcompute
function Computevps() {
    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD", "Compute 가상서버(인스턴스)")}
            <Container>
                <Row>
                    <Col md={3} xs={12}>
                        <Ngoctesst />
                        {/* <Sidebar /> */}
                    </Col>
                    <Col md={9} xs={12}>
                        {Titlecloudcompute("가상서버 (인스턴스)")}
                        {Contentcloudcard("고객별 서버자원의 독립성보장, 안정적인 서비스운영","모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당")}
                        {Contentcloudcompute("한비로 Cloud 관리자 콘솔에서 수분내에", "서버생성 및 서비스개시","쿠버네티스 기반 데이터베이스 및","어플리케이션과 통합 클러스터 플랫폼 구축","시간단위로 사용요금을 측정하며, 사용한만큼의 비용을","지불할 수 있습니다. 단기간의 서비스나 고용량의","서버가 필요하지 않을 경우 적절한 서비스입니다.","관리자 콘솔에서 한번의 클릭으로 수분내에 선택한","운영체재의 서버가 생성됩니다.","한비로는 쿠버네티스와의 통합 Cloud 플랫폼을","운형하고 있으며, 가상서버(인스턴스)는 한비로 Cloud","쿠버네티스 기반 서비스와 연동할 수 있습니다.","","")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/vps.gif")}
                        {BoxCard("서버의 스토리지용량의 자유로운 확장과 서비스 시스템 구성의 간편함과 동시성 구현","관리콘솔에서 생성된 가상서버에 블록 Storage 의 볼륨을 연결해서 서버의 용량을 확장할 수 있으며, S3, Restful API 연결을 통해서 데이터를 오브젝트 Storage 직접 저장할 수 있습니다. 오브젝트 Storage 는 표준 Amazone S3와 호환되며, 기존의 S3 연동기능을 사용할 수 있습니다.","서버복제 및 오토스케일링 기능제공, 클러스터시스템 구축및 이벤트서버 구축","가상서버(인스턴스)의 복제 및 자동 증감를 지원하는 오토스케일링 기능을 운영하며, 오픈스택의 Load Balancer를 통한 클러스터 시스템을 구현할 수 있습니다.","리눅스 및 윈도우 서버 외 다양한 어플리케이션 서버이미지 제공","대부분의 리눅스운영체제 서버이미지를 사용해서 관리자콘솔에서 서버생성과 동시에 운영할 수 있습니다. 윈도우 서버운영체제도 다양한 버전의 운영체제를 지원하며, 빈번히 사용되는 WAS서버, GATEWAY서버, WordPress서버등의 이미지도 제공합니다.")}
                        <ServerPricing title={"가상서버(인스턴스) 요금안내"} content={"Hanbiro Cloud 관리자 콘솔에서 원하는 하드웨어를 선택후 서버를 생성할 수 있습니다."} content1={"(이용요금실시간확인)"} />
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

export default Computevps;