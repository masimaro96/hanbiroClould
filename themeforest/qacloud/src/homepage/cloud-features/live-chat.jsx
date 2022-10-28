import React from 'react';
// import './App.css';
import './style.css';
import styled from 'styled-components';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import { Grid } from '@mui/material';


function CloudFeatures(){

  return (
    <Container >
      <Col className='livechat'>
        <img alt='' src='https://www.hanbiro.com/images/ico-livechat.png' style={{width:30,height:30}}></img>
        <span className='content'>1:1 상담</span>
      </Col>
      <Col className='livechat_2'>
        <img alt='' src='https://www.hanbiro.com/images/ico-demo.png' style={{width:30,height:30}}></img>
        <span className='content'>데모 신청</span>
      </Col>
    </Container>
    
  );
};

export default CloudFeatures;

// region STYLES

const GridCard = styled(Card)`
  padding-bottom: 20px;
  p {
    margin-bottom: 0;
    text-align: left;
  }
`;

const GridCardBody = styled(CardBody)`
  padding: 0;

`;



// endregion
