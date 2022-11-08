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
                            <Typography>{$data2}</Typography>                          
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
                              <Typography>{$data4}</Typography>
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
  border: solid #E7EAF3 1px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%) !important;
  
  
`;



const CardTitle = styled(Card.Title)`
  
  text-align: left;
  font-weight: bold;
  font-size:15pt;
  padding-bottom:5%;
  line-height:1.5em;
  padding-right:4%;
  height:25%;
`;




const TypographyCard = styled.div`
  h1, h2, h3, h4, h5,h6 {
      margin-bottom:10px;
  }
`;

const CardText = styled(Card.Text)`
    
    text-align: left;
    padding-bottom: 6%;
    padding-top:5%;
    color:gray;
    font-size:14px;
    
  
`;

const CardImage = styled(Card.Img)`
    text-align: center;
    padding-left:5%;
    padding-right:5%;
    
    
  
`;




export default Contentcloudcompute;
