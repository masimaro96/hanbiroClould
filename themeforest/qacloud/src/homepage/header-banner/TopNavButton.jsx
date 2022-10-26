import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DownloadLockIcon from 'mdi-react/DownloadLockIcon';
import {
    Container, Row, Col,
} from 'react-bootstrap';

function NavButton() {
  const [open, setOpen] = useState(false);
  const [openhosting, setOpenhosting] = useState(false);
  const [openmobile, setOpenmobile] = useState(false);

  return (
    <>
        <div className='box'>
            <Container className='box-container'>
                <Row>
                    <Col md={5} sm={12}>
                        <div className="top-nav">
                            <div>고객 지원 안내: <span >1544 - 4755</span> • hanbiro@hanbiro.com</div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="top-nav-right">
                            <div className="item-nav"> 원격 지원</div>
                            <div className="item-nav"> 서버호스팅 고객</div>
                            <div className="item-nav"> 웹호스팅 고객</div>
                            <div className="item-nav"> Sectigo(COMODO) SSL</div>
                            <div className="item-nav"> 한비로 블로그</div>
                            <div className="item-nav-2"> 한국어 <DownloadLockIcon/></div>
                        </div>
                    </Col >
                </Row>
            </Container>
        </div>
        <div>
            <Container className='bar-home'>
                <Row>
                    <Col md={3} sm={12}>
                        <div className="bar-logo">
                            <img src={"https://www.hanbiro.com/cloud/images/logo.png"} style={{width:200,height:50}}></img>
                        </div>
                    </Col>
                    <Col md={9} sm={12}>
                        <div className="bar-menu">
                            <div className="bar-item"
                                onClick={() => setOpenhosting(!openhosting)}
                                aria-controls="hosting"
                                aria-expanded={openhosting}
                            >
                                <span> HOME </span> <br/>
                                <span className="bar-item-1">Welcome</span>
                            </div>
                            <div className="bar-item"
                                onClick={() => setOpenhosting(!openhosting)}
                                aria-controls="hosting"
                                aria-expanded={openhosting}
                            >
                                <span>  클라우드  </span> <br/>
                                <span className="bar-item-1">Cloud</span>
                            </div>
                            <div className="bar-item"
                                onClick={() => setOpenhosting(!openhosting)}
                                aria-controls="hosting"
                                aria-expanded={openhosting}
                            >
                                <span> 마이크로서비스 개발 </span> <br/>
                                <span className="bar-item-1">Microservice</span>
                            </div>
                            <div className="bar-item "
                                onClick={() => setOpen(!open)}
                                aria-controls="hanbiro-customer"
                                aria-expanded={open}
                            >
                                <span>  그룹웨어  </span> <br/>
                                <span className="bar-item-1">Groupware</span>
                            </div>
                            
                            <div className="bar-item"
                                onClick={() => setOpenhosting(!openhosting)}
                                aria-controls="hosting"
                                aria-expanded={openhosting}
                            >
                                <span> Vora Works </span> <br/>
                                <span className="bar-item-1">Vora Works</span>
                            </div>
                            <div className="bar-item"
                                onClick={() => setOpenhosting(!openhosting)}
                                aria-controls="hosting"
                                aria-expanded={openhosting}
                            >
                                <span>  호스팅  </span> <br/>
                                <span className="bar-item-1">Hosting</span>
                            </div>
                            <div className="bar-item"
                                onClick={() => setOpen(!open)}
                                aria-controls="hanbiro-customer"
                                aria-expanded={open}
                            >
                                <span>  한비로/고객 센터  </span> <br/>
                                <span className="bar-item-1">Hanbiro/Customers</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <Collapse in={open} className="menu">
                            <div id="hosting" className="menu-list">
                                <div className="menu-list-item boder-left">
                                    <h6 >한비로</h6>
                                    <div> 소개</div>
                                    <div> CEO 인사말</div>
                                    <div> Brand</div>
                                    <div> 연혁</div>
                                    <div> 한비로 사람들</div>
                                    <div> 회원증 및 인증서</div>
                                    <div> 오시는 길</div>
                                    <div>  블로그 </div>
                                </div>
                                <div className="menu-list-item">
                                    <h6>고객센터</h6>
                                    <div> 고객 문의 및 서버 점검 의뢰</div>
                                    <div> 결제 안내</div>
                                    <div> IDC 방문 신청</div>
                                    <div> 불편 사항 접수</div>
                                    <div> 네임 서버 정보</div>
                                    <div> 메일 POP / 모바일 POP 설정</div>
                                </div>
                            </div>
                        </Collapse>
                            
                        <Collapse in={openhosting} className="menu">
                                <div id="hanbiro-customer" className="menu-list">
                                    <div className="menu-list-item boder-left">
                                        <h6>한비로</h6>
                                        <div> 소개</div>
                                        <div> CEO 인사말</div>
                                        <div> Brand</div>
                                        <div> 연혁</div>
                                        <div> 한비로 사람들</div>
                                        <div> 회원증 및 인증서</div>
                                        <div> 오시는 길</div>
                                        <div>  블로그 </div>
                                    </div>
                                    <div className="menu-list-item boder-left">
                                        <h6>고객센터</h6>
                                        <div> 고객 문의 및 서버 점검 의뢰</div>
                                        <div> 결제 안내</div>
                                        <div> IDC 방문 신청</div>
                                        <div> 불편 사항 접수</div>
                                        <div> 네임 서버 정보</div>
                                        <div> 메일 POP / 모바일 POP 설정</div>
                                    </div>
                                    <div className="menu-list-item boder-left">
                                        <h6>한비로</h6>
                                        <div> 소개</div>
                                        <div> CEO 인사말</div>
                                        <div> Brand</div>
                                        <div> 연혁</div>
                                        <div> 한비로 사람들</div>
                                        <div> 회원증 및 인증서</div>
                                        <div> 오시는 길</div>
                                        <div>  블로그 </div>
                                    </div>
                                    <div className="menu-list-item boder-left">
                                        <h6>고객센터</h6>
                                        <div> 고객 문의 및 서버 점검 의뢰</div>
                                        <div> 결제 안내</div>
                                        <div> IDC 방문 신청</div>
                                        <div> 불편 사항 접수</div>
                                        <div> 네임 서버 정보</div>
                                        <div> 메일 POP / 모바일 POP 설정</div>
                                    </div>
                            </div>
                        </Collapse>
                       
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <div className="btn-moble-list">
                            <div className="btn-moble"
                                onClick={() => setOpenmobile(!openmobile)}
                                aria-controls="hosting"
                                aria-expanded={openmobile}
                            >
                                    전체 메뉴
                            </div>
                        </div>
                    </Col>
                    <Col md={12} sm={12}>
                        <Collapse in={openmobile} >
                            <div id="hanbiro-customer" className="mobile-list">
                                <div >
                                    <h6> HOME </h6>
                                </div>
                                <div >
                                    <h6> 클라우드 </h6>
                                </div>
                                <div >
                                    <h6>마이크로서비스 개발</h6>
                                </div>
                                <div >
                                    <h6> 그룹웨어 </h6>
                                </div>
                                <div >
                                    <h6> Vora Works </h6>
                                </div>
                                <div >
                                    <h6>  호스팅  </h6>
                                </div>
                                <div >
                                    <h6>  한비로/고객 센터   </h6>
                                </div>
                                
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}





export default NavButton;


