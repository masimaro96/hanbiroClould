import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DownloadLockIcon from 'mdi-react/DownloadLockIcon';
import {
    Container, Row, Col,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from '../../container/Sidebar/Sidebar';
import Ngoctesst from '../../container/Sidebar/Ngoctesst';


function titleMenu($Kor,$Eng){
    return(
        <>
            <span> {$Kor} </span> <br/>
            <span className="bar-item-1">{$Eng}</span>
        </>
    )
}
function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div variant="primary" onClick={handleShow} className="me-2">
          {name}
        </div>
        <Offcanvas show={show} onHide={handleClose} {...props} className='sidebar-detail'>
          <Offcanvas.Header closeButton >
            
          </Offcanvas.Header>
          <Ngoctesst />
          
        </Offcanvas>
      </>
    );
  }

function NavButton() {
  const [open, setOpen] = useState(false);
  const [openhosting, setOpenhosting] = useState(false);
  const [openmobile, setOpenmobile] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isShownHos, setIsShownHos] = useState(false);
  const [isShownVora, setIsShownVora] = useState(false);
  const [isShownGw, setIsShownGw] = useState(false);

  return (
    <>
        <div className='box'>
            <Container className='box-container'>
                <Row>
                    <Col md={5} sm={12}>
                        <div className="mb-top-nav">
                            <div className="top-nav">
                                <div>고객 지원 안내: <span >1544 - 4755</span> <text className="gmail">• hanbiro@hanbiro.com</text></div>
                            </div>
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
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Container className='bar-home'>
                <Row className="bar-home-list">
                    <Col md={3} sm={12}>
                        <div className="bar-logo ">
                            <img src={"https://www.hanbiro.com/cloud/images/logo.png"} style={{width:200,height:50}}></img>
                        </div>
                    </Col>
                    <Col md={9} sm={12}>
                        <div className="bar-menu">
                           
                            <div className="bar-item btn-home">   
                                {titleMenu("HOME","Welcome")}
                            </div>
                            <div className="bar-item ">
                                {titleMenu("클라우드","Cloud")}
                            </div>
                            <div className="bar-item ">   
                                {titleMenu("마이크로서비스 개발","Microservice")}
                            </div>
                        
                            <div className="bar-item "
                                onMouseEnter={() => setIsShownGw(true)}
                                onMouseLeave={() => setIsShownGw(false)}
                            >
                                {titleMenu("그룹웨어","Groupware")}
                            </div>
                        
                            <div className="bar-item"
                                onMouseEnter={() => setIsShownVora(true)}
                                onMouseLeave={() => setIsShownVora(false)}
                            >   
                                {titleMenu("Vora Works","Vora Works")}
                            </div>
                            
                        
                            <div className="bar-item"
                                onMouseEnter={() => setIsShownHos(true)}
                                onMouseLeave={() => setIsShownHos(false)}
                            >   
                                {titleMenu("호스팅","Hosting")}
                            </div>
                            <div className="bar-item bar-item-end "
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                            >
                                {titleMenu("한비로/고객 센터","Hanbiro/Customers")} 
                            </div>
                            
                        </div>
                    </Col>
                    <Col md={12} sm={12}>
                        {isShown && (
                            <div className="menu">
                                <div  className="menu-list ">
                                    <div className="product-list">
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
                                </div>
                            </div>
                        )}
                        {isShownHos && (
                            <div className="menu">
                                <div  className="menu-list">
                                    <div className="product-list">
                                        <div className="menu-list-item boder-left">
                                            <h6>관리 운영 서버 호스팅이란?</h6>
                                            <div> 소개</div>
                                            <div> 필요성</div>
                                            <div> 관리 내역</div>
                                            <div>  서버 호스팅과의 차이점</div>
                                            
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>관리 운영 서버 서비스 종류와 가격</h6>
                                            <div> 상품 구성</div>
                                            <div> 관리형 코로케이션</div>
                                            <div> 단기 임대 서버 호스팅</div>
                                            <div> 원격 서버 관리 운영</div>
                                            <div> 클라우드 서비스와의 가격 비교</div>
                                            <div> 신청하기</div>

                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6> 서버 호스팅</h6>
                                            <div> 상품 구성 </div>
                                            <div> 코로케이션</div>
                                            <div> 단기 임대 서버 호스팅</div>
                                            <div> 클라우드 서비스와의 가격 비교 </div>
                                            <div> 유료 기술 지원 </div>
                                            <div> 신청하기 </div>
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>웹 호스팅</h6>
                                            <div> 리눅스</div>
                                            <div> 윈도우</div>
                                            <div> DRM 스트리밍 호스팅</div>
                                            <div> 부가 서비스</div>
                                            <div> 유료 기술 지원</div>
                                            <div> 신청하러 가기 </div>

                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>베트남 호스팅</h6>
                                            <div> 상품 구성</div>
                                            <div> IDC 소개</div>
                                            <div> 네트워크 구성</div>
                                            <div> 신청하기</div>
                                            <div> 베트남 사무실</div>
                                            
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="menu-list-item boder-left">
                                            <h6>DDos</h6>
                                            <div>  한비로 IPS 소개</div>
                                            <div>  방어 능력</div>
                                            <div>  공격 유형과 차단</div>
                                            <div>  고객 관리자 페이지</div>
                                            
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>네트워크 구성도 및 트래픽</h6>
                                            <div> 네트워크 구성도</div>
                                            <div> 네트워크와 트래픽</div>

                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>부가 서비스</h6>
                                            <div> MS-ASP 라이선스</div>
                                            <div> 서버 구축 및 운영</div>
                                            <div> 서버 관제 서비스</div>
                                            <div> 보안 서비스</div>
                                            <div> 네트워크</div>
                                            <div> 소프트웨어</div>
                                            <div> 기타</div>
                                            <div> 무료 부가 서비스</div>
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>기술 인프라</h6>
                                            <div> 로드밸런싱 / 클러스터링</div>
                                            <div> DB 클러스터링</div>
                                            <div> 데이터 이중화 서비스</div>
                                            <div> 스토리지 시스템</div>
                                            <div> Windows DRM</div>
                                            <div> 웹 캐싱 서비스</div>
                                            <div> DB 암호화 시스템 구축</div>
                                            <div> DR(재해 복구) 시스템 구축</div>
                                            <div> IPMI 서비스</div>

                                        </div>
                                        <div className="menu-list-item boder-left">
                                            
                                            <div> &nbsp;</div>
                                            
                                            
                                        </div>
                                    </div>

                                </div>
                               
                            </div>
                        )}
                       
                    </Col>
                </Row>
                
                <Row>
                   
                    <Col md={10} sm={12}>
                        <div className="btn-moble-list">
                            <div className="menu-mobile">
                                <div className="btn-moble"
                                    
                                >
                                    {['More'].map((placement, idx) => (
                                            <OffCanvasExample key={idx} placement={placement} name={placement} />
                                    ))}
                                </div>
                                <div className="bar-logo ">
                                    <img src={"https://www.hanbiro.com/cloud/images/logo.png"} style={{width:150,height:50}}></img>
                                </div>
                                <div className="btn-moble"
                                    onClick={() => setOpenmobile(!openmobile)}
                                    aria-controls="hosting"
                                    aria-expanded={openmobile}
                                >
                                    Menu
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* <Col sm={12}>
                    {['start'].map((placement, idx) => (
                        <OffCanvasExample key={idx} placement={placement} name={placement} />
                    ))}
                    </Col> */}
                </Row>
                <Row>
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


