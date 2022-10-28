import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    Card, CardBody,
}from '@/shared/components/Card';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'




function Contentcloudcompute($data1,$data2,$data3,$data4) {
  
  return (
    <>
        <div className='App'>
           
            <Row>
              <Col sm={12} md={6}>
                
                <GridCard>
                    <GridCardBody2>
                        <CardTitle>
                            <div>{$data1}</div>
                        </CardTitle>  
                        <CardText>
                            <div>{$data2}</div>
                        </CardText>
                    </GridCardBody2>  
                  </GridCard>
                </Col>
                <Col sm={12} md={6}>
                  <GridCard>
                    <GridCardBody2>
                            <CardTitle>
                                <div>{$data3}</div>
                            </CardTitle>  
                            <CardText>
                                <div>{$data4}</div>
                            </CardText>
                        </GridCardBody2>  
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





const GridCardBody2 = styled(CardBody)`
  border: solid gray 1px;
  background:  white;
  border-radius: 10px;
  
  
  
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



export default Contentcloudcompute;
