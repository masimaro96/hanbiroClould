

import React from 'react';
import styled from 'styled-components';
function TrafficFee() {
  return (
    <Box>
      <div >
        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h2 style={StySpecification.Title}>OBJECT 스토리지 요금안내</h2>
              <p style={StySpecification.Text}>
                <text>API Endpoint 호출수 무료정책은 이벤트기간 종료시 요금정책이 변경됩니다.</text>
              </p>
            </div>
          </div>
          <div style={StySpecification.ListProduct}>
            <table width="100%">
              <tbody >
                <tr style={StySpecification.Header}>
                  <td  width="21%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}>구분</div></td>
                  <td  width="21%" >서비스비용(일)</td>
                  <td  width="21%" >서비스비용(월)</td>
                  <td  width="37%" style={StySpecification.BorRight}>비고</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>저장용량	</div> </td>
                  <td style={StySpecification.BorAll}>15원 (1G)	</td>
                  <td style={StySpecification.BorAll}>450원 (1G)	</td>
                  <td style={StySpecification.BorAll}></td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>API 요청수 (전체)		</div> </td>
                  <td style={StySpecification.BorAll} colSpan={2}>무료 (이벤트기간)		</td>
                  <td style={StySpecification.BorAll}>모든 API EndPoint</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>트래픽		</div> </td>
                  <td style={StySpecification.BorAll}>30G 까지 무료	</td>
                  <td style={StySpecification.BorAll}>900G 까지 무료 </td>
                  <td style={StySpecification.BorAll}>기본제공초과시 구간트래픽요금적용</td>
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
    border: "1px solid #D7E5ED",
    borderRadius: "8px",
    padding: 20,
    marginTop:30
  },
  ListProduct:{
    fontSize: "110%",
  },
 
  Title:{
    fontWeight: "bold",
  },
  Header:{
    color: "white",
    background: "#393939",
  },
  TextTitle:{
    paddingTop: 8,
    paddingBottom: 8,
  },
  TextContent:{
    paddingTop: 7,
    paddingBottom: 7,
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

export default TrafficFee;