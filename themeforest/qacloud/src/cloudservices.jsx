import './App.css';
import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import CloudOutlineIcon from 'mdi-react/CloudOutlineIcon';
/* eslint-disable */

function App() {
  
  return (
    <div className='App'>
      <Container>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBodyTitle>
                <CloudOutlineIcon /><span><b> Server</b></span>
              </GridCardBodyTitle>
            </GridCard>
          </Col>
          <Col md={6} sm={12}>
            <GridCard>
              <GridCardBodyTitle>
              <CloudOutlineIcon /><span><b> Kubernetes Cluster<br></br>(Database, Application)</b></span>
              </GridCardBodyTitle>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBodyTitle>
              <CloudOutlineIcon /><span><b> Storage</b></span>
              </GridCardBodyTitle>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>가상서버 (인스턴스)<br></br>Cloud 기반 가상서버</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud ElasticSearch<br></br>
쿠버네티스 클러스터 검색엔진</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud for MySQL<br></br>
컨테이너 MySQL 데이터베이스</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>오브젝트 Storage<br></br>
S3, API 전용 분산스토리지</p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>베어메탈 서버 (단독서버)<br></br>
Cloud 기반 독립서버</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud Kafka<br></br>
실시간 데이터 스트리밍 처리</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud for PostgreSQL<br></br>
컨테이너 기반 PostgreSQL Database</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>불록 Storage<br></br>
OPENSTACK 블록스토리지</p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>오토스케일링<br></br>
가상서버(인스탄스) 자동확장 서비스</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud RabbitMQ<br></br>
AMQP 메세지 브로커 미들웨어</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud for Vitess<br></br>
MySQL 호환 데이터베이스 클러스터 엔진</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>공유 Storage<br></br>
클러스터 전용 공유스토리지</p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>로드발랜서<br></br>
클라우드 서버부하분산 서비스</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud for MongoDB<br></br>
컨테이너 기반 NoSQL Database</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>MS-SQL/Windows<br></br>
윈도우 기반 가상서버(인스턴스)</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud for Redis<br></br>
인메모리기반 고속 NoSQL Database</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Database(인스턴스)<br></br>
가상서버(인스턴스)기반 데이터베이스</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud for SycllaDB<br></br>
Cassandra 호환 NoSQL Database</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p></p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
                <p>Cloud for ClickHouse<br></br>
OLAP를 위한 컬럼지향형 DB</p>
              </GridCardBody>
            </GridCard>
          </Col>
          <Col md={3} sm={12}>
            <GridCard>
              <GridCardBody>
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
  margin-top: 20px;
  padding-bottom: 10px;
  p {
    margin-bottom: 0;
    padding: 20px 15px;
    text-align: left;
  }
`;

const GridCardBody = styled(CardBody)`
  padding: 0;
  border: 1px solid white;
  border-radius: 10px;
  background: white;
`;

const GridCardBodyTitle = styled(CardBody)`
  padding: 0;
  border-radius: 10px;
  background: #47A7FF;

  span{
    margin-bottom: 0;
    color: white;
  }
`;

const GridSmall = styled.p`

  @media screen and (min-width: 768px) and (max-width: 1920px) {
    display: none;
  }
`;

export default App;