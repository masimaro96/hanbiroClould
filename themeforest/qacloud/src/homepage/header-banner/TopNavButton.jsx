import React, { useState, createRef } from "react";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Container, Row, Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillCaretDown, AiOutlineRight, AiOutlineMenu } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import Sidebar from "../../container/Sidebar/Sidebar";
import Sidebarmobile from "../../container/Sidebar/Sidebarmobile";
import { Link } from "react-router-dom";



class OutsideClickHandler extends React.Component {
    wrapperRef = createRef();

    static defaultProps = {
        onOutsideClick: () => { },
    };

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        console.log(this.wrapperRef.current);
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
}

function titleMenu($Kor, $Eng) {
    return (
        <>
            <span className="bar-item-Ko"> {$Kor} </span>
            <span className="bar-item-1">{$Eng}</span>
        </>
    );
}
function titlePop(link, data) {
    return (
        <div
            onClick={() => {
                window.open(link, "_blank");
            }}
        >
            <AiOutlineRight className="icon-right" />
            {data}
        </div>
    );
}


function MenuName($data, link) {
    return (
        <>
            <div
                className="mobile-list-item"
                onClick={() => {
                    window.open(link, "_self");
                }}
            >
                <text className="menu-name"> {$data} </text>
                <text>
                    <AiOutlineRight className="icon-right" />
                </text>
            </div>
        </>
    );
}
function MenuLink($data, link) {
    return (
        <>
            <Link to={link} className="mobile-link">
                <div className="mobile-list-item">
                    <text className="menu-name"> {$data} </text>
                    <text>
                        <AiOutlineRight className="icon-right" />
                    </text>
                </div>
            </Link>
        </>
    );
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
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="top"
                className="sidebar-detail"
            >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Sidebarmobile />
            </Offcanvas>
        </>
    );
}

function Groupware($data) {
    return (

        <div className={$data}>
            {titlePop(
                "https://hanbiro.com/software/groupware-price.html",
                " 가격표"
            )}
            {titlePop(
                "https://hanbiro.com/software/groupware-free-trial.html?SM=SPCMAKO",
                " 신청하기"
            )}
            {titlePop(
                "https://hanbiro.com/software/overview-video.html",
                " 한비로 그룹웨어에 대해"
            )}
            {titlePop(
                "https://hanbiro.com/software/business-email-software.html",
                " 구성 메뉴와 특징"
            )}
            {titlePop(
                "https://hanbiro.com/software/big-data-email-features.html",
                " 메일"
            )}
            {titlePop(
                "https://hanbiro.com/software/hanbiro-hr-52-hour-work-week.html",
                " HR"
            )}
            {titlePop(
                "https://hanbiro.com/software/messenger-outline.html",
                " 메신저"
            )}
            {titlePop(
                "https://hanbiro.com/software/cloud-disk-outline.html",
                " CloudDisk"
            )}
            {titlePop(
                "https://hanbiro.com/software/about-crm.html",
                " CRM"
            )}
            {titlePop(
                "https://hanbiro.com/software/groupware-features.html",
                " 모바일앱"
            )}
            {titlePop(
                "https://hanbiro.com/software/manual-video-groupware.html",
                " 동영상 도움말"
            )}
            {titlePop(
                "https://hanbiro.com/software/backup.html",
                " 외부 백업"
            )}
            {titlePop(
                "https://hanbiro.com/software/hanbiro-groupware-screenshots.html",
                " 스크린샷"
            )}
            {titlePop(
                "https://hanbiro.com/software/service-type-guide.html",
                " 서비스 안내"
            )}
            {titlePop(
                "https://hanbiro.com/software/send-a-message.html",
                " 문의하기"
            )}
        </div>

    );
}
function VoRa($data) {
    return (
        <>
            <div className={$data}>
                {titlePop(
                    "https://hanbiro.com/software/vora-email-features.html",
                    "Vora Email"
                )}
                {titlePop(
                    "https://hanbiro.com/software/vora-hr-52-hour-work-week.html",
                    "Vora HR"
                )}
                {titlePop(
                    "https://hanbiro.com/software/vora-project-new.html",
                    "Vora Project"
                )}
                {titlePop(
                    "https://hanbiro.com/software/vora-call-summary.html",
                    "Vora Call"
                )}
                {titlePop(
                    "https://hanbiro.com/software/vora-cloud-disk-outline.html",
                    "Vora CloudDisk"
                )}
            </div>
        </>
    );
}
function HostingColumn1($data) {
    return (
        <>
            <div className={$data}>
                <h6>관리 운영 서버 호스팅이란?</h6>
                {titlePop(
                    "https://hanbiro.com/management/management-outline.html",
                    "소개"
                )}
                {titlePop(
                    "https://hanbiro.com/management/management-necessity.html",
                    "필요성"
                )}
                {titlePop(
                    "https://hanbiro.com/management/management-details.html",
                    "관리 내역"
                )}
                {titlePop(
                    "https://hanbiro.com/management/management-difference.html",
                    "서버 호스팅과의 차이점"
                )}
            </div>
        </>
    );
}
function HostingColumn2($data) {
    return (
        <>
            <div className={$data}>
                <h6>관리 운영 서버 서비스 종류와 가격</h6>
                {titlePop(
                    "https://hanbiro.com/management/product-list.html",
                    "상품 구성"
                )}
                {titlePop(
                    "https://hanbiro.com/management/customer.html",
                    "관리형 코로케이션"
                )}
                {titlePop(
                    "https://hanbiro.com/management/event-manage.html",
                    "단기 임대 서버 호스팅"
                )}
                {titlePop(
                    "https://hanbiro.com/management/remote-manage.html",
                    "원격 서버 관리 운영"
                )}
                {titlePop(
                    "https://hanbiro.com/management/price-comparison.html",
                    "클라우드 서비스와의 가격 비교"
                )}
                {titlePop(
                    "https://hanbiro.com/application/index.html?Manage=mt1",
                    "신청하기"
                )}
            </div>
        </>
    );
}
function HostingColumn3($data) {
    return (
        <>
            <div className={$data}>
                <h6> 서버 호스팅</h6>
                {titlePop(
                    "https://hanbiro.com/hosting/product-list.html",
                    "상품 구성"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/customer.html",
                    "코로케이션"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/event-manage.html",
                    "단기 임대 서버 호스팅"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/price-comparison.html",
                    "클라우드 서비스와의 가격 비교"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/serverhosting-support-outline.html",
                    "유료 기술 지원"
                )}
                {titlePop(
                    "https://hanbiro.com/application/index.html?Manage=mt2",
                    "신청하기"
                )}
            </div>
        </>
    );
}

function HostingColumn4($data) {
    return (
        <>
            <div className={$data}>
                <h6>웹 호스팅</h6>
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-linux.html",
                    "리눅스"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-windows.html",
                    "윈도우"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-drm.html",
                    "DRM 스트리밍 호스팅"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-optional-service.html",
                    "부가 서비스"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-support1.html",
                    "유료 기술 지원"
                )}
                {titlePop(
                    "https://mypage.hanbiro.com/",
                    "신청하러 가기"
                )}
            </div>
        </>
    );
}
function CustomerColumn1($data) {
    return (
        <>
            <div className={$data}>
                <h6> 한비로</h6>
                {titlePop(
                    "https://hanbiro.com/hanbiro/about.html",
                    "소개"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/ceo.html",
                    "CEO 인사말"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/brand.html",
                    "Brand"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/history.html",
                    "연혁"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/organization.html",
                    "한비로 사람들"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/authentication.html",
                    "회원증 및 인증서"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/contact-us.html",
                    "오시는 길"
                )}
                {titlePop(
                    "https://blog.naver.com/hanbiro1999",
                    "블로그"
                )}
            </div>
        </>
    );
}
function CustomerColumn2($data) {
    return (
        <>
            <div className={$data}>
                <h6> 고객센터</h6>
                {titlePop(
                    "https://hanbiro.com/customer/inquiry.html",
                    "고객 문의 및 서버 점검 의뢰"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/bank.html",
                    "결제 안내"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/idc-visit.html",
                    "IDC 방문 신청"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/complain.html",
                    "불편 사항 접수"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/name-server.html",
                    "네임 서버 정보"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/set-pop-livemail.html",
                    "메일 POP / 모바일 POP 설정"
                )}
            </div>
        </>
    );
}
function NavButton() {
    const [openmobile, setOpenmobile] = useState(false);
    const [openmobileGw, setOpenmobileGw] = useState(false);
    const [openmobileVr, setOpenmobileVr] = useState(false);
    const [openmobileHo, setOpenmobileHo] = useState(false);
    const [openmobileCs, setOpenmobileCs] = useState(false);
    const [openEng, setOpenEng] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [isShownHos, setIsShownHos] = useState(false);
    const [isShownVora, setIsShownVora] = useState(false);
    const [isShownGw, setIsShownGw] = useState(false);

    function changeOnMouseOver(e) {
        setIsShown(true);
    }

    return (
        <>
            <div className="box">
                <Container className="box-container">
                    <Row>
                        <Col md={4} sm={12} className="mb-top-nav-list">
                            <div className="mb-top-nav">
                                <div className="top-nav">
                                    <div>
                                        고객 지원 안내: <span>1544 - 4755</span>{" "}
                                        <text className="gmail">• hanbiro@hanbiro.com</text>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="top-nav-right">
                                <div className="item-nav"> 원격 지원 </div>
                                <div className="item-nav"> 서버호스팅 고객</div>
                                <div className="item-nav"> 웹호스팅 고객</div>
                                <div className="item-nav"> Sectigo(COMODO) SSL</div>
                                <div className="item-nav"> 한비로 블로그</div>
                                <div
                                    className="item-nav-2"
                                    onClick={() => setOpenEng(!openEng)}
                                    aria-controls="hosting"
                                    aria-expanded={openEng}
                                >
                                    {" "}
                                    <a href="#" className="navbar-link">
                                        한국어 <AiFillCaretDown />
                                    </a>
                                    <Collapse in={openEng}>
                                        <div className="English">
                                            <div
                                                onClick={() => {
                                                    window.open("https://en.hanbiro.com/", "_blank");
                                                }}
                                            >
                                                English
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>

                <Container className="bar-home">
                    <Row className="bar-home-list">
                        <Col lg={3} md={12} sm={12} className="bar-home-list-item">
                            <div className="list-logo">
                                <div className="bar-logo">
                                    <Link to="/cloud" className="mobile-link">
                                        <img
                                            src={"https://www.hanbiro.com/cloud/images/logo.png"}
                                            style={{ height: 50 }}
                                        ></img>
                                    </Link>

                                </div>
                            </div>
                        </Col>

                        <Col className="par-bar-menu">
                            <div className="bar-menu">
                                <div className="bar-item btn-home"
                                    onClick={() => {
                                        window.open("https://en.hanbiro.com/", "_blank");
                                    }}

                                >
                                    {titleMenu("HOME", "Welcome")}
                                </div>
                                <Link to="/cloud" className="mobile-link">
                                    <div className="bar-item ">
                                        {titleMenu("클라우드", "Cloud")}
                                    </div>
                                </Link>
                                <Link to="/msa1" className="mobile-link">
                                    <div className="bar-item ">
                                        {titleMenu("마이크로서비스 개발", "Microservice")}
                                    </div>
                                </Link>
                                <OutsideClickHandler
                                    onOutsideClick={() => {
                                        setIsShownGw(false);
                                    }}
                                >
                                    <div
                                        className="bar-item"
                                        onMouseEnter={() => {
                                            setIsShownGw(true);
                                            setIsShown(false);
                                            setIsShownHos(false);
                                            setIsShownVora(false);
                                        }}
                                    >
                                        {titleMenu("그룹웨어", "Groupware")}
                                    </div>
                                </OutsideClickHandler>

                                <OutsideClickHandler
                                    onOutsideClick={() => {
                                        setIsShownVora(false);
                                    }}
                                >
                                    <div
                                        className="bar-item"
                                        onMouseEnter={() => {
                                            setIsShownVora(true);
                                            setIsShownGw(false);
                                            setIsShown(false);
                                            setIsShownHos(false);
                                        }}
                                    >
                                        {titleMenu("Vora Works", "Vora Works")}
                                    </div>
                                </OutsideClickHandler>

                                <OutsideClickHandler
                                    onOutsideClick={() => {
                                        setIsShownHos(false);
                                    }}
                                >
                                    <div
                                        className="bar-item"
                                        onMouseEnter={() => {
                                            setIsShownHos(true);
                                            setIsShownVora(false);
                                            setIsShownGw(false);
                                            setIsShown(false);
                                        }}
                                    >
                                        {titleMenu("호스팅", "Hosting")}
                                    </div>
                                </OutsideClickHandler>

                                <OutsideClickHandler
                                    onOutsideClick={() => {
                                        setIsShown(false);
                                    }}
                                >
                                    <div
                                        className="bar-item bar-item-end "
                                        onMouseEnter={() => {
                                            setIsShown(true);
                                            setIsShownHos(false);
                                            setIsShownVora(false);
                                            setIsShownGw(false);
                                        }}
                                    >
                                        {titleMenu("한비로/고객 센터", "Hanbiro/Customers")}
                                    </div>
                                </OutsideClickHandler>
                            </div>
                        </Col>
                    </Row>

                    {isShownGw && (
                        <Row className="bar-home-list-1">
                            <Col md={6} sm={6}>
                                {isShownGw && (
                                    <div >
                                        {Groupware("groupware")}
                                    </div>
                                )}

                            </Col>
                            <Col md={6} sm={6}>
                            </Col>

                        </Row>
                    )}
                    {isShownVora && (
                        <Row className="bar-home-list-1">
                            <Col md={6} sm={6}>
                                {isShownVora && (
                                    <div >
                                        {Groupware("vora")}
                                    </div>
                                )}

                            </Col>
                            <Col md={6} sm={6}>
                            </Col>

                        </Row>
                    )}
                    {isShown && (
                        <Row className="bar-home-list-hos">
                            <Col md={6} sm={6} className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {CustomerColumn1("menu-list-product-item")}
                                    </div>

                                </div>
                            </Col>
                            <Col md={6} sm={6} >
                                <div className="menu-list-product-left">
                                    <div >
                                        {CustomerColumn2("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )}
                    {isShownHos && (
                        <Row className="bar-home-list-hos">
                            <Col md={3} sm={3} className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn1("menu-list-product-item")}
                                    </div>

                                </div>
                            </Col>
                            <Col md={3} sm={3} className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn2("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} sm={3} className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn3("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} sm={3} >
                                <div className="menu-list-product-left">
                                    <div >
                                        {HostingColumn4("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )}

                </Container>
                <>
                    
                    <div className="btn-moble-list">
                        <div className="btn-moble-item">
                            <div className="btn-moble-sever">
                                {[""].map((placement, idx) => (
                                    <OffCanvasExample
                                        key={idx}
                                        placement={placement}
                                        name={placement}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <Link to="/cloud" className="mobile-link">
                                <img
                                    src={"https://www.hanbiro.com/cloud/images/logo.png"}
                                    style={{ height: 50 }}
                                ></img>
                            </Link>
                        </div>
                        <div className="btn-moble-item">
                            <div className="btn-moble-more"
                                onClick={() => setOpenmobile(!openmobile)}
                                aria-controls="hosting"
                                aria-expanded={openmobile}
                            >
                                <CiCircleMore />
                            </div>
                        </div>
                    </div>
                    <div className="mobi-product-list">
                        <Collapse in={openmobile}>
                            <div id="hanbiro-customer" className="mobile-list">
                                {MenuName("HOME", "https://en.hanbiro.com/")}

                                {MenuLink("클라우드", "/cloud")}

                                {MenuLink("마이크로서비스 개발", "/msa1")}

                                <div
                                    className="mobile-list-item"
                                    onClick={() => setOpenmobileGw(!openmobileGw)}
                                    aria-controls="hosting"
                                    aria-expanded={openmobileGw}
                                >
                                    <text className="menu-name"> 그룹웨어 </text>
                                    <text>
                                        <AiOutlineRight className="icon-right" />
                                    </text>
                                </div>
                                <div >
                                    <Collapse in={openmobileGw}>
                                        <div >
                                            {Groupware("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div
                                    className="mobile-list-item"
                                    onClick={() => setOpenmobileVr(!openmobileVr)}
                                    aria-controls="hosting"
                                    aria-expanded={openmobileVr}
                                >
                                    <text className="menu-name"> Vora Works </text>
                                    <text>
                                        <AiOutlineRight className="icon-right" />
                                    </text>
                                </div>
                                <div >
                                    <Collapse in={openmobileVr}>
                                        <div >
                                            {VoRa("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div
                                    className="mobile-list-item"
                                    onClick={() => setOpenmobileHo(!openmobileHo)}
                                    aria-controls="hosting"
                                    aria-expanded={openmobileHo}
                                >
                                    <text className="menu-name"> 호스팅 </text>
                                    <text>
                                        <AiOutlineRight className="icon-right" />
                                    </text>
                                </div>
                                <div >
                                    <Collapse in={openmobileHo}>
                                        <div >
                                            {HostingColumn1("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div >
                                    <Collapse in={openmobileHo}>
                                        <div >
                                            {HostingColumn2("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div >
                                    <Collapse in={openmobileHo}>
                                        <div >
                                            {HostingColumn3("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div >
                                    <Collapse in={openmobileHo}>
                                        <div >
                                            {HostingColumn4("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div
                                    className="mobile-list-item"
                                    onClick={() => setOpenmobileCs(!openmobileCs)}
                                    aria-controls="hosting"
                                    aria-expanded={openmobileCs}
                                >
                                    <text className="menu-name"> 한비로/고객 센터 </text>
                                    <text>
                                        <AiOutlineRight className="icon-right" />
                                    </text>
                                </div>
                                <div >
                                    <Collapse in={openmobileCs}>
                                        <div >
                                            {CustomerColumn1("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div >
                                    <Collapse in={openmobileCs}>
                                        <div >
                                            {CustomerColumn2("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>

                            </div>
                        </Collapse>
                    </div>

                </>
            </div>
        </>
    );
}

export default NavButton;
