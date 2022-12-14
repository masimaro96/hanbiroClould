import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import '../Sidebar/sidebar.css';
import { Link } from 'react-router-dom';
import { useHistory, NavLink } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';



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

function Sidebarmobile() {
  const currentRoute = useHistory().location.pathname.toLowerCase();
  return (
    <Accordion defaultActiveKey="0" className='detailpage'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Server</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ul className='sidebar-mobile'>
              <li className={currentRoute.includes("compute-vps") ? "tab active" : "tab"} active><Link to="/compute-vps">가상서버 (인스턴스)</Link></li>
              <li className={currentRoute.includes("compute-bare-metal") ? "tab active" : "tab"}><Link to="/compute-bare-metal">베어메탈 서버 (단독서버)</Link></li>
              <li className={currentRoute.includes("compute-auto-scale") ? "tab active" : "tab"}><Link to="/compute-auto-scale">오토스케일링</Link></li>
              <li className={currentRoute.includes("compute-load-balance") ? "tab active" : "tab"}><Link to="/compute-load-balance">로드발랜서</Link></li>
              <li className={currentRoute.includes("compute-database") ? "tab active" : "tab"}><Link to="/compute-database">데이터베이스 (인스턴스)</Link></li>
              <li className={currentRoute.includes("compute-ms") ? "tab active" : "tab"}><NavLink to="/compute-ms">MS-SQL / Windows</NavLink></li>
              
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
              <ul className='sidebar-mobile'>
                <li className={currentRoute.includes("cluster-cloud-elastic-search") ? "tab active" : "tab"}><Link to="/cluster-cloud-elastic-search">Elastic Search</Link></li>
                <li className={currentRoute.includes("cluster-kafka") ? "tab active" : "tab"}><Link to="/cluster-kafka">Kafka</Link></li>
                <li className={currentRoute.includes("cluster-cloud-rabbitmq") ? "tab active" : "tab"}><Link to="/cluster-cloud-rabbitmq">RabbitMQ</Link></li>
              </ul>
          </div>

          <div className='left-menu-box'>
            <h6>Database</h6>
            <ul className='sidebar-mobile'>
                <li className={currentRoute.includes("cluster-cloud-mysql-db") ? "tab active" : "tab"}><Link to="/cluster-cloud-mysql-db">MySQL</Link></li>
                <li className={currentRoute.includes("cluster-cloud-postgresql-db") ? "tab active" : "tab"}><Link to="/cluster-cloud-postgresql-db">PostgreSQL</Link></li>
                <li className={currentRoute.includes("cluster-cloud-vitess") ? "tab active" : "tab"}><Link to="/cluster-cloud-vitess">Vitess</Link></li>
                <li className={currentRoute.includes("cluster-cloud-mongodb") ? "tab active" : "tab"}><Link to="/cluster-cloud-mongodb">MongoDB</Link></li>
                <li className={currentRoute.includes("cluster-cloud-redis") ? "tab active" : "tab"}><Link to="/cluster-cloud-redis">Redis</Link></li>
                <li className={currentRoute.includes("cluster-cloud-scylladb") ? "tab active" : "tab"}><Link to="/cluster-cloud-scylladb">ScyllaDB</Link></li>
                <li className={currentRoute.includes("cluster-clickhouse") ? "tab active" : "tab"}><Link to="/cluster-clickhouse">ClickHouse</Link></li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Storage</h5>
        </Accordion.Header>
        <Accordion.Body>
            <ul className='sidebar-mobile'>
                <li className={currentRoute.includes("store-object-store") ? "tab active" : "tab"}><Link to="/store-object-store">오브젝트 Storage</Link></li>
                <li className={currentRoute.includes("store-block-store") ? "tab active" : "tab"}><Link to="/store-block-store">불록 Storage</Link></li>
                <li className={currentRoute.includes("store-nas-store") ? "tab active" : "tab"}><Link to="/store-nas-store">공유 Storage</Link></li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h5>Microservice</h5>
        </Accordion.Header>
        <Accordion.Body>
            <ul className='sidebar-mobile'>
                <li className={currentRoute.includes("msa1") ? "tab active" : "tab"}><Link to="/msa1">마이크로서비스 기반개발이란</Link></li>
                <li className={currentRoute.includes("msa2") ? "tab active" : "tab"}><Link to="/msa2">마이크로서비스개발의 필수요소들</Link></li>
            </ul>
        </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}


export default Sidebarmobile