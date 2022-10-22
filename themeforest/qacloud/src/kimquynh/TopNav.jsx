
import React , { useState } from "react";
// import './App.css';
import TopNavButton from './TopNavButton'
import TopNavSlotholder from './TopNavSlotholder'

function App(){
    return(
        <>
            <div className="Box">
                <div className="Container-top">
                    <div className="item-nav-1">고객 지원 안내: <span className="nav-text">1544 - 4755</span> • hanbiro@hanbiro.com</div>
                    <div className="top-nav">
                        <div className="item-nav"> 원격 지원</div>
                        <div className="item-nav"> 서버호스팅 고객</div>
                        <div className="item-nav"> 웹호스팅 고객</div>
                        <div className="item-nav"> Sectigo(COMODO) SSL</div>
                        <div className="item-nav"> 한비로 블로그</div>
                        <div className="item-nav-2"> 한국어 </div>
                    </div>
            </div>
            
            </div>
            <div >
                <TopNavButton />
            </div>
            <div >
                <TopNavSlotholder />
            </div>

           
        </>
        
    
    );
}

export default App;