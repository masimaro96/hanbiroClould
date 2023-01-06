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





function Imagecloudcompute($imagecloud) {
  
  return (
    <>
        <div className='App'>
              <Row>
                <Col sm={12} md={12}>
                    <GridCard>
                        <GridCardBody3>
                            <CardImage className="sizeimage" src={$imagecloud}></CardImage>
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
  border: solid #E7EAF3 1px;
  background:  white;
  border-radius: 10px;
  
  
  
`;

const GridCardBody3 = styled(CardBody)`
    border: solid #FAFBFB 1px;
    background:  white;
    box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%) !important;
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
    padding-left:1%;
    padding-right:1%;
`;



export default Imagecloudcompute;
