import React from 'react';
import styled from 'styled-components';
import '../../Card/Components/Contenttitlecard.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    Card, CardBody,
}from '@/shared/components/Card';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'






function Titlecloudcompute($title1) {
  
  return (
    <>
        <div className='App'>
            <Row>
                <Col md={12} >
                  <Box ><Titlecloud2 className="sizetitle">{$title1}</Titlecloud2></Box>
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




const Titlecloud2 = styled.div`
  font-weight: bold;
  font-size:30px;
  padding-top:4%;
  padding-bottom:2%
    
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






export default Titlecloudcompute;
