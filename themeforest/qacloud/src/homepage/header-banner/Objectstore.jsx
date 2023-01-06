

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
              <h2 style={StySpecification.Title}>OBJECT 스토리지 요금안내</h2>
              <p style={StySpecification.Text}>
                <text>API Endpoint 호출수 무료정책은 이벤트기간 종료시 요금정책이 변경됩니다.</text>
              </p>
            </div>
          </div>
          <div style={StySpecification.TableScroll}>
            <div style={StySpecification.TableWrap}>
              <div style={StySpecification.ListProduct}>
                <table width="100%">
                  <tbody >
                    <tr style={StySpecification.Header}>
                      <td width="21%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}><b>구분</b></div></td>
                      <td width="21%" ><b>서비스비용(일)</b></td>
                      <td width="21%" ><b>서비스비용(월)</b></td>
                      <td width="37%" style={StySpecification.BorRight}><b>비고</b></td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>저장용량	</div> </td>
                      <td style={StySpecification.BorAll}>1.5원 (1G)	</td>
                      <td style={StySpecification.BorAll}>45원 (1G)	</td>
                      <td style={StySpecification.BorAll}></td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>API 요청수 (전체)		</div> </td>
                      <td style={StySpecification.BorAll} colSpan={2}>무료 (이벤트기간)		</td>
                      <td style={StySpecification.BorAll}>모든 API EndPoint</td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>트래픽		</div> </td>
                      <td style={StySpecification.BorAll}>30G 까지 무료	</td>
                      <td style={StySpecification.BorAll}>900G 까지 무료 </td>
                      <td style={StySpecification.BorAll}>기본제공초과시 구간트래픽요금적용</td>
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
    marginBottom: "30px"
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

  TableScroll: {
    position: "relative",
    width: "100%",
    margin: "auto",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  TableWrap: {
    width: "100%",
    overflow: "auto",
  }
}
const Box = styled.div`
  @media only screen and (max-width: 767px){
    font-size: 80%;
  }
`

export default TrafficFee;
