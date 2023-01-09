
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
import { Box } from '@mui/material';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



function consultlticoncloud (title) {
    return(
        <Titlecloudrow2>
             <GridCardBody>
                <MyCardText >
                    <Myiconcard className="icon-shape"><CloudCheckIcon className="iconstyle" size={24} /></Myiconcard>
                    {/* <CardTitleIcon className="font-content-cloud" ><TypographyCard className="font-title-cloud">{title}</TypographyCard></CardTitleIcon> */}
                    <TypographyCard className="font-title-cloud">{title}</TypographyCard>
                </MyCardText>
            
            </GridCardBody>
        </Titlecloudrow2>
       
    )
}

function formatPhone($phone) {
     return 'tel:' + $phone
    }

function formatMail($mail) {
     return 'mailto:' + $mail
    }



function columnus($username,$imageuser,$phone,$mail){
    return(
        <Card1cloudrow3>
            <GridCardBody2>
            
            <CardTitle><TypographyCard>{$username}</TypographyCard></CardTitle> 
            <CardImage src={$imageuser}></CardImage>
            <CardText>
                <LocalPhoneIcon sx={{ fontSize: 13 }} /><a className="phoneline"  href={formatPhone($phone)}>&nbsp;&nbsp;{$phone}</a>
            </CardText>
            <CardText>
                <MailOutlineIcon sx={{ fontSize: 13 }} /><a className="mailline" href={formatMail($mail)} >&nbsp;&nbsp;{$mail}</a>
            </CardText>
            
            </GridCardBody2>
        </Card1cloudrow3>
        
    
        
    )
}

/* eslint-disable */

function Cloudconsult() {
  
  return (
    <div className='coloruserdata'>
        <Container >
            <Row >
                <Col sm={12}>
                    <Titlecloud><h2>CLOUD 구축및 운영 컨설팅</h2></Titlecloud>
                </Col>
            </Row>
            <Row className='dataline'>
                <Col sm={12} md={9} lg={4}>
                    <GridCard >
                        {consultlticoncloud("컨터 이너를 이용한 컴퓨팅 자원 사용으로 비용절감")} 
                            
                    </GridCard>
                </Col>
                <Col sm={12} md={9} lg={4}>
                    <GridCard >
                        {consultlticoncloud("마이크로서비스 도입을 위한 개발과 시스템구성 상담")}
                    </GridCard>
                </Col>    
                <Col sm={12} md={9} lg={4}>
                    <GridCard >
                        {consultlticoncloud("최적의 비용으로 자체 독립 클라우드 구축및 운영지원")}
                    </GridCard>
                </Col>
            </Row>
            <Row className='dataline'>
                <Col sm={12} md={9} lg={4} >
                    
                    <GridCard>
                        {columnus("신윤호 부장","https://www.hanbiro.com/images/support/pic006.jpg","070-4804-9651","kernel@hanbiro.com")}
                    
                    </GridCard>
                </Col>
                <Col sm={12} md={9} lg={4} >
                <GridCard>
                        {columnus("김정윤 부장","https://www.hanbiro.com/images/support/pic007.jpg","070-4804-9668","linuxdev@hanbiro.com")}
                    
                </GridCard>
                </Col>
                <Col sm={12} md={9} lg={4}>
                    <GridCard>
                        {columnus("조성학 이사 (해외)","https://www.hanbiro.com/images/support/pic002.jpg","+84 909 284 160","linux@hanbiro.com")}
                    </GridCard>
                </Col>
            
            </Row>
            <Row className='dataline'>
                <Col sm={12} md={9} lg={4} >
                    <GridCard>
                        {columnus("신상우 부장","https://www.hanbiro.com/images/support/pic003.jpg","070-4804-9662","security@hanbiro.com")}
                    </GridCard>
                </Col>
                <Col sm={12} md={9} lg={4}>
                    <GridCard>
                        {columnus("신경섭 소장","https://www.hanbiro.com/images/support/pic004.jpg","070-4804-9664","windev@hanbiro.com")}
                    </GridCard>
                </Col>
                <Col sm={12} md={9} lg={4}>
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

const GridCardBody2 = styled(CardBody)`
  
  border: solid #E7EAF3 1px;
  background:  white;
  border-radius: 10px;
  
  
`;


const TypographyCard = styled.div`
  h1, h2, h3, h4, h5,h6 {
      margin-bottom:10px;
  }
`;


const MyCardText = styled(Card.Text)`
    display: flex;
    justify-items: center;
    align-items: center;
`;


const Myiconcard = styled.div`
    color: #0099FF;
    border-radius:50%;
    border: solid white 0px;
    background-color:#99CCFF;
    padding:3%;
    

`;


const CardTitle = styled(Card.Title)`
    width: 18rem;
    position: relative;
    text-align: left;
    font-weight: bold;
    font-size:17px;
    
    
`;


const CardText = styled(Card.Text)`
    width: 18rem;
    position: relative;
    text-align: left;
    font-size: 13px;
  
  
`;

const CardImage = styled(Card.Img)`
    text-align: right;
    position: absolute;
    left: 75%;
    right: 5%;
    top: 15%;
    
    width: 11%;
    border-radius:50%;
  
  
`;

const CardTitleIcon = styled(Card.Title)`
    padding-left: 4%;
    font-size:12pt;
`;

const Titlecloud = styled.div`
    padding-top: 3%;
`;

const Titlecloudrow2 = styled.div`
    text-align: left;
    padding-top:5%;
    display: flex;
`;

const Card1cloudrow3 = styled.div`
    text-align: center;
    padding-top: 1%;
    
`;


;




export default Cloudconsult;