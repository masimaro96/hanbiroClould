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
                  <Box><Titlecloud2>Database 인스턴스(가상서버)</Titlecloud2></Box>
                </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Box>
                  <GridCard>
                    <GridCardBody>
                      <div>고객별 서버자원의 독립성보장, 안정적인 서비스운영</div>
                      <div>모든 서비스 고용량 SSD 디스크 제공, 고용량의 메모리 할당</div>
                    </GridCardBody>
                  </GridCard>
                </Box>
              </Col>
                
            </Row>
           
              <Row>
              <Col sm={12} md={12}>
                
                <GridCard>
                    <GridCardBody3>
                        <CardImage src="https://www.hanbiro.com/cloud/images/concept/database.gif"></CardImage>
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
