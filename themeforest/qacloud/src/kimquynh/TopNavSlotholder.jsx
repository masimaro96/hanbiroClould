import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
    Container, Row, Col,
} from 'react-bootstrap';

function NavButton() {
  return (
    <>
        
        <div className='slotho-bg'>
            <Container >
                <Row>
                    <Col md={12} sm={12} className="slotho-list">
                        <div className="Container-bar-left">
                            <div>
                                <img className="img-logo" src={"https://www.hanbiro.com/cloud/images/main-text.png"} ></img>
                            </div>
                            <div>&nbsp;</div>
                            <div>컨테이너를 이용한 컴퓨팅 자원 사용으로 비용절감 </div>
                            <div>&nbsp;</div>
                            <div>마이크로서비스 도입을 위한 개발과 시스템구성 상담및 컨설팅</div>
                            <div>&nbsp;</div>
                            <div>최적의 비용으로 자체 독립 클라우드 구축및 운영지원</div>
                            <div>&nbsp;</div>
                            <div>AWS, Microsoft Azure 와 Private Cloud 통합시스템 구축지원</div>
                        </div>
                        <div className="Container-bar-right">
                            <img className="img-org" src={" https://www.hanbiro.com/cloud/images/main-img01.png"} ></img>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
       
    </> 
  );
}

export default NavButton;


