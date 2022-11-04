import React from 'react';
import styled from 'styled-components';



function TableTwoColumns() {
  return (
    <Box >
      <div>
        <div style={StySpecification.StylesContainer}>
          <div style={StySpecification.ListProduct}>
            <table width="100%">
              <tbody >
                <tr style={StySpecification.Header}>
                  <td  width="30%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}>구분</div></td>
                  <td  width="70%" style={StySpecification.BorRight}>내용</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}>API</td>
                  <td style={StySpecification.BorAll}>gRPC / GraphQL / Rest API /Web RPC / Web Socket</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}>Back-end 개발언어</td>
                  <td style={StySpecification.BorAll}>주요개발언어 : GoLang<br />기타개발언어 : PHP / Python / C / C++ / Ruby</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}>Front-end 개발언어</td>
                  <td style={StySpecification.BorAll}>주요개발언어 : ReactJS / TypeScript<br />기타개발언어 : VueJS / AngularJS / Javascript</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}>Mobile (iOS/Android)</td>
                  <td style={StySpecification.BorAll}>Flutter (Cross-Platform)</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}>Desktop (MS/Mac/Linux)</td>
                  <td style={StySpecification.BorAll}>Electron (Cross-Platform)</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}>Database</td>
                  <td style={StySpecification.BorAll}>주요 DB) MongoDB / Vitess / ClickHouse / RabbitMQ / Redis<br />기타 DB) MySQL / Scylla / Cassandra / PostgreSQL</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}>Application</td>
                  <td style={StySpecification.BorAll}>Kafka / Elastic Search</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Box>


  );
}

const StySpecification = {
  StylesContainer: {
    boxShadow: "0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)",
    border: "1px solid #E7EAF3",
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
  KindLeft:{
    textAlign: "left",
  },
  TextLeft:{
    borderLeft:"2px solid #DDDDDD",
    borderRight:"2px solid #DDDDDD",
    borderBottom:"2px solid #DDDDDD",
    fontWeight: 600,
    textAlign: "left",
    paddingLeft:"10px"
  },
  TextRight:{
    marginTop: "5px",
    fontSize: "10pt",
    textAlign: "right",
  }
}

const Box = styled.div`
  @media only screen and (max-width: 767px){
    font-size: 80%;
  }
`

export default TableTwoColumns;


