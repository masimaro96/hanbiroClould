import '../nhuquynh/App.css';
import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import CloudIcon from 'mdi-react/CloudIcon';
/* eslint-disable */

function CloudServices() {
  
  return (
    <div className='App'>
      <Container className='table-cloudservices'>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-title-1-3'>
                <div className='home-service-icon'>
                    <CloudIcon size={35} className="icon-CloudIcon" />
                </div>
                <div className='home-service-title'>
                  <p>Server</p>
                </div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={6} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-title'>
                <div className='home-service-icon'>
                  <CloudIcon size={35} className="icon-CloudIcon" />
                </div>
                <div className='home-service-title'>
                  <p>Kubernetes Cluster</p>
                  <p className='home-service-subtitle'>(Database, Application)</p>
                </div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-title-1-3'>
                <div className='home-service-icon'>
                  <CloudIcon size={35} className="icon-CloudIcon" />
                </div>
                <div className='home-service-title'>
                  <p>Storage</p>
                </div>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-intro'>
                <div className='home-service-name'>
                  <p>가상서버 (인스턴스)</p>
                </div>
                <div className='home-service-description'>Cloud 기반 가상서버</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud ElasticSearch</p>
              </div>
              <div className='home-service-description'>쿠버네티스 클러스터 검색엔진</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud for MySQL</p>
              </div>
              <div className='home-service-description'>컨테이너 MySQL 데이터베이스</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-intro'>
              <div className='home-service-name'>
                <p>오브젝트 Storage</p>
              </div>
              <div className='home-service-description'>S3, API 전용 분산스토리지</div>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-intro'>
              <div className='home-service-name'>
                <p>베어메탈 서버 (단독서버)</p>
              </div>
              <div className='home-service-description'>Cloud 기반 독립서버</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud Kafka</p>
              </div>
              <div className='home-service-description'>실시간 데이터 스트리밍 처리</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud for PostgreSQL</p>
              </div>
                <div className='home-service-description'>컨테이너 기반 PostgreSQL Database</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-intro'>
              <div className='home-service-name'>
                <p>불록 Storage</p>
              </div>
              <div className='home-service-description'>OPENSTACK 블록스토리지</div>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-intro'>
              <div className='home-service-name'>
                <p>오토스케일링</p>
              </div>
              <div className='home-service-description'>가상서버(인스탄스) 자동확장 서비스</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud RabbitMQ</p>
              </div>
              <div className='home-service-description'>AMQP 메세지 브로커 미들웨어</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud for Vitess</p>
              </div>
              <div className='home-service-description'>MySQL 호환 데이터베이스 클러스터 엔진</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-intro'>
              <div className='home-service-name'>
                <p>공유 Storage</p>
              </div>
              <div className='home-service-description'>클러스터 전용 공유스토리지</div>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-intro'>
              <div className='home-service-name'>
                <p>로드발랜서</p>
              </div>
              <div className='home-service-description'>클라우드 서버부하분산 서비스</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app-hidden'>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud for MongoDB</p>
              </div>
              <div className='home-service-description'>컨테이너 기반 NoSQL Database</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app-hidden'>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-intro'>
              <div className='home-service-name'>
                <p>MS-SQL/Windows</p>
              </div>
              <div className='home-service-description'>윈도우 기반 가상서버(인스턴스)</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app-hidden'>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud for Redis</p>
              </div>
              <div className='home-service-description'>인메모리기반 고속 NoSQL Database</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app-hidden'>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='row-box-intro'>
              <div className='home-service-name'>
                <p>Database(인스턴스)</p>
              </div>
              <div className='home-service-description'>가상서버(인스턴스)기반 데이터베이스</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app-hidden'> 
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud for SycllaDB</p>
              </div>
              <div className='home-service-description'>Cassandra 호환 NoSQL Database</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app-hidden'>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app-hidden'>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app-hidden'>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app'>
              <div className='home-service-name'>
                <p>Cloud for ClickHouse</p>
              </div>
              <div className='home-service-description'>OLAP를 위한 컬럼지향형 DB</div>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody className='col-data-app-hidden'>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const GridCard = styled(Card)`
  padding-bottom: 10px;

  p {
    margin-bottom: 0;
  }
`;

const GridCardBody = styled(CardBody)`
  padding: 0;
  text-align: left;
`;

const GridSmall = styled.p`
  
  @media screen and (min-width: 768px) and (max-width: 1920px) {
    display: none;
  }
`;


export default CloudServices;