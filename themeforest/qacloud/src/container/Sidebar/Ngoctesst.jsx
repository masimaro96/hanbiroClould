import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import '../Sidebar/sidebar.css';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';


const Mybox = styled(Box) ({
  backgroundColor: 'rgba(243, 245, 249, 0.8)',
  padding: '10px 15px',
  borderRadius: '10px'
})

const SidebarTitle = styled.p `
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 0;
`

function Ngoctesst() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Server</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li className='listitem active'><Link to="/compute-vps">가상서버 (인스턴스)</Link></li>
            <li className='listitem'><Link to="/compute-bare-metal">베어메탈 서버 (단독서버)</Link></li>
            <li className='listitem'><Link to="/compute-auto-scale">오토스케일링</Link></li>
            <li className='listitem'><Link to="/compute-load-balance">로드발랜서</Link></li>
            <li className='listitem'><Link to="/compute-database">데이터베이스 (인스턴스)</Link></li>
            <li className='listitem'><Link to="/compute-ms">MS-SQL / Windows</Link></li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Kubernetes Cluster</h5>
        </Accordion.Header>
        <Accordion.Body>
          <div className='left-menu-box'>
              <h6>Application</h6>
                <ul>
                  <li className='listitem'><Link to="/cluster-cloud-elastic-search">Elastic Search</Link></li>
                  <li className='listitem'><Link to="/cluster-kafka">Kafka</Link></li>
                  <li className='listitem'><Link to="/cluster-cloud-rabbitmq">RabbitMQ</Link></li>
              </ul>
          </div>

          <div className='left-menu-box'>
            <h6>Database</h6>
              <ul>
                <li className='listitem'><Link to="/cluster-cloud-mysql-db">MySQL</Link></li>
                <li className='listitem'><Link to="/cluster-cloud-postgresql-db">PostgreSQL</Link></li>
                <li className='listitem'><Link to="/cluster-cloud-vitess">Vitess</Link></li>
                <li className='listitem'><Link to="/cluster-cloud-mongodb">MongoDB</Link></li>
                <li className='listitem'><Link to="/cluster-cloud-redis">Redis</Link></li>
                <li className='listitem'><Link to="/cluster-cloud-scylladb">ScyllaDB</Link></li>
                <li className='listitem'><Link to="/cluster-clickhouse">ClickHouse</Link></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Storage</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ul>
              <li className='listitem'><Link to="/store-object-store">오브젝트 Storage</Link></li>
              <li className='listitem'><Link to="/store-block-store">불록 Storage</Link></li>
              <li className='listitem'><Link to="/store-nas-store">공유 Storage</Link></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


export default Ngoctesst