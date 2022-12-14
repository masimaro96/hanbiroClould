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
import { Link, Route } from "react-router-dom";

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

function CloudServicesGridBorderNone($key, $name, $description) {
  return (
    <GridCardBody className="row-box-intro">
      <div className="home-service-name">
        <Link to={`/${$key}`}>
          <TypographyCard>{$name}</TypographyCard>
        </Link>
      </div>
      <TypographyCard className="home-service-description">
        {$description}
      </TypographyCard>
    </GridCardBody>
  );
}

function CloudServicesGridBorder($key, $name, $description) {
  return (
    <GridCardBody className="col-data-app">
      <div className="home-service-name">
        <Link to={`/${$key}`}>
          <TypographyCard>{$name}</TypographyCard>
        </Link>
      </div>
      <TypographyCard className="home-service-description">
        {$description}
      </TypographyCard>
    </GridCardBody>
  );
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
    <div className='cloudservice'>
      <Container className='table-cloudservices'>
        <Box mr={3} className='ServerBox'>
          <Col>
            <GridCard>
              {CloudServicesGrid ("Server")}
            </GridCard>
          </Col>
          <Col>
            <GridCard>
              {CloudServicesGridBorderNone ("compute-vps","???????????? (????????????)","Cloud ?????? ????????????")}
            </GridCard>
          </Col>
          <Col sm={12}>
            <GridCard>
              {CloudServicesGridBorderNone ("compute-bare-metal","???????????? ?????? (????????????)","Cloud ?????? ????????????")}
            </GridCard>
          </Col>
          <Col sm={12}>
            <GridCard>
              {CloudServicesGridBorderNone ("compute-auto-scale","??????????????????","????????????(????????????) ???????????? ?????????")}
            </GridCard>
          </Col>
          <Col sm={12}>
            <GridCard>
              {CloudServicesGridBorderNone ("compute-load-balance","???????????????","???????????? ?????????????????? ?????????")}
            </GridCard>
          </Col>
          <Col sm={12}>
            <GridCard>
              {CloudServicesGridBorderNone ("compute-ms","MS-SQL/Windows","????????? ?????? ????????????(????????????)")}
            </GridCard>
          </Col>
          <Col>
            <GridCard>
              {CloudServicesGridBorderNone ("compute-database","Database(????????????)","????????????(????????????)?????? ??????????????????")}
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
                  {CloudServicesGridBorder ("cluster-cloud-elastic-search","Cloud ElasticSearch","??????????????? ???????????? ????????????")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                {CloudServicesGridBorder ("cluster-kafka","Cloud Kafka","????????? ????????? ???????????? ??????")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("cluster-cloud-rabbitmq","Cloud RabbitMQ","AMQP ????????? ????????? ????????????")}
                </GridCard>
              </Col>
              <Col className='Card-Hidden'>
                <GridCard>
                  {CloudServicesGridHidden ()}
                </GridCard>
              </Col>
              <Col className='Card-Hidden'>
                <GridCard>
                  {CloudServicesGridHidden ()}
                </GridCard>
              </Col>
              <Col className='Card-Hidden'>
                <GridCard>
                  {CloudServicesGridHidden ()}
                </GridCard>
              </Col>
              <Col className='Card-Hidden'>
                <GridCard>
                  {CloudServicesGridHidden ()}
                </GridCard>
              </Col>
            </Box>
            <Box className='ClusterBox1'>
              <Col>
              <GridCard>
              {CloudServicesGridBorder ("cluster-cloud-mysql-db","Cloud for MySQL","???????????? MySQL ??????????????????")}
              </GridCard>
              </Col>
              <Col>
              <GridCard>
                {CloudServicesGridBorder ("cluster-cloud-postgresql-db","Cloud for PostgreSQL","???????????? ?????? PostgreSQL Database")}
               </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("cluster-cloud-vitess","Cloud for Vitess","MySQL ?????? ?????????????????? ???????????? ??????")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("cluster-cloud-mongodb","Cloud for MongoDB","???????????? ?????? NoSQL Database")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("cluster-cloud-redis","Cloud for Redis","?????????????????? ?????? NoSQL Database")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("cluster-cloud-scylladb","Cloud for SycllaDB","Cassandra ?????? NoSQL Database")}
                </GridCard>
              </Col>
              <Col>
                <GridCard>
                  {CloudServicesGridBorder ("cluster-clickhouse","Cloud for ClickHouse","OLAP??? ?????? ??????????????? DB")}
                </GridCard>
              </Col>
            </Box>
          </Col>
        </Box>
        <Box mr={3} className='StorageBox'>
          <Col>
            <GridCard>
              {CloudServicesGrid ("Storage")}
            </GridCard>
          </Col>
          <Col>
          <GridCard>
              {CloudServicesGridBorderNone ("store-object-store","???????????? Storage","S3, API ?????? ??????????????????")}
            </GridCard>
          </Col>
          <Col>
          <GridCard>
          {CloudServicesGridBorderNone ("store-block-store","?????? Storage","OPENSTACK ??????????????????")}
            </GridCard>
          </Col>
          <Col>
          <GridCard>
              {CloudServicesGridBorderNone ("store-nas-store","?????? Storage","???????????? ?????? ??????????????????")}
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