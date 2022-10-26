
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





function consultlticoncloud (title) {
    return(
        <GridCardBody>
            <Card.Text className="title-iconcloud">
                <CloudCheckIcon size={45}  className="icon-cloudconsult"/><text className="content-consult">{title}</text>
            </Card.Text>
        </GridCardBody>
    )
}

function columnus($username,$imageuser,$phone,$mail){
    return(
        <GridCardBody className='col-data-consult'>
            <Card.Title className="avatar-card-title"><text>{$username}</text></Card.Title>
            <Card.Img className="avatar-card-user" src={$imageuser} /> 
            <Card.Text className="avatar-card-title">
                <h6>{$phone}</h6>
                <h6>{$mail}</h6>
                
            </Card.Text>
        </GridCardBody>
    )
}

/* eslint-disable */

function Cloudconsult() {
  
  return (
    <div className='App'>
        <Container >
            <Row className="row1-cloudconsult">
                <Col sm={12} className="title-cloudconsult"><h2 className="title-name-consult">CLOUD 구축및 운영 컨설팅</h2></Col>
            </Row>
            <Row className="row2-cloudconsult">
                <Col sm={12} md={4}>
                    <GridCard>
                            {consultlticoncloud("컨터이너를 이용한 컴퓨팅 자원 사용으로 비용절감")}
                    </GridCard>
                </Col>
                <Col sm={12} md={4}>
                    <GridCard>
                        {consultlticoncloud("마이크로서비스 도입을 위한 개발과 시스템구성 상담")}
                    </GridCard>
                </Col>    
                <Col sm={12} md={4}>
                    <GridCard>
                        {consultlticoncloud("최적의 비용으로 자체 독립 클라우드 구축및 운영지원")}
                    </GridCard>
                </Col>
            </Row>
            <Row className="row3-cloudconsult">
                <Col sm={12} md={4} className="card1-consults">
                    <GridCard>
                        {columnus("신윤호 부장","https://www.hanbiro.com/images/support/pic006.jpg","070-4804-9651","kernel@hanbiro.com")}
                    </GridCard>
                </Col>
                <Col sm={12} md={4} className="card1-consults">
                <GridCard>
                    {columnus("김정윤 부장","https://www.hanbiro.com/images/support/pic007.jpg","070-4804-9668","linuxdev@hanbiro.com")}
                </GridCard>
                </Col>
                <Col sm={12} md={4} className="card1-consults">
                    <GridCard>
                        {columnus("조성학 이사 (해외)","https://www.hanbiro.com/images/support/pic002.jpg","+84 909 284 160","linux@hanbiro.com")}
                    </GridCard>
                </Col>
            
            </Row>
            <Row>
                <Col sm={12} md={4} className="card2-consults">
                    <GridCard>
                        {columnus("신상우 부장","https://www.hanbiro.com/images/support/pic003.jpg","070-4804-9662","security@hanbiro.com")}
                    </GridCard>
                </Col>
                <Col sm={12} md={4} className="card5-consults">
                    <GridCard>
                        {columnus("신경섭 소장","https://www.hanbiro.com/images/support/pic004.jpg","070-4804-9664","windev@hanbiro.com")}
                    </GridCard>
                </Col>
                <Col sm={12} md={4} className="card5-consults">
                    <GridCard>
                        <text>&nbsp;</text>
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