import React from 'react';
import styled from 'styled-components';
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
import './sidebar.css';
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute";
import Contentcloudcompute from "../../container/Card/Components/Contentcloudcompute";
import Contentcloudcard from "../../container/Card/Components/Contentcloudcard";
import Imagecloudcompute from "../../container/Card/Components/Imagecloudcompute";
import MicroSidebar from './sidebar';
import TableThreeColumns from '../components/TableThreeColumns';
import TableTwoColumns from '../components/TableTwoColumns';
import CardBox from '../components/CardBox';

import TrafficTable from '../components/TableThreeColumns';

// Titlecloudcompute
function MSA1() {
    return (
        <div className='App'>
            <NavButton />
            {Banner("Hanbiro", "Microservice architecture")}
            <Container>
                <Row>
                    <Col lg={3} md={12} xs={12}>
                        <MicroSidebar />
                    </Col>
                    <Col lg={9} md={12} xs={12}>
                        {Titlecloudcompute("마이크로서비스 개발의 필수 요소들")}
                        <BoxContent>
                            <BoxText>• 마이크로서비스란 소프트웨어를 구축하는 아키텍처이자 접근 방식</BoxText>
                            <BoxText>• 개발자의 목표는 고품질 소프트웨어를 보다 신속하게 제공하는 것이 우선이며 마이크로서비스는 이 목표를 실현하기 위한 수단</BoxText>
                            <BoxText>• 필요한 기능에 따른 다양한 API를 사용하기 때문에 개발자는 코드를 작성할 필요없이 기능 개발이 가능하여 개발주기 단축</BoxText>
                            <BoxText>• 서비스 활동이 급증하는 경우에 가용성 보장</BoxText>
                            <BoxText>• 독립적인 모듈식 소프트웨어를 구축하는 접근방식</BoxText>
                        </BoxContent>
                        <TableTwoColumns />
                        
                        {Titlecloudcompute("한비로의 개발 상황과 프로그래밍 언어")}
                        <BoxContent>
                            <BoxText>• 한비로의 클라우드/마이크로서비스 기반 개발로 비용절감과 개발시간을 단축할 수 있습니다.</BoxText>
                            <BoxText>• 24년동안의 서버/소프트웨어 개발 경험이 클라우드와 마이크로서비스 개발로 발전하여 지속됩니다.</BoxText>
                            <BoxText>• 한비로는 마이크로서비스용 API들을 자체 개발하여 고객에 저렴하게 제공합니다.</BoxText>
                            <BoxText>• 한비로는 어플리케이션의 컨설팅, 개발, 클라우드, 유지보수 통합서비스를 제공합니다.</BoxText>
                        </BoxContent>
                        <TableThreeColumns />
                    </Col>
                </Row>
            </Container>
            <Cloudconsult />
            <Footer />
        </div>
    );
};

const Header = {
    color: "white",
    background: "#393939",
    fontWeight: "bold",
    paddingBottom: 20,
    paddingTop: 10,
    fontSize: "110%",
    paddingBottom: 20,
  }

const Box = styled.div`
  @media only screen and (max-width: 767px){
    font-size: 80%;
  }
`

const BoxContent = styled.div`
    box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%);
    border: 1px solid #E7EAF3;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: left;
`

const BoxText = styled.div`
    margin: 5px;
    line-height: 2em;
`

const StySpecification = {
    StylesContainer: {
      boxShadow: "0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)",
      border: "1px solid #E7EAF3",
      borderRadius: "8px",
      padding: 20,
      marginBottom:30,
      marginTop: 30,
      textAlign: "left",
    },
    TextContent: {
        marginTop: "5px",
    }
};

export default MSA1;