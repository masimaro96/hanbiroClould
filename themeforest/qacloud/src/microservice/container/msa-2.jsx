import React from 'react';
import styled from 'styled-components';
import NavButton from '../../homepage/header-banner/TopNavButton';
import Footer from '../../homepage/footer/Footer'
import Cloudconsult from '../../homepage/consult/cloudconsult';
import Banner from '../../container/Banner/Banner';
import {
    Container, Row, Col
} from 'react-bootstrap';
import './sidebar.css';
import Titlecloudcompute from "../../container/Card/Components/Titlecloudcompute";
import MicroSidebar from './sidebar';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

// Titlecloudcompute
function MSA2() {
    return (
        <div className='App'>
            <NavButton />
            {Banner("Hanbiro", "Microservice architecture")}
            <Container>
                <Row>
                    <Col lg={3} md={12} xs={12}>
                        <MicroSidebar />
                    </Col>
                    <Col lg={9} md={12} xs={12} className="right-content">
                        {Titlecloudcompute("한비로 마이크로서비스 기반 개발이란")}
                        <BoxContent>
                            <BoxTitle>CQRS</BoxTitle>

                            <BoxText>Command and Query Responsibility Segregation (명령과 책임분리)</BoxText>
                            <BoxText>• 명령 : 데이터 변경 (Create, Update, Delete) 작업</BoxText>
                            <BoxText>• 쿼리 : 데이터 쿼리(Read)작업</BoxText>
                            <BoxText>• 명령과 쿼리 작업의 책임을 분리하는 것</BoxText>
                            <Image src="https://www.hanbiro.com/msa/images/cqrs.png"></Image>
                        </BoxContent>

                        
                        <BoxContent>
                            <BoxTitle>EventSourcing</BoxTitle>

                            <BoxText>순차적으로 발생하는 이벤트를 적용된 순서대로 모두 저장</BoxText>
                            <BoxText>이벤트의 갱신이나 삭제 연산은 수행되지 않음</BoxText>
                            <BoxText>이벤트 소싱은 확장성이 뛰어나고 분산된 변경처리 방식</BoxText>
                            <Image src="https://www.hanbiro.com/msa/images/event-source.png"></Image>
                        </BoxContent>

                        
                        <BoxContent>
                            <BoxTitle>API 게이트웨이</BoxTitle>

                            <BoxText>마이크로서비스는 API를 통해 통신</BoxText>
                            <BoxText>URL별 : a.vora.net 과 b.vora.net 를 구분해 라우팅</BoxText>
                            <BoxText>모듈별(Prefix별 / Host별) : a.vora.net/a 과 a.vora.net/b 를 구분해 라우팅</BoxText>
                            <BoxText>여러 서비스의 엔드포인트와 REST API를 관리</BoxText>
                            <Image src="https://www.hanbiro.com/msa/images/api-gateway.png"></Image>
                        </BoxContent>

                        
                        <BoxContent>
                            <BoxTitle>컨테이너, Docker 및 Kubernetes</BoxTitle>

                            <BoxText>쿠버네티스의 POD은 가상서버보다 작고 경량으로 마이크로서비스에 적합</BoxText>
                        </BoxContent>

                        
                        <BoxContent>
                            <BoxTitle>서버리스(Serverless)서비스로 제공되는 API들</BoxTitle>

                            <BoxText>쿠버네티스의 POD은 가상서버보다 작고 경량으로 마이크로서비스에 적합</BoxText>
                            <BoxText>어플리케이션이 필요한 경우에만 시작</BoxText>
                            <BoxText>유휴 상태일 때는 비용부과되지 않음 (서비스에 따라 저장용량 비용 발생)</BoxText>
                            <BoxText>개발기간과 비용단축</BoxText>
                            <BoxText>&nbsp;</BoxText>
                            <Container>
                                <Row>
                                    <Col lg={6}>
                                        <BoxText>• Identity : OAuth</BoxText>
                                        <BoxText>• Directory</BoxText>
                                        <BoxText>• IAM (Identity and Access Management)</BoxText>
                                        <BoxText>• Event Sourcing</BoxText>
                                        <BoxText>• Long-running</BoxText>
                                        <BoxText>• Messaging :</BoxText>
                                        <BoxText>
                                            <BoxSubText>• Topics</BoxSubText>
                                            <BoxSubText>• Queues</BoxSubText>
                                            <BoxSubText>• Incoming Webhooks</BoxSubText>
                                            <BoxSubText>• Outgoing Webhooks</BoxSubText>
                                            <BoxSubText>• Scheduler</BoxSubText>
                                        </BoxText>
                                    </Col>
                                    <Col lg={6}>
                                    <BoxText>• Core Storage (S3)</BoxText>
                                    <BoxText>• Simple URL Shortner</BoxText>
                                    <BoxText>• Generate QR Code</BoxText>
                                    <BoxText>• Business Process</BoxText>
                                    <BoxText>• Automation Rule</BoxText>
                                    <BoxText>• Email</BoxText>
                                    <BoxText>• SMS</BoxText>
                                    <BoxText>• DNS</BoxText>
                                    <BoxText>• IOT</BoxText>
                                    <BoxText>• Search query</BoxText>
                                    <BoxText>• Rate Limiting</BoxText>
                                    </Col>
                                </Row>
                            </Container>
                            
                            
                        </BoxContent>

                    </Col>
                </Row>
            </Container>
            <Cloudconsult />
            <Footer />
        </div>
    );
};

const Box = styled.div`
  @media only screen and (max-width: 767px){
    font-size: 80%;
  }
`

const BoxTitle = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
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

const BoxSubText = styled.div`
  margin-left: 7%;
`

const Image = styled.img`
  width: 100%;
`

export default MSA2;