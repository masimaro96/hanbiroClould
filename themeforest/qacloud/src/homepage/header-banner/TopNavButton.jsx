import React, { useState, createRef } from "react";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Container, Row, Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillCaretDown, AiOutlineRight, AiOutlineMenu, AiOutlineInfoCircle, AiFillApple, AiOutlineClose } from "react-icons/ai";
import { ImDownload3 } from "react-icons/im";
import { BsWindows } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { IoMdOpen } from "react-icons/io";
import Sidebar from "../../container/Sidebar/Sidebar";
import Sidebarmobile from "../../container/Sidebar/Sidebarmobile";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




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
        <div className="title-menu">
            {/* <span className="bar-item-Ko"> {$Kor} </span> */}
            {$Kor}
            <span className="bar-item-1">{$Eng}</span>
        </div>
    );
}
function titlePop(link, data, mbcss, icon) {
    return (
        <div
            className={mbcss}
            onClick={() => {
                window.open(link, "_self");
            }}
        >
            <AiOutlineRight className="icon-right" />
            {data} {icon }
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
                " ?????????"
            )}
            {titlePop(
                "https://hanbiro.com/software/groupware-free-trial.html?SM=SPCMAKO",
                " ????????????"
            )}
            {titlePop(
                "https://hanbiro.com/software/overview-video.html",
                " ????????? ??????????????? ??????"
            )}
            {titlePop(
                "https://hanbiro.com/software/business-email-software.html",
                " ?????? ????????? ??????"
            )}
            {titlePop(
                "https://hanbiro.com/software/big-data-email-features.html",
                " ??????"
            )}
            {titlePop(
                "https://hanbiro.com/software/hanbiro-hr-52-hour-work-week.html",
                " HR"
            )}
            {titlePop(
                "https://hanbiro.com/software/messenger-outline.html",
                " ?????????"
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
                " ????????????"
            )}
            {titlePop(
                "https://hanbiro.com/software/manual-video-groupware.html",
                " ????????? ?????????"
            )}
            {titlePop(
                "https://hanbiro.com/software/backup.html",
                " ?????? ??????"
            )}
            {titlePop(
                "https://hanbiro.com/software/hanbiro-groupware-screenshots.html",
                " ????????????"
            )}
            {titlePop(
                "https://hanbiro.com/software/service-type-guide.html",
                " ????????? ??????"
            )}
            {titlePop(
                "https://hanbiro.com/software/send-a-message.html",
                " ????????????",
                "mobile-menu-list"
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
                    "Vora CloudDisk",
                    "mobile-menu-list"
                )}
            </div>
        </>
    );
}
function HostingColumn1($data) {
    return (
        <>
            <div className={$data}>
                <h3>?????? ?????? ?????? ????????????????</h3>
                {titlePop(
                    "https://hanbiro.com/management/management-outline.html",
                    "??????"
                )}
                {titlePop(
                    "https://hanbiro.com/management/management-necessity.html",
                    "?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/management/management-details.html",
                    "?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/management/management-difference.html",
                    "?????? ??????????????? ?????????",
                    "mobile-menu-list"
                )}
            </div>
        </>
    );
}
function HostingColumn2($data) {
    return (
        <>
            <div className={$data}>
                <h3>?????? ?????? ?????? ????????? ????????? ??????</h3>
                {titlePop(
                    "https://hanbiro.com/management/product-list.html",
                    "?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/management/customer.html",
                    "????????? ???????????????"
                )}
                {titlePop(
                    "https://hanbiro.com/management/event-manage.html",
                    "?????? ?????? ?????? ?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/management/remote-manage.html",
                    "?????? ?????? ?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/management/price-comparison.html",
                    "???????????? ??????????????? ?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/application/index.html?Manage=mt1",
                    "????????????",
                    "mobile-menu-list"
                )}
            </div>
        </>
    );
}
function HostingColumn3($data) {
    return (
        <>
            <div className={$data}>
                <h3> ?????? ?????????</h3>
                {titlePop(
                    "https://hanbiro.com/hosting/product-list.html",
                    "?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/customer.html",
                    "???????????????"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/event-manage.html",
                    "?????? ?????? ?????? ?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/price-comparison.html",
                    "???????????? ??????????????? ?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/serverhosting-support-outline.html",
                    "?????? ?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/application/index.html?Manage=mt2",
                    "????????????",
                    "mobile-menu-list"
                )}
            </div>
        </>
    );
}

function HostingColumn4($data) {
    return (
        <>
            <div className={$data}>
                <h3>??? ?????????</h3>
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-linux.html",
                    "?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-windows.html",
                    "?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-drm.html",
                    "DRM ???????????? ?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-optional-service.html",
                    "?????? ?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/hosting/webhosting-support1.html",
                    "?????? ?????? ??????"
                )}
                {titlePop(
                    "https://mypage.hanbiro.com/",
                    "???????????? ?????? ",
                    "mobile-menu-list",
                    <IoMdOpen className="icon-open" />
                )}
            </div>
        </>
    );
}
function HostingColumn5($data) {
    return (
        <>
            <div className={$data}>
                <h3>????????? ?????????</h3>
                {titlePop(
                    "https://www.hanbiro.com/overseas/vietnam-product-list.html",
                    " ?????? ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/overseas/vietnam-idc.html",
                    " IDC ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/overseas/vietnam-network.html",
                    " ???????????? ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/application/index.html?Manage=mt4&Country=vt",
                    " ????????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/overseas/vietnam-office.html",
                    " ????????? ?????????",
                    "mobile-menu-list"
                )}

            </div>
        </>
    );
}
function HostingColumn6($data) {
    return (
        <>
            <div className={$data}>
                <h3>DDos</h3>
                {titlePop(
                    "https://www.hanbiro.com/hosting/ddos-outline.html",
                    " ????????? IPS ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/hosting/ddos-defend.html",
                    " ?????? ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/hosting/ddos-attack-type.html",
                    " ?????? ????????? ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/hosting/ddos-admin.html",
                    " ?????? ????????? ?????????",
                    "mobile-menu-list"
                )}


            </div>
        </>
    );
}
function HostingColumn7($data) {
    return (
        <>
            <div className={$data}>
                <h3>???????????? ????????? ??? ?????????</h3>
                {titlePop(
                    "https://www.hanbiro.com/management/network-component.html",
                    " ???????????? ?????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/network-traffic.html",
                    " ??????????????? ?????????",
                    "mobile-menu-list"
                )}


            </div>
        </>
    );
}
function HostingColumn8($data) {
    return (
        <>
            <div className={$data}>
                <h3>?????? ?????????</h3>
                {titlePop(
                    "https://www.hanbiro.com/management/ms.html",
                    " MS-ASP ????????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/backup.html",
                    " ?????? ?????? ??? ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/sys-monitor.html",
                    " ?????? ?????? ?????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/security.html",
                    " ?????? ?????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/vpn.html",
                    " ????????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/groupware.html",
                    " ???????????????"
                )}
                {titlePop(
                    "https://en.hanbiro.com/",
                    " ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/free-optional-services.html",
                    " ?????? ?????? ?????????",
                    "mobile-menu-list"
                )}


            </div>
        </>
    );
}
function HostingColumn9($data) {
    return (
        <>
            <div className={$data}>
                <h3>?????? ?????????</h3>
                {titlePop(
                    "https://www.hanbiro.com/management/clustering-type.html",
                    " ??????????????? / ???????????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/mysql-cluster.html",
                    " DB ???????????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/data-dual-processor.html",
                    " ????????? ????????? ?????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/iscsi-storage.html",
                    " ???????????? ?????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/drm.html",
                    " Windows DRM"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/webcaching.html",
                    " ??? ?????? ?????????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/db-secure.html",
                    " DB ????????? ????????? ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/recovery.html",
                    " DR(?????? ??????) ????????? ??????"
                )}
                {titlePop(
                    "https://www.hanbiro.com/management/ipmi.html",
                    " IPMI ?????????",
                    "mobile-menu-list"
                )}

            </div>
        </>
    );
}
function CustomerColumn1($data) {
    return (
        <>
            <div className={$data}>
                <h3> ?????????</h3>
                {titlePop(
                    "https://hanbiro.com/hanbiro/about.html",
                    "??????"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/ceo.html",
                    "CEO ?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/brand.html",
                    "Brand"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/history.html",
                    "??????"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/organization.html",
                    "????????? ?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/authentication.html",
                    "????????? ??? ?????????"
                )}
                {titlePop(
                    "https://hanbiro.com/hanbiro/contact-us.html",
                    "????????? ???"
                )}
                {titlePop(
                    "https://blog.naver.com/hanbiro1999",
                    "?????????",
                    "mobile-menu-list", 
                    <IoMdOpen className="icon-open" />

                )}
            </div>
        </>
    );
}
function CustomerColumn2($data) {
    return (
        <>
            <div className={$data}>
                <h3> ????????????</h3>
                {titlePop(
                    "https://hanbiro.com/customer/inquiry.html",
                    "?????? ?????? ??? ?????? ?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/bank.html",
                    "?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/idc-visit.html",
                    "IDC ?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/complain.html",
                    "?????? ?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/name-server.html",
                    "?????? ?????? ??????"
                )}
                {titlePop(
                    "https://hanbiro.com/customer/set-pop-livemail.html",
                    "?????? POP / ????????? POP ??????",
                    "mobile-menu-list"
                )}
            </div>
        </>
    );
}
const customCloseButton = (
    <button>aaa</button>
)
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton={customCloseButton}>
                <Modal.Title id="contained-modal-title-vcenter">
                    ?????? ?????? ????????? ??????
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="profile" title="?????? ?????? ??????">
                        <div className="hb-modal-list">
                            <div className="hb-modal-icon"><AiOutlineInfoCircle /> </div> <div className="hb-modal-text">????????? ?????? ??????</div>
                        </div>
                        <ol className="hb-modal-menu">
                            <li>????????? ????????? ?????? ???????????? ??????????????? ????????? ????????? ??????????????? ?????? ????????????.
                                <a href="/HanbiroRemoteControl.exe" className="hb-link">
                                    <div className="hb-modal-download">
                                        <div className="hb-modal-icon-down"><ImDownload3 /> </div> <div className="hb-modal-download-text"> ?????? ?????? ???????????? ????????????</div>
                                    </div>
                                </a>
                            </li>
                            <li>???????????? ????????? ???????????? ????????? ???????????????.
                                <div className="hb-modal-line-1">
                                    <div className="hb-modal-line-item">
                                        <img
                                            src={"https://www.hanbiro.com/images/remote-info-img01.gif"}
                                            style={{ height: 71 }}
                                        ></img>
                                    </div>
                                    <div className="hb-modal-line-item-1">
                                        <img
                                            src={"https://www.hanbiro.com/images/remote-info-img02.gif"}
                                            style={{ height: 71 }}
                                        ></img>
                                    </div>
                                </div>
                            </li>
                            <li>????????? ???????????? ???????????? ??????????????? ???????????? ????????? ???????????????.
                                <div className="hb-modal-line-item-2">
                                    <img
                                        src={"https://www.hanbiro.com/images/remote-info-img03.gif"}
                                        style={{ height: 166 }}
                                    ></img>
                                </div>

                            </li>
                        </ol>
                    </Tab>
                    <Tab eventKey="home" title="?????? ?????? ??????">
                        <div className="hb-modal-list">
                            <div className="hb-modal-icon"><AiOutlineInfoCircle /> </div> <div className="hb-modal-text">????????? ?????? ??????</div>
                        </div>


                        <ol className="hb-modal-menu">
                            <li>????????? ????????? ?????? ???????????? ??????????????? ????????? ????????? ??????????????? ?????? ????????????.
                                <div className="hb-modal-item-list">
                                    <a href="/files/RemoteClient.dmg" className="hb-link">
                                        <div className="hb-modal-download-page">
                                            <div className="hb-modal-icon-down-win"><AiFillApple /> </div>
                                            <div className="hb-modal-download-text">  Mac??? ?????? ?????? ???????????? ???????????? </div>
                                            <div className="hb-modal-icon-down"><ImDownload3 /> </div>
                                        </div>
                                    </a>
                                    <a href="/files/RemoteClient.exe" className="hb-link">
                                        <div className="hb-modal-download-page-1">
                                            <div className="hb-modal-icon-down"><BsWindows /> </div>
                                            <div className="hb-modal-download-text">  Windows??? ?????? ?????? ???????????? ???????????? </div>
                                            <div className="hb-modal-icon-down"><ImDownload3 /> </div>
                                        </div>
                                    </a>
                                </div>

                            </li>
                            <li>???????????? ????????? ???????????? ????????? ???????????????.
                                <div className="hb-modal-line-1">
                                    <div className="hb-modal-line-item-page">
                                        <img
                                            src={"https://www.hanbiro.com/images/remote-info-img05.gif"}

                                        ></img>
                                    </div>

                                </div>
                            </li>
                            <li>????????? ???????????? ?????? ???????????? ??????????????? ???????????? ?????? ????????? ?????? ??? ?????? ???????????? ??????????????? ??????????????? ?????????.

                                <div className="hb-modal-line-item-3">
                                    <img
                                        src={"https://www.hanbiro.com/images/remote-info-img04.jpg"}

                                    ></img>
                                </div>

                            </li>
                        </ol>
                    </Tab>


                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>??????</Button>
            </Modal.Footer>
        </Modal>
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
    const [modalShow, setModalShow] = React.useState(false);

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

                                    ?????? ?????? ??????:
                                    <strong> 1544 - 4755 </strong>
                                    <span>  &nbsp; ???  &nbsp;</span>
                                    <a className="gmail" href="mailto:hanbiro@hanbiro.com">hanbiro@hanbiro.com</a>
                                </div>
                            </div>
                            {/* <div className="top-left">
                               
                                    ?????? ?????? ??????:
                                    <strong>1544 - 4755 </strong>
                                    <span> ??? </span>
                                    <a href="mailto:hanbiro@hanbiro.com">hanbiro@hanbiro.com</a>
                                
                            </div> */}
                        </Col>
                        <Col md={8}>
                            <div className="top-nav-right">
                                <a className="item-nav"
                                    onClick={() => setModalShow(true)}
                                > ?????? ?????? </a>
                                <a className="item-nav" href="http://member.hanbiro.com"> ??????????????? ??????</a>
                                <a className="item-nav" href="https://mypage.hanbiro.com"> ???????????? ??????</a>
                                <a className="item-nav" href="http://comodossl.co.kr"> Sectigo(COMODO) SSL</a>
                                <a className="item-nav" href="http://blog.naver.com/hanbiro1999"> ????????? ?????????</a>
                                <div
                                    className="item-nav-2"
                                    onClick={() => setOpenEng(!openEng)}
                                    aria-controls="hosting"
                                    aria-expanded={openEng}
                                >
                                    {" "}
                                    <a href="#" className="navbar-link">
                                        ????????? <AiFillCaretDown />
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
                                <Modal />
                                <div className="bar-item btn-home"
                                    onClick={() => {
                                        window.open("https://en.hanbiro.com/", "_blank");
                                    }}

                                >
                                    {titleMenu("HOME", "WELCOME")}
                                </div>
                                <Link to="/cloud" className="mobile-link">
                                    <div className="bar-item ">
                                        {titleMenu("????????????", "CLOUD")}
                                    </div>
                                </Link>
                                <Link to="/msa1" className="mobile-link">
                                    <div className="bar-item ">
                                        {titleMenu("????????????????????? ??????", "MICROSERVICE")}
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
                                        {titleMenu("????????????", "GROUPWARE")}
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
                                        {titleMenu("Vora Works", "VORA WORKS")}
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
                                        {titleMenu("?????????", "HOSTING")}
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
                                        {titleMenu("?????????/?????? ??????", "HANBIRO/CUSTOMERS")}
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
                            <Col className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn1("menu-list-product-item")}
                                    </div>

                                </div>
                            </Col>
                            <Col className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn2("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>
                            <Col className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn3("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>
                            <Col className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn4("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>
                            <Col   >
                                <div className="menu-list-product-left">
                                    <div >
                                        {HostingColumn5("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>

                            <Col md={12}>
                            </Col>
                            <Col className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn6("menu-list-product-item")}
                                    </div>

                                </div>
                            </Col>
                            <Col className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn7("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>
                            <Col className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn8("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>
                            <Col className="par-list-pro">
                                <div className="menu-list-product">
                                    <div >
                                        {HostingColumn9("menu-list-product-item")}
                                    </div>
                                </div>
                            </Col>

                            <Col  >
                                <div className="menu-list-product-left">
                                    <div >
                                        
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

                                {MenuLink("????????????", "/cloud")}

                                {MenuLink("????????????????????? ??????", "/msa1")}

                                <div
                                    className="mobile-list-item"
                                    onClick={() => setOpenmobileGw(!openmobileGw)}
                                    aria-controls="hosting"
                                    aria-expanded={openmobileGw}
                                >
                                    <text className="menu-name"> ???????????? </text>
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
                                    <text className="menu-name"> ????????? </text>
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
                                <div >
                                    <Collapse in={openmobileHo}>
                                        <div >
                                            {HostingColumn5("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div >
                                    <Collapse in={openmobileHo}>
                                        <div >
                                            {HostingColumn6("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div >
                                    <Collapse in={openmobileHo}>
                                        <div >
                                            {HostingColumn7("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div >
                                    <Collapse in={openmobileHo}>
                                        <div >
                                            {HostingColumn8("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div >
                                    <Collapse in={openmobileHo}>
                                        <div >
                                            {HostingColumn9("list-groupware")}
                                        </div>
                                    </Collapse>
                                </div>
                                <div
                                    className="mobile-list-item"
                                    onClick={() => setOpenmobileCs(!openmobileCs)}
                                    aria-controls="hosting"
                                    aria-expanded={openmobileCs}
                                >
                                    <text className="menu-name"> ?????????/?????? ?????? </text>
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


            <>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        </>
    );
}

export default NavButton;
