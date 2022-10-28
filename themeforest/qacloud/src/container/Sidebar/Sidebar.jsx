import React from 'react'
import {
    Container, Row, Col
  } from 'react-bootstrap';
import styled from 'styled-components';
import { Box } from '@mui/material';
import '../Sidebar/sidebar.css';
import { Link } from 'react-router-dom';

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
`


function Sidebar() {
  return (
    <Container className='detail-page'>
        {/* <Row>
          <Col md={12}>
            <div className='side'>
              <ul className='side-menu'>
                <li className='side-menu-item'><a href="">SERVER</a></li>
                <li className='side-menu-item'><a href="">KUBERNETES CLUSTER</a></li>
                <li className='side-menu-item'><a href="">STORAGE</a></li>
              </ul>
            </div>
          </Col>
        </Row> */}

        {/* <Row>
            <Col md={3}> */}
              <div className='left-menu'>
                <SidebarTitle>Server</SidebarTitle>
                <Mybox className='sidebarlist'>
                    <ul>
                      <li className='listitem active'><Link to="/compute-vps">가상서버 (인스턴스)</Link></li>
                      <li className='listitem'><Link to="/compute-bare-metal">베어메탈 서버 (단독서버)</Link></li>
                      <li className='listitem'><Link to="/compute-auto-scale">오토스케일링</Link></li>
                      <li className='listitem'><Link to="/compute-load-balance">로드발랜서</Link></li>
                      <li className='listitem'><Link to="/compute-database">데이터베이스 (인스턴스)</Link></li>
                      <li className='listitem'><Link to="/compute-ms">MS-SQL / Windows</Link></li>
                  </ul>
                </Mybox>
              </div>
              
              <div className='left-menu'>
                <div className='left-menu-box'>
                  <SidebarTitle>Kubernetes Cluster</SidebarTitle>
                <Mybox className='sidebarlist'>
                  <p className='sidebarlist-title'>Application</p>
                    <ul>
                      <li className='listitem'><Link to="/cluster-cloud-elastic-search">Elastic Search</Link></li>
                      <li className='listitem'><Link to="/cluster-kafka">Kafka</Link></li>
                      <li className='listitem'><Link to="/cluster-cloud-rabbitmq">RabbitMQ</Link></li>
                  </ul>
                </Mybox>
                </div>
                
                <div className='left-menu-box'>
                  <Mybox className='sidebarlist'>
                  <p className='sidebarlist-title'>Database</p>
                    <ul>
                      <li className='listitem'><Link to="/cluster-cloud-mysql-db">MySQL</Link></li>
                      <li className='listitem'><Link to="/cluster-cloud-postgresql-db">PostgreSQL</Link></li>
                      <li className='listitem'><Link to="/cluster-cloud-vitess">Vitess</Link></li>
                      <li className='listitem'><Link to="/cluster-cloud-mongodb">MongoDB</Link></li>
                      <li className='listitem'><Link to="/cluster-cloud-redis">Redis</Link></li>
                      <li className='listitem'><Link to="/cluster-cloud-scylladb">ScyllaDB</Link></li>
                      <li className='listitem'><Link to="/cluster-clickhouse">ClickHouse</Link></li>
                  </ul>
                </Mybox>
                </div>
              </div>
              
              <div className='left-menu'>
                <SidebarTitle>Storage</SidebarTitle>
                <Mybox className='sidebarlist'>
                    <ul>
                      <li className='listitem'><Link to="/store-object-store">오브젝트 Storage</Link></li>
                      <li className='listitem'><Link to="/store-block-store">불록 Storage</Link></li>
                      <li className='listitem'><Link to="/store-nas-store">공유 Storage</Link></li>
                  </ul>
                </Mybox>
              </div>
            {/* </Col>
            <Col md={9}>Sidebar</Col>
        </Row> */}
    </Container>
    
  )
}

export default Sidebar