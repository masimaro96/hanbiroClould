import React from 'react';
import styled from 'styled-components';

function DetailContent(){

  return (
    <Box >
      <div>
        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h2 style={StySpecification.Title}>아이피 사용요금안내</h2>
            </div>
          </div>
          <div style={StySpecification.ListProduct}>
            <table width="100%">
              <tbody >
                <tr style={StySpecification.Header}>
                  <td  width="30%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}>구분</div></td>
                  <td  width="40%" >내용	</td>
                  <td  width="30%" style={StySpecification.BorRight}>요금 (/월)</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}>아이피추가		</td>
                  <td style={StySpecification.BorAll}>1대의 가상서버 아이피 최대 3개추가	</td>
                  <td style={StySpecification.BorAll}>3,000 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h2 style={StySpecification.Title}>운영체제 및 데이터베이스 지원</h2>
            </div>
          </div>
          <div style={StySpecification.ListProduct}>
            <table width="100%">
              <tbody >
                <tr style={StySpecification.Header}>
                  <td  width="30%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}>구분</div></td>
                  <td  width="50%" >종류	</td>
                  <td  width="20%" style={StySpecification.BorRight}>요금</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}>리눅스		</td>
                  <td style={StySpecification.BorAll}>CentOS, Rocky Linux, Ubuntu, Debian		</td>
                  <td rowSpan="4" style={StySpecification.BorAll}>Microsoft<br/>라이센스<br/>요금정책별도</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}>윈도우		</td>
                  <td style={StySpecification.BorAll}>Windows 2012~2019 Server (64비트)<br/>
                                                      MS-SQL 2012 ~ 2019 Standard (64비트)</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}>데이터베이스</td>
                  <td style={StySpecification.BorAll}>MySQL, PostgreSQL, Redis, MongoDB<br/>
                                                      scyllaDB, Vitess, ClickHouse</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}>쿠버네티스 클러스터	</td>
                  <td style={StySpecification.BorAll}>Nginx, Kong, Envoy, Kafka, ELK stack<br/>
                                                      Kubernetes Database Cluster</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br/>
      </div>
    </Box>


  );
}


const StySpecification = {
  StylesContainer: {
    boxShadow: "0px 0px 10px #e7eaf3",
    borderRadius: "8px",
    padding: 20,
    marginBottom:30,
    marginTop: 30,
  },
  ListProduct:{
    fontSize: "110%",
    paddingBottom: 20,
  },
  Title:{
    fontWeight: "bold",
    paddingBottom: 20,
    paddingTop: 10,
  },
  Header:{
    color: "white",
    background: "#393939",
  },
  TextTitle:{
    paddingTop: 8,
    paddingBottom: 8,
  },
  BorLeft:{
    borderTopLeftRadius: "8px",
    borderRight:"2px solid #F4F4F4",
  },
  BorRight:{
    borderTopRightRadius: "8px",
    borderLeft:"2px solid #F4F4F4",
  },
  BorAll:{
    borderLeft:"2px solid #DDDDDD",
    borderRight:"2px solid #DDDDDD",
    borderBottom:"2px solid #DDDDDD",
    paddingTop: 8,
    paddingBottom: 8,
  },
  TextLeft:{
    borderLeft:"2px solid #DDDDDD",
    borderRight:"2px solid #DDDDDD",
    borderBottom:"2px solid #DDDDDD",
    fontWeight: 600,
    textAlign: "left",
    paddingLeft:"10px"
  }
}

const Box = styled.div`
  @media only screen and (max-width: 767px){
    font-size: 80%;
  }
`

export default DetailContent;

