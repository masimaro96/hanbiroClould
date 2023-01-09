
import React from 'react';
import styled from 'styled-components';
import DetailContent from '../../container/Table/Components/detail-content';

function TrafficFee() {
  return (
    <Box>
      <div >
        <div >
          <div >
            <div >
              <h2 style={StySpecification.Title}>트래픽요금안내</h2>
            </div>
          </div>
          <div style={StySpecification.TableScroll}>
            <div style={StySpecification.TableWrap}>
              <div style={StySpecification.ListProduct}>
                <table width="100%">
                  <tbody >
                    <tr style={StySpecification.Header}>
                      <td width="32%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}><b>구분</b></div></td>
                      <td width="36%" ><b>구간</b>	</td>
                      <td width="32%" style={StySpecification.BorRight}><b>요금 (GB/월)</b> </td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>한비로 Cloud 서비스통신구간</div> </td>
                      <td style={StySpecification.BorAll}></td>
                      <td style={StySpecification.BorAll}>무료</td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>인바운드 트래픽	</div></td>
                      <td style={StySpecification.BorAll}></td>
                      <td style={StySpecification.BorAll}>무료</td>
                    </tr>
                    <tr>
                      <td style={StySpecification.TextLeft}><div style={StySpecification.TextContent}>아웃바운드 트래픽 (기본)	</div></td>
                      <td style={StySpecification.BorAll}>900 GB / 월	</td>
                      <td style={StySpecification.BorAll}>무료</td>
                    </tr>

                    <tr>
                      <td rowSpan={5} style={StySpecification.TextLeft}><text>국내망 아웃바운드 트래픽 <br />(초과사용)</text></td>
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
                      <td style={StySpecification.TextLeft}>해외망 아웃바운드 트래픽 <br />(초과사용)</td>
                      <td style={StySpecification.BorAll}>국내망과 동일	</td>
                      <td style={StySpecification.BorAll}></td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <DetailContent />
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
  },
  KindLeft:{
    textAlign: "left",
    paddingLeft: 10,
  },
}
const Box = styled.div`
 
`

export default TrafficFee;
