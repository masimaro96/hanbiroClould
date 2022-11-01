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



function Contentcloudcompute($data1,$data2,$data3,$data4,$data5,$data6,$data7,$data8,$data9,$data10,$data11,$data12,$data13,$data14) {
  
  return (
    <>
        <div className='App'>
           
            <Row>
              <Col sm={12} md={6}>
                
                <GridCard>
                    <GridCardBody2>
                        <CardTitle>
                            <div>{$data1}</div>
                            <div>{$data2}</div>
                        </CardTitle>  
                        <CardText>
                            <Typography>{$data5}</Typography>
                            <Typography>{$data6}</Typography>
                            <Typography>{$data7}</Typography>
                            <Typography>{$data8}</Typography>
                            <Typography>{$data9}</Typography>
                        </CardText>
                    </GridCardBody2>  
                  </GridCard>
                </Col>
                <Col sm={12} md={6}>
                  <GridCard>
                    <GridCardBody2>
                            <CardTitle>
                              <div>{$data3}</div>
                              <div>{$data4}</div>
                            </CardTitle>  
                            <CardText>
                              <Typography>{$data10}</Typography>
                              <Typography>{$data11}</Typography>
                              <Typography>{$data12}</Typography>
                              <Typography>{$data13}</Typography>
                              <Typography>{$data14}</Typography>
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
  padding: 0px;
  text-align: left;
  font-weight: bold;
  font-size:14pt;
  padding-bottom:5%;
  line-height:1.5em;
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
