import React from 'react';
// import './App.css';
import './live-chat-style.css';
import {
  Container, Row, Col,
} from 'react-bootstrap';



function LiveChat(){

  return (
    <div >
      <div className='livechat'>
        <img alt='' src='https://www.hanbiro.com/images/ico-livechat.png' style={{width:30,height:30}}></img>
        <text className='content d-none d-lg-inline'>1:1 상담</text>
      </div>
      <div className='livechat_2'>
        <img alt='' src='https://www.hanbiro.com/images/ico-demo.png' style={{width:30,height:30}}></img>
        <text className='content d-none d-lg-inline'>데모 신청</text>
      </div>
    </div>
    
  );
};

export default LiveChat;

