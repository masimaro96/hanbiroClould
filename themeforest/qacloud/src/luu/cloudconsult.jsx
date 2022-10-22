
import React from 'react';

import './Style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CloudCheckIcon from 'mdi-react/CloudCheckIcon';





/* eslint-disable */

function Cloudconsult() {
  
  return (
    <Container>
        <Row className="row1-cloudconsult">
            <Col sx={12} className="title-cloudconsult"><h3>CLOUD 구축및 운영 컨설팅</h3></Col>
        </Row>
        <Row className="row2-cloudconsult">
            <Col sx={12} md={4}>
                <CloudCheckIcon  className="icon-cloudconsult"/>컨터이너를 이용한 컴퓨팅 자원 사용으로 비용절감
            </Col>
            <Col sx={12} md={4}> <CloudCheckIcon className="icon-cloudconsult"  />마이크로서비스 도입을 위한 개발과 시스템구성 상담</Col>
            <Col sx={12} md={4}> <CloudCheckIcon className="icon-cloudconsult"  />최적의 비용으로 자체 독립 클라우드 구축및 운영지원</Col>
        </Row>


        <Row className="row3-cloudconsult">
            <Col sx={12} md={4} className="card1-consults">
                <Card className="card-cha">
                    
                    <Card.Body >
                        <Card.Title className="avatar-card-title"><h5>신윤호 부장</h5></Card.Title>
                        <Card.Img className="avatar-card-user" src="holder.js/100px180?text=Image cap" />
                        <Card.Text className="avatar-card-title">
                            <h6>070-4804-9651</h6>
                            <h6>kernel@hanbiro.com</h6>
                    
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col sx={12} md={4} className="card1-consults">
            <Card className="card-cha">
                    
                    <Card.Body >
                        <Card.Title className="avatar-card-title"><h5>신윤호 부장</h5></Card.Title>
                        <Card.Img className="avatar-card-user" src="holder.js/100px180?text=Image cap" />
                        <Card.Text className="avatar-card-title">
                            <h6>070-4804-9651</h6>
                            <h6>kernel@hanbiro.com</h6>
                    
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sx={12} md={4} className="card1-consults">
            <Card className="card-cha">
                    
                    <Card.Body >
                        <Card.Title className="avatar-card-title"><h5>신윤호 부장</h5></Card.Title>
                        <Card.Img className="avatar-card-user" src="holder.js/100px180?text=Image cap" />
                        <Card.Text className="avatar-card-title">
                            <h6>070-4804-9651</h6>
                            <h6>kernel@hanbiro.com</h6>
                    
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        
        </Row>
    </Container>
  );
}

export default Cloudconsult;