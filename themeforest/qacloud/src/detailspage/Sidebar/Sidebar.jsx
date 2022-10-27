import React from 'react'
import {
    Container, Row, Col
  } from 'react-bootstrap';
import styled from 'styled-components';
import { Box } from '@mui/material';
import '../Sidebar/sidebar.css'

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
        <Row>
          <Col md={12}>
            <div className='side'>
              <ul className='side-menu'>
                <li className='side-menu-item'><a href="">SERVER</a></li>
                <li className='side-menu-item'><a href="">KUBERNETES CLUSTER</a></li>
                <li className='side-menu-item'><a href="">STORAGE</a></li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* <Row>
            <Col md={3}>
              <div className='left-menu'>
                <SidebarTitle>Server</SidebarTitle>
                <Mybox className='sidebarlist'>
                    <ul>
                      <li className='listitem active'><a href="#">가상서버 (인스턴스)</a></li>
                      <li className='listitem'><a href="">베어메탈 서버 (단독서버)</a></li>
                      <li className='listitem'><a href="">오토스케일링</a></li>
                      <li className='listitem'><a href="">로드발랜서</a></li>
                      <li className='listitem'><a href="">데이터베이스 (인스턴스)</a></li>
                      <li className='listitem'><a href="">MS-SQL / Windows</a></li>
                  </ul>
                </Mybox>
              </div>
              
              <div className='left-menu'>
                <div className='left-menu-box'>
                  <SidebarTitle>Kubernetes Cluster</SidebarTitle>
                <Mybox className='sidebarlist'>
                  <p className='sidebarlist-title'>Application</p>
                    <ul>
                      <li className='listitem'><a href="#">Elastic Search</a></li>
                      <li className='listitem'><a href="">Kafka</a></li>
                      <li className='listitem'><a href="">RabbitMQ</a></li>
                  </ul>
                </Mybox>
                </div>
                
                <div className='left-menu-box'>
                  <Mybox className='sidebarlist'>
                  <p className='sidebarlist-title'>Database</p>
                    <ul>
                      <li className='listitem'><a href="#">MySQL</a></li>
                      <li className='listitem'><a href="">PostgreSQL</a></li>
                      <li className='listitem'><a href="">Vitess</a></li>
                      <li className='listitem'><a href="">MongoDB</a></li>
                      <li className='listitem'><a href="">Redis</a></li>
                      <li className='listitem'><a href="">ScyllaDB</a></li>
                      <li className='listitem'><a href="">ClickHouse</a></li>
                  </ul>
                </Mybox>
                </div>
              </div>
              
              <div className='left-menu'>
                <SidebarTitle>Storage</SidebarTitle>
                <Mybox className='sidebarlist'>
                    <ul>
                      <li className='listitem'><a href="#">오브젝트 Storage</a></li>
                      <li className='listitem'><a href="">불록 Storage</a></li>
                      <li className='listitem'><a href="">공유 Storage</a></li>
                  </ul>
                </Mybox>
              </div>
            </Col>
            <Col md={9}>Sidebar</Col>
        </Row> */}
    </Container>
    
  )
}

export default Sidebar