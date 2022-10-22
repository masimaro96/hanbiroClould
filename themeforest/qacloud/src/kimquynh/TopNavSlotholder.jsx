import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Carousel from 'react-bootstrap/Carousel';

function NavButton() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <>
        <div >
            <div className='slotho-bg'>
                <div className="slotho-Container-bar">
                    <div className="Container-bar-list">
                        <div className="Container-bar-item">
                            <div>
                                <img src={"https://www.hanbiro.com/cloud/images/main-text.png"} style={{width:400,height:70}}></img>
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
                    </div>
                    <div className="Container-bar-list">
                        <div >
                            <img src={" https://www.hanbiro.com/cloud/images/main-img01.png"} style={{width:600,height:400}}></img>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
           
        </Carousel>
    </> 
  );
}

export default NavButton;


