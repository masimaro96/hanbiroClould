import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Blockstore from '../../homepage/header-banner/Blockstore';
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
import BoxCard from '../../container/Box/Components/Box'
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"



function Storenasstore(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Hanbiro Cloud 공유 Storage")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("공유 Storage")}
                        {Contentcloudcard("프라이빗 공유 Storage 구축 별도문의")}
                        {Contentcloudcompute("공유 Storage (Openstack Manila", "Project)","한비로 Cloud 의 클러스터 구축을 위한","공유스토리지","한비로 Cloud 관리자콘솔에서 공유 Storage 의 생성및","제어를 처리할 수 있습니다. Openstack 의 Manila","Project 로 구성, NFS 지원하는 모든 운영체제에서","사용할 수 있습니다.","한비로 Cloud 플랫폼의 클러스터 구축시 공유데이터를","한비로 Cloud 플랫폼의 클러스터 구축시 공유데이터를","위한 스토리지로 운영하며, 또한, Kubernetes","클러스터의 공유데이터를 위한 스토리지로 운영됩니다.","")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/hanbiro_storage.gif")}
<<<<<<< HEAD

                        <Blockstore title={"공유 Storage 요금안내"} />

                        {BoxCard("프라이빗 Cloud 시스템 구축지원","기업자체 Private 클라우드 시스템 구축을 지원합니다. 공유 스토리지를 포함한 Cloud 플랫폼과 Kubernetes 클러스터 시스템 구축할 수 있습니다.")}
                        

=======
                        {BoxCard("프라이빗 Cloud 시스템 구축지원","기업자체 Private 클라우드 시스템 구축을 지원합니다. 공유 스토리지를 포함한 Cloud 플랫폼과 Kubernetes 클러스터 시스템 구축할 수 있습니다.")}
                        <Blockstore title={"공유 Storage 요금안내"} />
>>>>>>> 97f62de5f51030b15178724a8e81b6e46cff46ca
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

export default Storenasstore;