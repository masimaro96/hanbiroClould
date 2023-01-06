import React from 'react';
import styled from 'styled-components';



function TableTwoColumns() {
  return (
    <Box >
      <div>
          <div style={StySpecification.ListProduct}>
            <table width="100%">
              <tbody >
                <tr style={StySpecification.Header}>
                  <td  width="30%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}>구분</div></td>
                  <td  width="70%" style={StySpecification.BorRight}><div style={StySpecification.TextTitle}>내용</div></td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}><b>API</b></div></td>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}>gRPC / GraphQL / Rest API /Web RPC / Web Socket</div></td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}><b>Back-end 개발언어</b></div></td>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}>주요개발언어 : GoLang<br />기타개발언어 : PHP / Python / C / C++ / Ruby</div></td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}><b>Front-end 개발언어</b></div></td>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}>주요개발언어 : ReactJS / TypeScript<br />기타개발언어 : VueJS / AngularJS / Javascript</div></td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}><b>Mobile (iOS/Android)</b></div></td>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}>Flutter (Cross-Platform)</div></td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}><b>Desktop (MS/Mac/Linux)</b></div></td>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}>Electron (Cross-Platform)</div></td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}><b>Database</b></div></td>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}>주요 DB) MongoDB / Vitess / ClickHouse / RabbitMQ / Redis<br />기타 DB) MySQL / Scylla / Cassandra / PostgreSQL</div></td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}><b>Application</b></div></td>
                  <td style={StySpecification.BorAll}><div style={StySpecification.Text}>Kafka / Elastic Search</div></td>
                </tr>
              </tbody>
            </table>
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
  TextTitle:{
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  Text: {
    marginLeft: "10px",
    marginRight: "10px",
  },
  Header:{
    color: "white",
    background: "#393939",
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


