
import { Diversity1Outlined } from '@mui/icons-material';
import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';




function TrafficFee() {
  return (
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
                <td  width="30%" style={StySpecification.BorLeft}>구분	</td>
                <td  width="40%" >구간	</td>
                <td  width="30%" style={StySpecification.BorRight}>요금 (GB/월)</td>
              </tr>
              <tr>
                <td  style={StySpecification.TextLeft}>한비로 Cloud 서비스통신구간		</td>
                <td style={StySpecification.BorAll}></td>
                <td style={StySpecification.BorAll}>무료</td>
              </tr>
              <tr>
                <td  style={StySpecification.TextLeft}>인바운드 트래픽			</td>
                <td style={StySpecification.BorAll}></td>
                <td style={StySpecification.BorAll}>무료</td>
              </tr>
              <tr>
                <td  style={StySpecification.TextLeft}>아웃바운드 트래픽 (기본)				</td>
                <td style={StySpecification.BorAll}>900 GB / 월	</td>
                <td style={StySpecification.BorAll}>무료</td>
              </tr>
              
              <tr>
                <td rowSpan={5} style={StySpecification.TextLeft}><text>국내망 아웃바운드 트래픽 (초과사용)</text></td>
                <td style={StySpecification.BorAll}>1 G ~ 1,000 G</td>
                <td style={StySpecification.BorAll}>70 원</td>
              </tr>
              <tr>
                <td style={StySpecification.BorAll}>1 G ~ 1,000 G</td>
                <td style={StySpecification.BorAll}>70 원</td>
              </tr>
              <tr>
                <td style={StySpecification.BorAll}>1 G ~ 1,000 G</td>
                <td style={StySpecification.BorAll}>70 원</td>
              </tr>
              <tr>
                <td style={StySpecification.BorAll}>1 G ~ 1,000 G</td>
                <td style={StySpecification.BorAll}>70 원</td>
              </tr>
              <tr>
                <td style={StySpecification.BorAll}>1 G ~ 1,000 G</td>
                <td style={StySpecification.BorAll}>70 원</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>


  );
}


const StySpecification = {
  StylesContainer: {
    border: "1px solid #D7E5ED",
    borderRadius: "8px",
    padding: 20,
  },
  ListProduct:{
    fontSize: 17,
  },
 
  Title:{
    fontWeight: "bold",
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
  },
  TextLeft:{
    borderLeft:"2px solid #DDDDDD",
    borderRight:"2px solid #DDDDDD",
    borderBottom:"2px solid #DDDDDD",
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft:"10px"
  }
}


export default TrafficFee;
