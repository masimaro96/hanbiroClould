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
                  <Box><Titlecloud2>베어메탈 서버</Titlecloud2></Box>
                </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Box>
                  <GridCard>
                    <GridCardBody>
                        <div>베어메탈 서버는 일반 코로케이션 서버의 상품과 가격이 동일</div>
                      <Card.Link href="#"><Typography> https://www.hanbiro.com/hosting/product-list.html </Typography></Card.Link>
                    </GridCardBody>
                  </GridCard>
                </Box>
              </Col>
                
            </Row>
            <Row>
              <Col sm={12} md={6}>
                
                <GridCard>
                    {columnusdata("클라우드 환경내에서 고성능의 물리서버를","단독으로 이용","서비스 운영체제를 물리서버에 직접 설치해서 운영하는","서버입니다. 고객이 원하는 하드웨어 구성할 수 있으며,","고성능 대용량 서비스에 적합합니다.")}  
                  </GridCard>
                </Col>
                <Col sm={12} md={6}>
                  <GridCard>
                    {columnusdata("대용량의 입출력이 필요하거나 응답속도가","빠른 서비스에 적합","서버의 하드웨어자원을 공유하지 않고, 독립적으로","사용되는 서버입니다. 일반적인 Co-location 서버와","동일한 방식으로 운영할 수 있으며, 높은 응답속도와","대용량의 입출력이 요구되는 서비스에 적합합니다.")}  
                  </GridCard>
                </Col>
                  
              </Row>
              <Row>
              <Col sm={12} md={12}>
                
                <GridCard>
                    <GridCardBody3>
                        <CardImage src="https://www.hanbiro.com/cloud/images/concept/baremetal.gif"></CardImage>
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
