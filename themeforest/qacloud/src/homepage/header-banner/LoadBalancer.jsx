

import React from 'react';
import styled from 'styled-components';
import TrafficFeeV1 from './TrafficFeeV1';
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
          <div style={StySpecification.TableScroll}>
            <div style={StySpecification.TableWrap}>
              <div style={StySpecification.ListProduct}>
                <table width="100%">
                  <tbody >
                    <tr style={StySpecification.Header}>
                      <td width="32%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}><b>구분</b></div></td>
                      <td width="36%" ><b>서비스비용(일)</b></td>
                      <td width="32%" style={StySpecification.BorRight}><b>서비스비용(월)</b></td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>하드웨어	</div> </td>
                      <td style={StySpecification.BorAll}>570	</td>
                      <td style={StySpecification.BorAll}>20,000 원</td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>트래픽	</div></td>
                      <td style={StySpecification.BorAll} colSpan={2}>무료</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <TrafficFeeV1/>
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
    marginTop: 30,
    marginBottom: 30,
  },
  ListProduct: {
    fontSize: "110%",
  },

  Title: {
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "30px",
    fontSize:"16pt"
  },
  Header: {
    color: "white",
    background: "#393939",
  },
  TextTitle: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  TextContent: {
    paddingTop: 7,
    paddingBottom: 7,
  },
  BorLeft: {
    borderTopLeftRadius: "8px",
    borderRight: "2px solid #F4F4F4",
  },
  BorRight: {
    borderTopRightRadius: "8px",
    borderLeft: "2px solid #F4F4F4",
  },
  BorAll: {
    borderLeft: "2px solid #DDDDDD",
    borderRight: "2px solid #DDDDDD",
    borderBottom: "2px solid #DDDDDD",
  },
  TextLeft: {
    borderLeft: "2px solid #DDDDDD",
    borderRight: "2px solid #DDDDDD",
    borderBottom: "2px solid #DDDDDD",
    fontWeight: 600,
    paddingLeft: "10px"
  }
}
const Box = styled.div`
  @media only screen and (max-width: 767px){
    font-size: 80%;
  }
`

export default TrafficFee;
