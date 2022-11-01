

import React from 'react';
import styled from 'styled-components';
function TrafficFee() {
  return (
    <Box>
      <div >
        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h2 style={StySpecification.Title}>Load Balancer</h2>
            </div>
          </div>
          <div style={StySpecification.ListProduct}>
            <table width="100%">
              <tbody >
                <tr style={StySpecification.Header}>
                  <td  width="32%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}>구분</div></td>
                  <td  width="36%" >서비스비용(일)</td>
                  <td  width="32%" style={StySpecification.BorRight}>서비스비용(월)</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>하드웨어	</div> </td>
                  <td style={StySpecification.BorAll}>570	</td>
                  <td style={StySpecification.BorAll}>20,000 원</td>
                </tr>
                <tr>
                  <td  style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>트래픽	</div></td>
                  <td style={StySpecification.BorAll} colSpan={2}>무료</td>
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
    paddingLeft:"10px"
  }
}
const Box = styled.div`
  @media only screen and (max-width: 767px){
    font-size: 80%;
  }
`

export default TrafficFee;
