import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import '../Sidebar/sidebar.css';
import { useHistory, NavLink } from "react-router-dom";
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
  font-size: 20px;;
`

const Sidebar = (props) => {
  const currentRoute = useHistory().location.pathname.toLowerCase();
  return (
    <>
      <div className="sidebardesk">
        <div className='left-menu'>
          <SidebarTitle>Server</SidebarTitle>
          <Mybox className='sidebarlist'>
              <ul>
                <li className={currentRoute.includes("compute-vps") ? "tab active" : "tab"} active><Link to="/compute-vps">가상서버 (인스턴스)</Link></li>
                <li className={currentRoute.includes("compute-bare-metal") ? "tab active" : "tab"}><Link to="/compute-bare-metal">베어메탈 서버 (단독서버)</Link></li>
                <li className={currentRoute.includes("compute-auto-scale") ? "tab active" : "tab"}><Link to="/compute-auto-scale">오토스케일링</Link></li>
                <li className={currentRoute.includes("compute-load-balance") ? "tab active" : "tab"}><Link to="/compute-load-balance">로드발랜서</Link></li>
                <li className={currentRoute.includes("compute-database") ? "tab active" : "tab"}><Link to="/compute-database">데이터베이스 (인스턴스)</Link></li>
                <li className={currentRoute.includes("compute-ms") ? "tab active" : "tab"}><NavLink to="/compute-ms">MS-SQL / Windows</NavLink></li>
            </ul>
          </Mybox>
        </div>
        
        <div className='left-menu'>
          <div className='left-menu-box'>
            <SidebarTitle>Kubernetes Cluster</SidebarTitle>
          <Mybox className='sidebarlist'>
            <p className='sidebarlist-title'>Application</p>
              <ul>
                <li className={currentRoute.includes("cluster-cloud-elastic-search") ? "tab active" : "tab"}><Link to="/cluster-cloud-elastic-search">Elastic Search</Link></li>
                <li className={currentRoute.includes("cluster-kafka") ? "tab active" : "tab"}><Link to="/cluster-kafka">Kafka</Link></li>
                <li className={currentRoute.includes("cluster-cloud-rabbitmq") ? "tab active" : "tab"}><Link to="/cluster-cloud-rabbitmq">RabbitMQ</Link></li>
            </ul>
          </Mybox>
          </div>
          
          <div className='left-menu-box'>
            <Mybox className='sidebarlist'>
            <p className='sidebarlist-title'>Database</p>
              <ul>
                <li className={currentRoute.includes("cluster-cloud-mysql-db") ? "tab active" : "tab"}><Link to="/cluster-cloud-mysql-db">MySQL</Link></li>
                <li className={currentRoute.includes("cluster-cloud-postgresql-db") ? "tab active" : "tab"}><Link to="/cluster-cloud-postgresql-db">PostgreSQL</Link></li>
                <li className={currentRoute.includes("cluster-cloud-vitess") ? "tab active" : "tab"}><Link to="/cluster-cloud-vitess">Vitess</Link></li>
                <li className={currentRoute.includes("cluster-cloud-mongodb") ? "tab active" : "tab"}><Link to="/cluster-cloud-mongodb">MongoDB</Link></li>
                <li className={currentRoute.includes("cluster-cloud-redis") ? "tab active" : "tab"}><Link to="/cluster-cloud-redis">Redis</Link></li>
                <li className={currentRoute.includes("cluster-cloud-scylladb") ? "tab active" : "tab"}><Link to="/cluster-cloud-scylladb">ScyllaDB</Link></li>
                <li className={currentRoute.includes("cluster-clickhouse") ? "tab active" : "tab"}><Link to="/cluster-clickhouse">ClickHouse</Link></li>
            </ul>
          </Mybox>
          </div>
        </div>
        
        <div className='left-menu'>
          <SidebarTitle>Storage</SidebarTitle>
          <Mybox className='sidebarlist'>
              <ul>
                <li className={currentRoute.includes("store-object-store") ? "tab active" : "tab"}><Link to="/store-object-store">오브젝트 Storage</Link></li>
                <li className={currentRoute.includes("store-block-store") ? "tab active" : "tab"}><Link to="/store-block-store">불록 Storage</Link></li>
                <li className={currentRoute.includes("store-nas-store") ? "tab active" : "tab"}><Link to="/store-nas-store">공유 Storage</Link></li>
            </ul>
          </Mybox>
        </div>
      </div>
    </>
  );
}

export default Sidebar