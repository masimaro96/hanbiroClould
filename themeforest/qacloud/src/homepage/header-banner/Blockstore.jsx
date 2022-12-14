

import React from 'react';
import styled from 'styled-components';
import TrafficFeeV1 from './TrafficFeeV1';
function TrafficFee({ title }) {
  return (
    <Box>
      <div >
        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h2 style={StySpecification.Title}>{title}</h2>
            </div>
          </div>
          <div style={StySpecification.TableScroll}>
            <div style={StySpecification.TableWrap}>
              <div style={StySpecification.ListProduct}>
                <table width="100%">
                  <tbody >
                    <tr style={StySpecification.Header}>
                      <td width="22%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}><b>구분</b></div></td>
                      <td width="17%" ><b>최소볼륨	</b></td>
                      <td width="17%" ><b>최대볼륨	</b></td>
                      <td width="22%" ><b>서비스비용(일)	</b></td>
                      <td width="22%" style={StySpecification.BorRight}><b>서비스비용(월)</b></td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>블록 Storage</div> </td>
                      <td style={StySpecification.BorAll}>50G	</td>
                      <td style={StySpecification.BorAll}>2T	</td>
                      <td style={StySpecification.BorAll}>1.5원 (1G)</td>
                      <td style={StySpecification.BorAll}>45원 (1G)</td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>트래픽	</div> </td>
                      <td style={StySpecification.BorAll} colSpan={2}>-		</td>

                      <td style={StySpecification.BorAll} colSpan={2}>무료</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div style={StySpecification.StylesCenter}></div>
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
  StylesCenter: {
    display: "flex",
    width: "100%",
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
    textAlign: "left",
    paddingLeft: "10px"
  },
  TableScroll:{
    position:"relative",
    width: "100%",
    margin:"auto",
    overflow:"hidden", 
    whiteSpace: "nowrap",
  },
  TableWrap:{
    width:"100%",
    overflow:"auto",
  }
}
const Box = styled.div`
  @media only screen and (max-width: 767px){
    font-size: 80%;
  }
`

export default TrafficFee;
