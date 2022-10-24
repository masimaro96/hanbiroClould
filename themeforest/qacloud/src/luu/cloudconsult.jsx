
import React from 'react';
import styled from 'styled-components';
import './Style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CloudCheckIcon from 'mdi-react/CloudCheckIcon';
import {
    Card, CardBody,
}from '@/shared/components/Card';



/* eslint-disable */

function Cloudconsult() {
  
  return (
    <div className='App'>
        <Container >
            <Row className="row1-cloudconsult">
                <Col sm={12} className="title-cloudconsult"><h2>CLOUD 구축및 운영 컨설팅</h2></Col>
            </Row>
            <Row className="row2-cloudconsult">
                <Col sm={12} md={4}>
                <CloudCheckIcon size={45}  className="icon-cloudconsult"/><p className="content-consult">컨터이너를 이용한 컴퓨팅 자원 사용으로 비용절감</p>
                </Col>
                <Col sm={12} md={4}>
                <CloudCheckIcon size={45}  className="icon-cloudconsult"  /><p className="content-consult"> 마이크로서비스 도입을 위한 개발과 시스템구성 상담</p></Col>
                <Col sm={12} md={4}>
                    <CloudCheckIcon size={45} className="icon-cloudconsult"  /><p className="content-consult">최적의 비용으로 자체 독립 클라우드 구축및 운영지원</p>
                </Col>
            </Row>
            <Row className="row3-cloudconsult">
                <Col sm={12} md={4} className="card1-consults">
                    <GridCard>
                        <GridCardBody className='col-data-consult'>
                            <Card.Title className="avatar-card-title"><p>신윤호 부장</p></Card.Title>
                            <Card.Img className="avatar-card-user" src="https://www.hanbiro.com/images/support/pic006.jpg" /> 
                            <Card.Text className="avatar-card-title">
                                <h6>070-4804-9651</h6>
                                <h6>kernel@hanbiro.com</h6>
                            </Card.Text>
                        </GridCardBody>
                    </GridCard>
                </Col>

                <Col sm={12} md={4} className="card1-consults">
                <GridCard>
                    <GridCardBody className='col-data-consult'>
                        <Card.Title className="avatar-card-title"><p>김정윤 부장</p></Card.Title>
                        <Card.Img className="avatar-card-user" src="https://www.hanbiro.com/images/support/pic007.jpg" /> 
                        <Card.Text className="avatar-card-title">
                            <h6>070-4804-9668</h6>
                            <h6>linuxdev@hanbiro.com</h6>
                        </Card.Text>
                    </GridCardBody>
                </GridCard>
                </Col>
                <Col sm={12} md={4} className="card1-consults">
                    <GridCard>
                        <GridCardBody className='col-data-consult'>
                            <Card.Title className="avatar-card-title"><p>조성학 이사 (해외)</p></Card.Title>
                            <Card.Img className="avatar-card-user" src="https://www.hanbiro.com/images/support/pic002.jpg" /> 
                            <Card.Text className="avatar-card-title">
                                <h6>+84 909 284 160</h6>
                                <h6>linux@hanbiro.com</h6>
                            </Card.Text>
                        </GridCardBody>
                    </GridCard>
                </Col>
            
            </Row>
            <Row>
                <Col sm={12} md={4} className="card1-consults">
                    <GridCard>
                        <GridCardBody className='col-data-consult'>
                            <Card.Title className="avatar-card-title"><p>신상우 부장</p></Card.Title>
                            <Card.Img className="avatar-card-user" src="https://www.hanbiro.com/images/support/pic003.jpg" /> 
                            <Card.Text className="avatar-card-title">
                                <h6>070-4804-9662</h6>
                                <h6>security@hanbiro.com</h6>
                            </Card.Text>
                        </GridCardBody>
                    </GridCard>
                </Col>
                <Col sm={12} md={4} className="card1-consults">
                    <GridCard>
                        <GridCardBody className='col-data-consult'>
                            <Card.Title className="avatar-card-title"><p>신경섭 소장</p></Card.Title>
                            <Card.Img className="avatar-card-user" src="https://www.hanbiro.com/images/support/pic004.jpg" /> 
                            <Card.Text className="avatar-card-title">
                                <h6>070-4804-9664</h6>
                                <h6>windev@hanbiro.com</h6>
                            </Card.Text>
                        </GridCardBody>
                    </GridCard>
                </Col>
                <Col sm={12} md={4} className="card1-consults">
                    <GridCard>
                        <p>&nbsp;</p>
                    </GridCard>
                </Col>
            </Row>
    </Container>
    </div>
    
  );
}


const GridCard = styled(Card)`
  padding-bottom: 20px;
  
  p {
    margin-bottom: 0;
  }
`;

const GridCardBody = styled(CardBody)`
  padding: 0;
  text-align: left;
`;



export default Cloudconsult;