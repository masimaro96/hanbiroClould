import React, { useState } from 'react';

import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { useHistory, NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

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

function MicroSidebar(props) {
    const currentRoute = useHistory().location.pathname.toLowerCase();
  return (
    <>
      <div  className="sidebardesk">
        <div className='left-menu'>
          <Mybox className='sidebarlist'>
              <ul id="sub-menu">
                <li className={currentRoute.includes("msa1") ? "tab active" : "tab"}><Link to="/msa1">마이크로서비스 기반개발이란</Link></li>
                <li className={currentRoute.includes("msa2") ? "tab active" : "tab"}><Link to="/msa2">마이크로서비스개발의 필수요소들</Link></li>
            </ul>
          </Mybox>
        </div>
      </div>
    </>
  );
}

export default MicroSidebar