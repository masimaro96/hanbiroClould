import '../cloud-services/App.css';
import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import CloudIcon from 'mdi-react/CloudIcon';
import Box from '@mui/material/Box';

/* eslint-disable */

function CloudServicesGrid ($title,$description) {
  return (
    <GridCardBody className='row-box-title-1-3'>
      <div className='home-service-icon'>
          <CloudIcon size={35} className="icon-CloudIcon" />
      </div>
      <div className='home-service-title'>
        <TypographyCard>{$title}</TypographyCard>
        <TypographyCard className='home-service-subtitle'>{$description}</TypographyCard>
      </div>
    </GridCardBody>
  )
}

function CloudServicesGridBorderNone ($name,$description) {
  return (
    <GridCardBody className='row-box-intro'>
      <div className='home-service-name'>
        <TypographyCard>{$name}</TypographyCard>
      </div>
        <TypographyCard className='home-service-description'>{$description}</TypographyCard>
    </GridCardBody>
  )
}

function CloudServicesGridBorder ($name,$description) {
  return (
    <GridCardBody className='col-data-app'>
      <div className='home-service-name'>
      <TypographyCard>{$name}</TypographyCard>
      </div>
      <TypographyCard  className='home-service-description'>{$description}</TypographyCard>
    </GridCardBody>
  )
}

function CloudServicesGridHidden () {
  return (
    <GridCardBody className='col-data-app-hidden'>
      <TypographyCard> </TypographyCard>
    </GridCardBody>
  )
}

function CloudServices() {
  
  return (
    <div className='App'>
      <Container className='table-cloudservices'>
        <Box mr={3} className='ServerBox'>
          <Col>
            <GridCard>
              {CloudServicesGrid ("Server")}
            </GridCard>
          </Col>
          <Col>
            <GridCard>
              {CloudServicesGridBorderNone ("가상서버 (인스턴스)","Cloud 기반 가상서버")}
            </GridCard>
          </Col>
          <Col sm={12}>
            <GridCard>
              {CloudServicesGridBorderNone ("베어메탈 서버 (단독서버)","Cloud 기반 독립서버")}
            </GridCard>
          </Col>
          <Col sm={12}>
            <GridCard>
              {CloudServicesGridBorderNone ("오토스케일링","가상서버(인스탄스) 자동확장 서비스")}
            </GridCard>
          </Col>
          <Col sm={12}>
            <GridCard>
              {CloudServicesGridBorderNone ("로드발랜서","클라우드 서버부하분산 서비스")}
            </GridCard>
          </Col>
          <Col sm={12}>
            <GridCard>
              {CloudServicesGridBorderNone ("MS-SQL/Windows","윈도우 기반 가상서버(인스턴스)")}
            </GridCard>
          </Col>
          <Col>
            <GridCard>
              {CloudServicesGridBorderNone ("Database(인스턴스)","가상서버(인스턴스)기반 데이터베이스")}
            </GridCard>
          </Col>
          <Col>
            <GridCard>
              {CloudServicesGridHidden ()}
            </GridCard>
          </Col>
        </Box>
        <Box mr={3} className='ClusterTitle'>
          <Col>
            <GridCard>
              {CloudServicesGrid ("Kubernetes Cluster","(Database, Application)")}
            </GridCard>
          </Col>
          <Col className='ClusterBox'>
            <Box mr={1} className='ClusterBox1'>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("Cloud ElasticSearch","쿠버네티스 클러스터 검색엔진")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                {CloudServicesGridBorder ("Cloud Kafka","실시간 데이터 스트리밍 처리")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("Cloud RabbitMQ","AMQP 메세지 브로커 미들웨어")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridHidden ()}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridHidden ()}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridHidden ()}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridHidden ()}
                </GridCard>
              </Col>
            </Box>
            <Box className='ClusterBox1'>
              <Col>
              <GridCard>
              {CloudServicesGridBorder ("Cloud for MySQL","컨테이너 MySQL 데이터베이스")}
              </GridCard>
              </Col>
              <Col>
              <GridCard>
                {CloudServicesGridBorder ("Cloud for PostgreSQL","컨테이너 기반 PostgreSQL Database")}
               </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("Cloud for Vitess","MySQL 호환 데이터베이스 클러스터 엔진")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("Cloud for MongoDB","컨테이너 기반 NoSQL Database")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("Cloud for Redis","인메모리기반 고속 NoSQL Database")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("Cloud for SycllaDB","Cassandra 호환 NoSQL Database")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("Cloud for ClickHouse","OLAP를 위한 컬럼지향형 DB")}
                </GridCard>
              </Col>
            </Box>
          </Col>
        </Box>
        <Box mr={3} className='StorageBox'>
          <Col>
            <GridCard>
              {CloudServicesGrid ("Server")}
            </GridCard>
          </Col>
          <Col>
          <GridCard>
              {CloudServicesGridBorderNone ("오브젝트 Storage","S3, API 전용 분산스토리지")}
            </GridCard>
          </Col>
          <Col>
          <GridCard>
          {CloudServicesGridBorderNone ("불록 Storage","OPENSTACK 블록스토리지")}
            </GridCard>
          </Col>
          <Col>
          <GridCard>
              {CloudServicesGridBorderNone ("공유 Storage","클러스터 전용 공유스토리지")}
            </GridCard>
          </Col>
          <Col>
            <GridCard>
              {CloudServicesGridHidden ()}
            </GridCard>
          </Col>
          <Col>
            <GridCard>
              {CloudServicesGridHidden ()}
            </GridCard>
          </Col>
          <Col>
            <GridCard>
              {CloudServicesGridHidden ()}
            </GridCard>
          </Col>
          <Col>
            <GridCard>
              {CloudServicesGridHidden ()}
            </GridCard>
          </Col>
        </Box>
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

const TypographyCard = styled.div`
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
`;

const GridSmall = styled.p`
  
  @media screen and (min-width: 768px) and (max-width: 1920px) {
    display: none;
  }
`;


export default CloudServices;