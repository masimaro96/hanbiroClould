import React from 'react';
// import './App.css';
import './style.css';
import styled from 'styled-components';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import { Grid } from '@mui/material';


function CloudFeatures(){

  return (
    <Container >
        <br/>
        <Row>
            <Col xl={4} as={Grid} display={{xs: "none", md: "none", lg: "block"}}>
                <GridCard>
                    <GridCardBody>
                        <img className='cloud_image' alt='' src='https://www.hanbiro.com/cloud/images/detail/image-01.svg'></img>
                    </GridCardBody>
                </GridCard>
            </Col>

            <Col xl={8} md={12}>
                <GridCard>
                    <GridCardBody>
                        <h2 className='title'><b>한비로 CLOUD 서비스 특징</b></h2><br/>
                        <p><b 
                        >고성능의 스토리지와 하드웨어 자원 독립운영</b></p>
                        <p className='gray'>서버자원의 독립성을 보장하며, 안정적인 서비스를 운영할 수 있습니다.</p>
                        <br/>
                        <p><b>한비로 쿠버네티스기반의 데이터베이스클러스터와 연동</b></p>
                        <p className='gray'>한비로 <b>Kubernetes</b> 서비스의 연동으로 대용량 분산 클라우드 시스템을 구축할 수 있습니다.</p>
                        <br/>
                        <p><b>한비로 쿠버네티스기반의 어플리케이션과 연동</b></p>
                        <p className='gray'>한비로 <b>Cloud</b> 서버와 쿠버네티스 클러스터 기반의 <b>Application</b> 과 연동할 수 있습니다.</p>
                        <br/>
                        <p><b>독립 클라우드 시스템 구축</b></p>
                        <p className='gray'>고객의 서비스를 위한 독립 <b>Openstack</b> 시스템, 독립 <b>Kubernetes</b> 시스템을 구축해 드리며, <b>Openstack</b> 의<br/><b>가상서버와</b> 과 <b>Kubernetes</b> 의 컨테이너를 융합한 서비스를 구축해드립니다.</p>
                        <br/>
                        <p><b>마이크로서비스을 위한 개발환경구축</b></p>
                        <p className='gray'>쿠버네티스 기반 개발환경제공, 개발속도향상 및 개발생산성을 극대화 할 수 있습니다.</p>
                    </GridCardBody>
                </GridCard>
            </Col>
      </Row>
      <hr></hr>
      <br/>
      <Row>
          <Col xl={8} md={12}>
              <GridCard>
                  <GridCardBody>
                      <h2 className='title'><b>한비로 CLOUD 서비스 주의사항</b></h2>
                      <br/>
                      <p className='_2gray'>백업은 고객이 별도로 보관해야 합니다. 한비로는 인프라운영의 보조목적으로 백업을 운영하며,<br/>
                          외부의 침입으로 발생하는 데이터의 손실에 대한 책임이 없습니다.<br/>
                          한비로 <b>Cloud</b> 관리자 콘솔에서 생성한 자원은 사용하지 않더라도 생성일자 기준으로 과금됩니다.<br/>
                          한비로 <b>Cloud</b>  서비스의 자원 생성, 삭제, 변경은 1일 1회만 가능합니다.<br/>
                          삭제와 변경시에는 백업을 한후 진행해야 합니다.<br/>
                          <b>Windows</b> 운영체제의 클라우드 서버사용시 라이센스 정책은 <b>MS</b> 라이센스 정책을 따릅니다.<br/>
                          <b>MS</b> 라이센스정책은 월단위로 과금되며, 1개월미만의 사용시에도 월단위 과금이 진행됩니다.<br/>
                          오토스케일링으로 생성된 서버는 공유스토리지 연결만 가능합니다<br/>
                          베어메탈서버는 오토스케일링과 블록스토리지 마운트를 지원하지 않습니다.<br/>
                          서버 자체적으로 메일 발송은 금지됩니다. (* 별도 smtp 서버 제공, 한비로 Cloud 담당자와 상담)<br/>
                          한비로 <b>Cloud</b> 서비스는 연산을 위한 컴퓨팅자원을 사용할 수 없습니다.<br/>
                          타사에 피해가 발생하는 서비스 및 불법적인 사이트 운영시 동의없이 서비스가 중단될 수 있습니다.<br/>
                          타 고객사 서버에 불법적인 접근 및 이상 트래픽 발생 시 동의 없이 서비스가 중단될 수 있습니다</p>
                          <br/>
                  </GridCardBody>
              </GridCard>
          </Col>
          <Col xl={4} as={Grid} display={{xs: "none", md: "none", lg: "block"}}>
              <GridCard>
                  <GridCardBody>
                      <img className='cloud_image' alt='' src='https://www.hanbiro.com/cloud/images/detail/image-02.svg'></img>
                  </GridCardBody>
              </GridCard>
          </Col>
      </Row>

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
    
    </Container>
    
  );
};

export default CloudFeatures;

// region STYLES

const GridCard = styled(Card)`
  padding-bottom: 20px;
  p {
    margin-bottom: 0;
    text-align: left;
  }
`;

const GridCardBody = styled(CardBody)`
  padding: 0;

`;



// endregion
