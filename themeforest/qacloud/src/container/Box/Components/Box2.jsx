import React from "react";
import styled from 'styled-components';
import {
    Container, Row, Col,
  } from 'react-bootstrap';
import {
    Card, CardBody,
  } from '@/shared/components/Card';
import './Box-Style.css';

function BoxCard($title1,$description1,$title2,$description2) {
  
    return (
      <div className='BoxCard'>
        <Container className="introduce-content">
            <Row className="introduce-content-row">
                <Col sm={12} md={6}>
                    <GridCard className="Box1">
                        <GridCardBody className='introduce-content-card'>
                            <TypographyCard className="intro-title">{$title1}</TypographyCard>
                            <TypographyCard className="intro-description">{$description1}</TypographyCard>
                        </GridCardBody>
                    </GridCard>
                </Col>
                <Col sm={12} md={6}>
                    <GridCard className="Box1">
                        <GridCardBody className='introduce-content-card'>
                            <TypographyCard className="intro-title">{$title2}</TypographyCard>
                            <TypographyCard className="intro-description">{$description2}</TypographyCard>                
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