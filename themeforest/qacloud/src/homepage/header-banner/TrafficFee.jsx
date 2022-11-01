

import React from 'react';
import styled from 'styled-components';
function TrafficFee() {
  return (
    <Box>
      <div >
        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h2 style={StySpecification.Title}>트래픽요금안내</h2>
            </div>
          </div>
          <div style={StySpecification.ListProduct}>
            <table width="100%">
              <tbody >
                <tr style={StySpecification.Header}>
                  <td  width="32%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}>구분</div></td>
                  <td  width="36%" >구간	</td>
                  <td  width="32%" style={StySpecification.BorRight}>요금 (GB/월) </td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>한비로 Cloud 서비스통신구간</div> </td>
                  <td style={StySpecification.BorAll}></td>
                  <td style={StySpecification.BorAll}>무료</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>인바운드 트래픽	</div></td>
                  <td style={StySpecification.BorAll}></td>
                  <td style={StySpecification.BorAll}>무료</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>아웃바운드 트래픽 (기본)	</div></td>
                  <td style={StySpecification.BorAll}>900 GB / 월	</td>
                  <td style={StySpecification.BorAll}>무료</td>
                </tr>
                
                <tr>
                  <td rowSpan={5} style={StySpecification.TextLeft}><text>국내망 아웃바운드 트래픽 <br/>(초과사용)</text></td>
                  <td style={StySpecification.BorAll}><div style={StySpecification.TextContent}>1 G ~ 1,000 G</div></td>
                  <td style={StySpecification.BorAll}>70 원</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.TextContent}>1,001 G ~ 2,000 G</div></td>
                  <td style={StySpecification.BorAll}>60 원</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.TextContent}>2,001 G ~ 3,000 G</div></td>
                  <td style={StySpecification.BorAll}>50 원</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.TextContent}>3,001 G ~ 4,000 G</div></td>
                  <td style={StySpecification.BorAll}>40 원</td>
                </tr>
                <tr>
                  <td style={StySpecification.BorAll}><div style={StySpecification.TextContent}>4,001 G ~</div></td>
                  <td style={StySpecification.BorAll}>30 원</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}>해외망 아웃바운드 트래픽 <br/>(초과사용)</td>
                  <td style={StySpecification.BorAll}>국내망과 동일	</td>
                  <td style={StySpecification.BorAll}></td>
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
    marginTop:"20px",
    marginBottom:"30px"
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
