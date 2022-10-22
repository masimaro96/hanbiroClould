import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function NavButton() {
  const [open, setOpen] = useState(false);
  const [openhosting, setOpenhosting] = useState(false);

  return (
    <>
        <div className="Container-bar">
            <div >
                <img src={"https://www.hanbiro.com/cloud/images/logo.png"} style={{width:200,height:50}}></img>
            </div>
            <div className="bar-item">
                <span> HOME </span> <br/>
                <span className="bar-item-1">Welcome</span>
            </div>
            <div className="bar-item">
                <span>  클라우드  </span> <br/>
                <span className="bar-item-1">Cloud</span>
            </div>
            <div className="bar-item">
                <span> 마이크로서비스 개발 </span> <br/>
                <span className="bar-item-1">Microservice</span>
            </div>
            <div className="bar-item"
                onClick={() => setOpen(!open)}
                aria-controls="hanbiro-customer"
                aria-expanded={open}
            >
                <span>  그룹웨어  </span> <br/>
                <span className="bar-item-1">Groupware</span>
            </div>
            
            <div className="bar-item">
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
        <div className="Container-bar">
            <Collapse in={open}>
                <div id="hosting" className="css-customer-list">
                    <div className='css-customer css-customer-left  '>
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
                    <div className='css-customer css-customer-left'>
                        <h6>고객센터</h6>
                        <div> 고객 문의 및 서버 점검 의뢰</div>
                        <div> 결제 안내</div>
                        <div> IDC 방문 신청</div>
                        <div> 불편 사항 접수</div>
                        <div> 네임 서버 정보</div>
                        <div> 메일 POP / 모바일 POP 설정</div>
                    </div>
                    <div className='css-customer css-customer-left '>
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
                    <div className='css-customer'>
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
            
        </div>
        <div className="Container-bar">
            <Collapse in={openhosting}>
                <div id="hanbiro-customer" className="css-customer-list">
                    <div className='css-customer css-customer-left  '>
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
                    <div className='css-customer'>
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
        </div>
    </> 
  );
}

export default NavButton;


