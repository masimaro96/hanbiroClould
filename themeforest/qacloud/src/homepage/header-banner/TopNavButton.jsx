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
function titlePop($link,$data){
    return(
        <>
           
            <div ><a href={$link}> <AiOutlineRight className="icon-right"/>{$data}</a></div>
            
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
          <Ngoctesst />
          
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
                    <Col md={9} sm={12} >
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
                            
                            {titlePop ("https://hanbiro.com/software/groupware-price.html"," 가격표")}
                            {titlePop ("https://hanbiro.com/software/groupware-free-trial.html?SM=SPCMAKO"," 신청하기")}
                            {titlePop ("https://hanbiro.com/software/overview-video.html"," 한비로 그룹웨어에 대해")}
                            {titlePop ("https://hanbiro.com/software/business-email-software.html"," 구성 메뉴와 특징")}
                            {titlePop ("https://hanbiro.com/software/big-data-email-features.html"," 메일")}
                            {titlePop ("https://hanbiro.com/software/hanbiro-hr-52-hour-work-week.html"," HR")}
                            {titlePop ("https://hanbiro.com/software/messenger-outline.html"," 메신저")}
                            {titlePop ("https://hanbiro.com/software/cloud-disk-outline.html"," CloudDisk")}
                            {titlePop ("https://hanbiro.com/software/about-crm.html"," CRM")}
                            {titlePop ("https://hanbiro.com/software/groupware-features.html"," 모바일앱")}
                            {titlePop ("https://hanbiro.com/software/manual-video-groupware.html"," 동영상 도움말")}
                            {titlePop ("https://hanbiro.com/software/backup.html"," 외부 백업")}
                            {titlePop ("https://hanbiro.com/software/hanbiro-groupware-screenshots.html"," 스크린샷")}
                            {titlePop ("https://hanbiro.com/software/service-type-guide.html"," 서비스 안내")}
                            {titlePop ("https://hanbiro.com/software/send-a-message.html"," 문의하기")}
                               

                        </div>
                        )}
                        {isShownVora && (
                        <div className="vora">
                            
                            {titlePop ("https://hanbiro.com/software/vora-email-features.html","Vora Email")}
                            {titlePop ("https://hanbiro.com/software/vora-hr-52-hour-work-week.html","Vora HR")}
                            {titlePop ("https://hanbiro.com/software/vora-project-new.html","Vora Project")}
                            {titlePop ("https://hanbiro.com/software/vora-call-summary.html","Vora Call")}
                            {titlePop ("https://hanbiro.com/software/vora-cloud-disk-outline.html","Vora CloudDisk")}
                               

                        </div>
                        )}

                        {isShown && (
                            <div className="menu">
                                <div  className="menu-list ">
                                    <div className="product-list">
                                        <div className="menu-list-item boder-left">
                                            <h6 > 한비로</h6>
                                            {titlePop ("https://hanbiro.com/hanbiro/about.html","소개")}
                                            {titlePop ("https://hanbiro.com/hanbiro/ceo.html","CEO 인사말")}
                                            {titlePop ("https://hanbiro.com/hanbiro/brand.html","Brand")}
                                            {titlePop ("https://hanbiro.com/hanbiro/history.html","연혁")}
                                            {titlePop ("https://hanbiro.com/hanbiro/organization.html","한비로 사람들")}
                                            {titlePop ("https://hanbiro.com/hanbiro/authentication.html","회원증 및 인증서")}
                                            {titlePop ("https://hanbiro.com/hanbiro/contact-us.html","오시는 길")}
                                            {titlePop ("https://blog.naver.com/hanbiro1999","블로그")}
                                        </div>
                                        <div className="menu-list-item">
                                            <h6>  고객센터</h6>
                                            {titlePop ("https://hanbiro.com/customer/inquiry.html","고객 문의 및 서버 점검 의뢰")}
                                            {titlePop ("https://hanbiro.com/customer/bank.html","결제 안내")}
                                            {titlePop ("https://hanbiro.com/customer/idc-visit.html","IDC 방문 신청")}
                                            {titlePop ("https://hanbiro.com/customer/complain.html","불편 사항 접수")}
                                            {titlePop ("https://hanbiro.com/customer/name-server.html","네임 서버 정보")}
                                            {titlePop ("https://hanbiro.com/customer/set-pop-livemail.html","메일 POP / 모바일 POP 설정")}
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
                                            {titlePop ("https://hanbiro.com/management/management-outline.html","소개")}
                                            {titlePop ("https://hanbiro.com/management/management-necessity.html","필요성")}
                                            {titlePop ("https://hanbiro.com/management/management-details.html","관리 내역")}
                                            {titlePop ("https://hanbiro.com/management/management-difference.html","서버 호스팅과의 차이점")}
                                            
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>관리 운영 서버 서비스 종류와 가격</h6>
                                            {titlePop ("https://hanbiro.com/management/product-list.html","상품 구성")}
                                            {titlePop ("https://hanbiro.com/management/customer.html","관리형 코로케이션")}
                                            {titlePop ("https://hanbiro.com/management/event-manage.html","단기 임대 서버 호스팅")}
                                            {titlePop ("https://hanbiro.com/management/remote-manage.html","원격 서버 관리 운영")}
                                            {titlePop ("https://hanbiro.com/management/price-comparison.html","클라우드 서비스와의 가격 비교")}
                                            {titlePop ("https://hanbiro.com/application/index.html?Manage=mt1","신청하기")}

                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6> 서버 호스팅</h6>
                                            {titlePop ("https://hanbiro.com/hosting/product-list.html","상품 구성")}
                                            {titlePop ("https://hanbiro.com/hosting/customer.html","코로케이션")}
                                            {titlePop ("https://hanbiro.com/hosting/event-manage.html","단기 임대 서버 호스팅")}
                                            {titlePop ("https://hanbiro.com/hosting/price-comparison.html","클라우드 서비스와의 가격 비교")}
                                            {titlePop ("https://hanbiro.com/hosting/serverhosting-support-outline.html","유료 기술 지원")}
                                            {titlePop ("https://hanbiro.com/application/index.html?Manage=mt2","신청하기")}
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>웹 호스팅</h6>
                                            {titlePop ("https://hanbiro.com/hosting/webhosting-linux.html","리눅스")}
                                            {titlePop ("https://hanbiro.com/hosting/webhosting-windows.html","윈도우")}
                                            {titlePop ("https://hanbiro.com/hosting/webhosting-drm.html","DRM 스트리밍 호스팅")}
                                            {titlePop ("https://hanbiro.com/hosting/webhosting-optional-service.html","부가 서비스")}
                                            {titlePop ("https://hanbiro.com/hosting/webhosting-support1.html","유료 기술 지원")}
                                            {titlePop ("https://mypage.hanbiro.com/","신청하러 가기")}

                                        </div>
                                        <div className="menu-list-item ">
                                            <h6>베트남 호스팅</h6>
                                            {titlePop ("https://hanbiro.com/overseas/vietnam-product-list.html","상품 구성")}
                                            {titlePop ("https://hanbiro.com/overseas/vietnam-idc.html","IDC 소개")}
                                            {titlePop ("https://hanbiro.com/overseas/vietnam-network.html","네트워크 구성")}
                                            {titlePop ("https://hanbiro.com/application/index.html?Manage=mt4&Country=vt","신청하기")}
                                            {titlePop ("https://hanbiro.com/overseas/vietnam-office.html","베트남 사무실")}
                                            
                                        </div>
                                    </div>
                                    <div className="product-list">
                                        <div className="menu-list-item boder-left">
                                            <h6>DDos</h6>
                                            {titlePop ("https://hanbiro.com/hosting/ddos-outline.html","한비로 IPS 소개")}
                                            {titlePop ("https://hanbiro.com/hosting/ddos-defend.html","방어 능력")}
                                            {titlePop ("https://hanbiro.com/hosting/ddos-attack-type.html","공격 유형과 차단")}
                                            {titlePop ("https://hanbiro.com/hosting/ddos-admin.html","고객 관리자 페이지")}
                                            
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>네트워크 구성도 및 트래픽</h6>
                                            {titlePop ("https://hanbiro.com/management/network-component.html","네트워크 구성도")}
                                            {titlePop ("https://hanbiro.com/management/network-traffic.html","네트워크와 트래픽")}

                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>부가 서비스</h6>
                                            {titlePop ("https://hanbiro.com/management/ms.html","MS-ASP 라이선스")}
                                            {titlePop ("https://hanbiro.com/management/backup.html","서버 구축 및 운영")}
                                            {titlePop ("https://hanbiro.com/management/sys-monitor.html","서버 관제 서비스")}
                                            {titlePop ("https://hanbiro.com/management/security.html","보안 서비스")}
                                            {titlePop ("https://hanbiro.com/management/vpn.html","네트워크")}
                                            {titlePop ("https://hanbiro.com/management/groupware.html","소프트웨어")}
                                            {titlePop ("https://en.hanbiro.com/","기타")}
                                            {titlePop ("https://hanbiro.com/management/free-optional-services.html","무료 부가 서비스")}
                                        </div>
                                        <div className="menu-list-item boder-left">
                                            <h6>기술 인프라</h6>
                                            {titlePop ("https://hanbiro.com/management/clustering-type.html","로드밸런싱 / 클러스터링")}
                                            {titlePop ("https://hanbiro.com/management/mysql-cluster.html","DB 클러스터링")}
                                            {titlePop ("https://hanbiro.com/management/data-dual-processor.html","데이터 이중화 서비스")}
                                            {titlePop ("https://hanbiro.com/management/iscsi-storage.html","스토리지 시스템")}
                                            {titlePop ("https://hanbiro.com/management/drm.html","Windows DRM")}
                                            {titlePop ("https://hanbiro.com/management/webcaching.html","웹 캐싱 서비스")}
                                            {titlePop ("https://hanbiro.com/management/db-secure.html","DB 암호화 시스템 구축")}
                                            {titlePop ("https://hanbiro.com/management/recovery.html","DR(재해 복구) 시스템 구축")}
                                            {titlePop ("https://hanbiro.com/management/recovery.html","IPMI 서비스")}

                                        </div>
                                        <div className="menu-list-item ">
                                            
                                            <div> &nbsp;</div>
                                            
                                            
                                        </div>
                                    </div>

                                </div>
                               
                            </div>
                        )}
                       
                    </Col>
                </Row>
                
                <Row className="navbar">
                   
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


