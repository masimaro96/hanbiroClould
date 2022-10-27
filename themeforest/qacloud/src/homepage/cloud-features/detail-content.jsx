import React from 'react';
// import './App.css';
import './style.css';
import styled from 'styled-components';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';
import { WheelchairPickupTwoTone } from '@mui/icons-material';
import { lightBlue } from '@mui/material/colors';

function DetailContent(){

  return (
    <Container >
      <br/>
      <table className="big_table">
          <h2 ><b>아이피 사용요금안내</b></h2>
          <table className="small_table">
            <tbody >
              <tr >
                <td className="headline" width="30%">구분</td>
                <td className="headline" width="40%">내용</td>
                <td className="headline" width="30%">요금 (월)</td>
              </tr>
              <tr>
                <td><text><b>아이피추가</b></text></td>
                <td><text>1대의 가상서버 아이피 최대 3개추가</text></td>
                <td><text>3,000 원</text></td>
              </tr>
            </tbody>
          </table>
      </table>
      <br/>
      <table className="big_table second">
          <h2 ><b>운영체제 및 데이터베이스 지원</b></h2>
          <table className="small_table" >
              <tr >
                <td className="headline" width="30%">구분</td>
                <td className="headline" width="50%">종류</td>
                <td className="headline" width="20%">요금</td>
              </tr>
              <tr>
                <td><text><b>리눅스</b></text></td>
                <td><text>CentOS, Rocky Linux, Ubuntu, Debian</text></td>
                <td rowspan="4"><text>Microsoft<br/>라이센스<br/>요금정책별도</text></td>
              </tr>
              <tr>
                <td><text><b>윈도우</b></text></td>
                <td><text>Windows 2012~2019 Server (64비트)<br/>
                    MS-SQL 2012 ~ 2019 Standard (64비트)</text></td>
              </tr>
              <tr>
                <td><text><b>데이터베이스</b></text></td>
                <td><text>MySQL, PostgreSQL, Redis, MongoDB<br/>
                    scyllaDB, Vitess, ClickHouse</text></td>
              </tr>
              <tr>
                <td><text><b>쿠버네티스 클러스터</b></text></td>
                <td><text>Nginx, Kong, Envoy, Kafka, ELK stack<br/>
                    Kubernetes Database Cluster</text></td>
              </tr>
          </table>
      </table>
      <br/>
    </Container>
    
  );
};

export default DetailContent;


