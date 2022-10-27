import React from "react";
import styled from 'styled-components';
import {
    Container, Row, Col,
  } from 'react-bootstrap';
import './Banner-Style.css';


function Banner($title,$description) {
  
    return (
      <div className='banner'>
        <Container>
            <Row>
                <Col md={12} sm={12}>
                    <TypographyCard className="detailpage-title">{$title}</TypographyCard>
                    <TypographyCard className="detailpage-description">{$description}</TypographyCard>
                </Col>
            </Row>
        </Container>
      </div>
    );
};

const TypographyCard = styled.div`
  color: white;
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
`;


export default Banner;



