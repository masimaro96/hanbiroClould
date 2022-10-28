import React from 'react';
import NavButton from '../../homepage/header-banner/TopNavButton';
import ServerPricing from '../../homepage/header-banner/ServerPricing';
import TrafficFee from '../../homepage/header-banner/TrafficFee';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import DetailContent from '../../homepage/cloud-features/detail-content';
import {
    Container, Row, Col
} from 'react-bootstrap';
import Sidebar from '../../container/Sidebar/Sidebar'
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute"
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute"
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard"
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute"


function Storeblockstore(){

    return (
        <div className='App'>
            <NavButton />
            {Banner("HANBIRO CLOUD","Hanbiro Cloud 블록 Storage")}
            <Container>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {Titlecloudcompute("블록 Storage")}
                        {Contentcloudcard("프라이빗 블록 Storage 구축 별도문의")}
                        {Contentcloudcompute("한비로 Cloud 서버의 저장용량을 실시간 확장",
 	                    "데이터를 일정한 크기의 블록으로 나누어 저장 하는 방식이며, 한비로 Cloud 관리자콘솔에서 생성후 수분내에 볼륨을 사용할 수 있습니다. 한비로 Cloud 의 블록 Storage 에서 생성된 볼륨은 운영체제의 제한사항이 없습니다.",
	                    "스냅샷기능을 제공하며, 3 Replica 블록 Storage 운영",
	                    "스냅샷 기능을 제공하며, 볼륨의 백업및 복제와 복원시에 사용됩니다. 블록 Storage 의 볼륨을 3 replica SET 으로 운영합니다.")}
                        {Imagecloudcompute("https://www.hanbiro.com/cloud/images/concept/hanbiro_storage.gif")}
                        <ServerPricing />
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

export default Storeblockstore;