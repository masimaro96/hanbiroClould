import React from "react";
import styled from 'styled-components';
import {
    Container, Row, Col,
  } from 'react-bootstrap';
import {
    Card, CardBody,
  } from '@/shared/components/Card';
import Box from '@mui/material/Box';
import './Box-Style.css';

function BoxCard() {
  
    return (
      <div className='BoxCard'>
        <Container className="introduce-content">
            <Row className="introduce-content-row">
                <Col sm={12} md={5} className="Box1">
                    <GridCard>
                        <GridCardBody>
                            <TypographyCard className="intro-title">서버의 스토리지용량의 자유로운 확장과 서비스 시스템 구성의 간편함과 동시성 구현</TypographyCard>
                            <TypographyCard className="intro-description">관리콘솔에서 생성된 가상서버에 블록 Storage 의 볼륨을 연결해서 서버의 용량을 확장할 수 있으며, S3, Restful API 연결을 통해서 데이터를 오브젝트 Storage 직접 저장할 수 있습니다. 오브젝트 Storage 는 표준 Amazone S3와 호환되며, 기존의 S3 연동기능을 사용할 수 있습니다.</TypographyCard>
                        </GridCardBody>
                    </GridCard>
                </Col>
                <Col sm={12} md={5} className="Box1">
                    <GridCard>
                        <GridCardBody>
                            <TypographyCard className="intro-title">서버의 스토리지용량의 자유로운 확장과 서비스 시스템 구성의 간편함과 동시성 구현</TypographyCard>
                            <TypographyCard className="intro-description">관리콘솔에서 생성된 가상서버에 블록 Storage 의 볼륨을 연결해서 서버의 용량을 확장할 수 있으며, S3, Restful API 연결을 통해서 데이터를 오브젝트 Storage 직접 저장할 수 있습니다. 오브젝트 Storage 는 표준 Amazone S3와 호환되며, 기존의 S3 연동기능을 사용할 수 있습니다.</TypographyCard>                
                        </GridCardBody>
                    </GridCard>
                </Col>
            </Row>
            <Row className="introduce-content-row">
                <Col sm={12} md={5} className="Box1">
                    <GridCard>
                        <GridCardBody>
                            <TypographyCard className="intro-title">서버의 스토리지용량의 자유로운 확장과 서비스 시스템 구성의 간편함과 동시성 구현</TypographyCard>
                            <TypographyCard className="intro-description">관리콘솔에서 생성된 가상서버에 블록 Storage 의 볼륨을 연결해서 서버의 용량을 확장할 수 있으며, S3, Restful API 연결을 통해서 데이터를 오브젝트 Storage 직접 저장할 수 있습니다. 오브젝트 Storage 는 표준 Amazone S3와 호환되며, 기존의 S3 연동기능을 사용할 수 있습니다.</TypographyCard>
                        </GridCardBody>
                    </GridCard>
                </Col>
            </Row>
        </Container>
      </div>
    );
};

const GridCard = styled(Card)`
  padding-bottom: 10px;

  p {
    margin-bottom: 0;
  }
`;

const GridCardBody = styled(CardBody)`
  padding: 0;
  text-align: left;
`;

const TypographyCard = styled.div`
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
`;


export default BoxCard;