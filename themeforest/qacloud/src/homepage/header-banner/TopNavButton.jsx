import React, { useState, createRef } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Container, Row, Col} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { AiFillCaretDown,AiOutlineRight ,AiOutlineMenu} from 'react-icons/ai';
import {CiCircleMore } from 'react-icons/ci';
import Sidebar from '../../container/Sidebar/Sidebar';
import Ngoctesst from '../../container/Sidebar/Ngoctesst';



class OutsideClickHandler extends React.Component {
  wrapperRef = createRef();

  static defaultProps = {
    onOutsideClick: () => {}
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.props.onOutsideClick();
    }
  };

  render() {
    const { children } = this.props;

    return <div ref={this.wrapperRef}>{children}</div>;
  }
};





function titleMenu($Kor,$Eng){
    return(
        <>
            <span> {$Kor} </span> <br/>
            <span className="bar-item-1">{$Eng}</span>
        </>
    )
}
function titlePop($data){
    return(
        <>
            <div > <AiOutlineRight className="icon-right"/>{$data}</div>
        </>
    )
}
function MenuName($data){
    return(
        <>
            <div className="mobile-list-item">
            <text  className='menu-name'> {$data} </text>
            <text><AiOutlineRight className="icon-right"/></text>
</div>
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
          {name} <AiOutlineMenu />
        </div>
        <Offcanvas show={show} onHide={handleClose} {...props} className='sidebar-detail'>
          <Offcanvas.Header closeButton >
            
          </Offcanvas.Header>
          
          
        </Offcanvas>
      </>
    );
  }

function NavButton() {
  
  const [openmobile, setOpenmobile] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isShownHos, setIsShownHos] = useState(false);
  const [isShownVora, setIsShownVora] = useState(false);
  const [isShownGw, setIsShownGw] = useState(false);

  function changeOnMouseOver(e){
    setIsShown(true);
    
  }

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
                            <div className="item-nav"> 원격 지원 </div>
                            <div className="item-nav"> 서버호스팅 고객</div>
                            <div className="item-nav"> 웹호스팅 고객</div>
                            <div className="item-nav"> Sectigo(COMODO) SSL</div>
                            <div className="item-nav"> 한비로 블로그</div>
                            <div className="item-nav-2"> 한국어 <AiFillCaretDown /></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Container className='bar-home'>
                <Row className="bar-home-list">
                    <Col md={3} sm={12}>
                        <div className="list-logo">
                            <div className="bar-logo ">
                                <img src={"https://www.hanbiro.com/cloud/images/logo.png"} style={{width:200,height:50}}></img>
                            </div>
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
                            <div className="bar-item "
                            >   
                                {titleMenu("마이크로서비스 개발","Microservice")}
                            </div>
                        
                           
                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    setIsShownGw(false)
                                }}
                                >
                                   <div className="bar-item"
                                    onMouseEnter={() => {
                                        setIsShownGw(true);
                                        setIsShown(false)
                                        setIsShownHos(false)
                                        setIsShownVora(false)
                                    }
                                }
                                >   
                                    {titleMenu("그룹웨어","Groupware")}
                                </div>
                            </OutsideClickHandler>
                        
                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    setIsShownVora(false)
                                }}
                                >
                                   <div className="bar-item"
                                    onMouseEnter={() => {
                                    setIsShownVora(true);
                                    setIsShownGw(false);
                                    setIsShown(false)
                                    setIsShownHos(false)
                                    
                                }
                                }
                                 >   
                                    {titleMenu("Vora Works","Vora Works")}
                                </div>
                            </OutsideClickHandler>
                        
                           
                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    setIsShownHos(false)
                                }}
                                >
                                   <div className="bar-item"
                                    onMouseEnter={() => {
                                    setIsShownHos(true);
                                    setIsShownVora(false);
                                    setIsShownGw(false);
                                    setIsShown(false)
                                    
                                }
                                }
                                 >   
                                    {titleMenu("호스팅","Hosting")}
                                </div>
                            </OutsideClickHandler>

                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    setIsShown(false)
                                }}
                                >
                                  <div className="bar-item bar-item-end "
                                    onMouseEnter={() => {
                                    setIsShown(true);
                                    setIsShownHos(false);
                                    setIsShownVora(false);
                                    setIsShownGw(false);
                                   
                                }
                                }
                                 >   
                                   {titleMenu("한비로/고객 센터","Hanbiro/Customers")} 
                                </div>
                            </OutsideClickHandler>

                            
                        </div>
                    </Col>
                    <Col md={12} sm={12}>
                        {isShownGw && (
                        <div className="groupware">
                            
                            {titlePop (" 가격표")}
                            {titlePop (" 신청하기")}
                            {titlePop (" 한비로 그룹웨어에 대해")}
                            {titlePop (" 구성 메뉴와 특징")}
                            {titlePop (" 메일")}
                            {titlePop (" HR")}
                            {titlePop (" 메신저")}
                            {titlePop (" CloudDisk")}
                            {titlePop (" CRM")}
                            {titlePop (" 모바일앱")}
                            {titlePop (" 동영상 도움말")}
                            {titlePop (" 외부 백업")}
                            {titlePop (" 스크린샷")}
                            {titlePop (" 서비스 안내")}
                            {titlePop (" 문의하기")}
                               

                        </div>
                        )}
                        {isShownVora && (
                        <div className="vora">
                            
                            {titlePop ("Vora Email")}
                            {titlePop ("Vora HR")}
                            {titlePop ("Vora Project")}
                            {titlePop ("Vora Call")}
                            {titlePop ("Vora CloudDisk")}
                               

                        </div>
                        )}

                        {isShown && (
                            <div className="menu">
                                <div  className="menu-list ">
                                    <div className="product-list">
                                        <div className="menu-list-item boder-left">
                                            <h6 > 한비로</h6>
                                            {titlePop ("소개")}
                                            {titlePop ("CEO 인사말")}
                                            {titlePop ("Brand")}
                                            {titlePop ("연혁")}
                                            {titlePop ("한비로 사람들")}
                                            {titlePop ("회원증 및 인증서")}
                                            {titlePop ("오시는 길")}
                                            {titlePop ("블로그")}
                                        </div>
                                        <div className="menu-list-item">
                                            <h6>  고객센터</h6>
                                            {titlePop ("고객 문의 및 서버 점검 의뢰")}
                                            {titlePop ("결제 안내")}
                                            {titlePop ("IDC 방문 신청")}
                                            {titlePop ("불편 사항 접수")}
                                            {titlePop ("네임 서버 정보")}
                                            {titlePop ("메일 POP / 모바일 POP 설정")}
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
                                            {titlePop ("소개")}
                                            {titlePop ("필요성")}
                                            {titlePop ("관리 내역")}
                                            {titlePop ("서버 호스팅과의 차이점")}
                                            
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>관리 운영 서버 서비스 종류와 가격</h6>
                                            {titlePop ("상품 구성")}
                                            {titlePop ("관리형 코로케이션")}
                                            {titlePop ("단기 임대 서버 호스팅")}
                                            {titlePop ("원격 서버 관리 운영")}
                                            {titlePop ("클라우드 서비스와의 가격 비교")}
                                            {titlePop ("신청하기")}

                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6> 서버 호스팅</h6>
                                            {titlePop ("상품 구성")}
                                            {titlePop ("코로케이션")}
                                            {titlePop ("단기 임대 서버 호스팅")}
                                            {titlePop ("클라우드 서비스와의 가격 비교")}
                                            {titlePop ("유료 기술 지원")}
                                            {titlePop ("신청하기")}
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>웹 호스팅</h6>
                                            {titlePop ("리눅스")}
                                            {titlePop ("윈도우")}
                                            {titlePop ("DRM 스트리밍 호스팅")}
                                            {titlePop ("부가 서비스")}
                                            {titlePop ("유료 기술 지원")}
                                            {titlePop ("신청하러 가기")}

                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>베트남 호스팅</h6>
                                            {titlePop ("상품 구성")}
                                            {titlePop ("IDC 소개")}
                                            {titlePop ("네트워크 구성")}
                                            {titlePop ("신청하기")}
                                            {titlePop ("베트남 사무실")}
                                            
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="menu-list-item boder-left">
                                            <h6>DDos</h6>
                                            {titlePop ("한비로 IPS 소개")}
                                            {titlePop ("방어 능력")}
                                            {titlePop ("공격 유형과 차단")}
                                            {titlePop ("고객 관리자 페이지")}
                                            
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>네트워크 구성도 및 트래픽</h6>
                                            {titlePop ("네트워크 구성도")}
                                            {titlePop ("네트워크와 트래픽")}

                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>부가 서비스</h6>
                                            {titlePop ("MS-ASP 라이선스")}
                                            {titlePop ("서버 구축 및 운영")}
                                            {titlePop ("서버 관제 서비스")}
                                            {titlePop ("보안 서비스")}
                                            {titlePop ("네트워크")}
                                            {titlePop ("소프트웨어")}
                                            {titlePop ("기타")}
                                            {titlePop ("무료 부가 서비스")}
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>기술 인프라</h6>
                                            {titlePop ("로드밸런싱 / 클러스터링")}
                                            {titlePop ("DB 클러스터링")}
                                            {titlePop ("데이터 이중화 서비스")}
                                            {titlePop ("스토리지 시스템")}
                                            {titlePop ("Windows DRM")}
                                            {titlePop ("웹 캐싱 서비스")}
                                            {titlePop ("DB 암호화 시스템 구축")}
                                            {titlePop ("DR(재해 복구) 시스템 구축")}
                                            {titlePop ("IPMI 서비스")}

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
                                    {[''].map((placement, idx) => (
                                            <OffCanvasExample key={idx} placement={placement} name={placement} />
                                    ))}
                                </div>
                                <div className="bar-logo ">
                                    <img src={"https://www.hanbiro.com/cloud/images/logo.png"} style={{width:150,height:50}}></img>
                                </div>
                                <div className="btn-moble-2"
                                    onClick={() => setOpenmobile(!openmobile)}
                                    aria-controls="hosting"
                                    aria-expanded={openmobile}
                                >
                                    <CiCircleMore />
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <Collapse in={openmobile} >
                            <div id="hanbiro-customer" className="mobile-list">
                                {MenuName ("HOME")}

                                {MenuName ("클라우드")}
                                
                                {MenuName ("마이크로서비스 개발")}
                               
                                {MenuName ("그룹웨어")}
                               
                                {MenuName ("Vora Works")}
                               
                                {MenuName ("호스팅")}
                               
                                {MenuName ("한비로/고객 센터") }
                                
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


