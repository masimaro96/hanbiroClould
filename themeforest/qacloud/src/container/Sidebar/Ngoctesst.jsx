import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import '../Sidebar/sidebar.css';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
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
`

function Ngoctesst({ name, ...props }) {
  return (
    <>
      <div className="sidebartest">
      <Accordion className='box-detail'>
        <AccordionSummary>  
        <SidebarTitle>Server</SidebarTitle>
          <ChevronDownIcon className='menu-icon'/>
        </AccordionSummary>
        <AccordionDetails>
          <div className='left-menu'>
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
        </AccordionDetails>
      </Accordion>

      <Accordion className='box-detail'>
        <AccordionSummary>  
        <SidebarTitle>Kubernetes Cluster</SidebarTitle>
          <ChevronDownIcon className='menu-icon'/>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion className='box-detail'>
            <AccordionSummary>  
            <SidebarTitle>Application</SidebarTitle>
              <ChevronDownIcon className='menu-icon'/>
            </AccordionSummary>
            <AccordionDetails>
              <div className='left-menu'>
                <Mybox className='sidebarlist'>
                    <ul>
                      <li className='listitem'><Link to="/cluster-cloud-elastic-search">Elastic Search</Link></li>
                      <li className='listitem'><Link to="/cluster-kafka">Kafka</Link></li>
                      <li className='listitem'><Link to="/cluster-cloud-rabbitmq">RabbitMQ</Link></li>
                  </ul>
                </Mybox>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion className='box-detail'>
            <AccordionSummary>  
            <SidebarTitle>Database</SidebarTitle>
              <ChevronDownIcon className='menu-icon'/>
            </AccordionSummary>
            <AccordionDetails>
              <div className='left-menu'>
                <Mybox className='sidebarlist'>
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
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      <Accordion className='box-detail'>
        <AccordionSummary>  
        <SidebarTitle>Server</SidebarTitle>
          <ChevronDownIcon className='menu-icon'/>
        </AccordionSummary>
        <AccordionDetails>
          <div className='left-menu'>
          <Mybox className='sidebarlist'>
              <ul>
                <li className='listitem'><Link to="/store-object-store">오브젝트 Storage</Link></li>
                <li className='listitem'><Link to="/store-block-store">불록 Storage</Link></li>
                <li className='listitem'><Link to="/store-nas-store">공유 Storage</Link></li>
            </ul>
          </Mybox>
          </div>
        </AccordionDetails>
      </Accordion>

      </div>

    </>
  );
}

export default Ngoctesst