import React from 'react';
import styled from 'styled-components';
import './Style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    Card, CardBody,
}from '@/shared/components/Card';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'





function columnusdata($data1,$data2,$data3,$data4,$data5,$data6,$data7){
  return(
      
    <GridCardBody2>
      <CardTitle>
          <div>{$data1}</div>
          <div>{$data2}</div>
      </CardTitle>  
      <CardText>
        <div>{$data3}</div>
        <div>{$data4}</div>
        <div>{$data5}</div>
        <div>{$data6}</div>
        <div>{$data7}</div>
      </CardText>
    </GridCardBody2>  
  
      
  )
}





function cardintroducecontent() {
  
  return (
    <>
        <div className='App'>
            <Row>
                <Col md={12} >
                  <Box><Titlecloud2>Load Balancer</Titlecloud2></Box>
                </Col>
            </Row>
            
            <Row>
              <Col sm={12} md={6}>
                
                <GridCard>
                    {columnusdata("한비로 Cloud 가상서버(인스턴스)를 연결,","클러스터 시스템 구축","한비로 Cloud 플랫폼의 가상서버의 로드발랜싱을","구현하며. 오토스케일링으로 확장된 가상서버와","자동으로 로드발랜서와의 연결을 지원합니다.")}  
                  </GridCard>
                </Col>
                <Col sm={12} md={6}>
                  <GridCard>
                    {columnusdata("쿠버네티스 기반 데이터베이스 및","어플리케이션과 통합 클러스터 플랫폼 구축","한비로 Cloud 플랫폼의 인스턴스 또는 베어메탈 서버와","쿠버네티스 기반의 Application 클러스터와","데이터베이스 클러스터와의 연결을 구현합니다.")}  
                  </GridCard>
                </Col>
                  
              </Row>
              <Row>
              <Col sm={12} md={12}>
                
                <GridCard>
                    <GridCardBody3>
                        <CardImage src="https://www.hanbiro.com/cloud/images/concept/loadbalancer.gif"></CardImage>
                    </GridCardBody3>
                  
                </GridCard>
              </Col>
                
                  
              </Row>
            
        </div>
        

    </>
  );
}





const GridCard = styled(Card)`
  padding-bottom: 20px;
  
  p {
    margin-bottom: 0;
  }
  
`;

const GridCardBody = styled(CardBody)`
  padding: 10;
  text-align: center;
  background-color:#e5e5e5;
  font-weight: bold;
  border-radius: 10px;
  font-size: 18px;
  
`;



const GridCardBody2 = styled(CardBody)`
    border: solid white 2px;
    background:  white;
    border-radius: 10px;
  
  
  
`;

const GridCardBody3 = styled(CardBody)`
    border: solid white 2px;
    background:  white;
`;


const Titlecloud2 = styled.div`
  font-weight: bold;
  font-size:28px;
    
`;

const CardTitle = styled(Card.Title)`
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size:18px;
`;




const TypographyCard = styled.div`
  h1, h2, h3, h4, h5,h6 {
      margin-bottom:10px;
  }
`;

const CardText = styled(Card.Text)`
    
    text-align: left;
    margin-bottom: 6%;
    margin-top: 4%;
    color:gray;
    font-size:14px;
  
`;

const CardImage = styled(Card.Img)`
    text-align: center;
    padding-left:5%;
    padding-right:5%;
    
    
  
`;





export default cardintroducecontent;
