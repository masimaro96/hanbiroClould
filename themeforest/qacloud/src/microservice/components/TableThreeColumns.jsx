import React from 'react';
import styled from 'styled-components';


function TableThreeColumns() {

  return (
    <Box >
      <div>
        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h5 style={StySpecification.Title}>모노리스개발방식과 비교한 마이크로서비스 개발의 효과</h5>
            </div>
          </div>
          <div style={StySpecification.ListProduct}>
            <table width="100%">
              <tbody >
                <tr style={StySpecification.Header}>
                  <td  width="32%" style={StySpecification.BorLeft}><div style={StySpecification.TextTitle}>구분</div></td>
                  <td  width="36%" >상세내용</td>
                  <td  width="32%" style={StySpecification.BorRight}>효과</td>
                </tr>
                <tr>
                  <td  style={StySpecification.BorAll}>프로그램 배포속도</td>
                  <td style={StySpecification.BorAll}>개발 -&gt; 테스트 -&gt; 검증 -&gt; 운영</td>
                  <td style={StySpecification.BorAll}>160% 향상 (5일 -&gt; 2일)</td>
                </tr>
                <tr>
                  <td  style={StySpecification.BorAll}>서버자원사용</td>
                  <td style={StySpecification.BorAll}>클러스터자원 통합관리</td>
                  <td style={StySpecification.BorAll}>서버자원 사용량 80% 감소</td>
                </tr>
                <tr>
                  <td  style={StySpecification.BorAll}>서버운영관리</td>
                  <td style={StySpecification.BorAll}>서비스및 하드웨어 운영지원</td>
                  <td style={StySpecification.BorAll}>서버관리요소 90% 감소</td>
                </tr>
                <tr>
                  <td  style={StySpecification.BorAll}>롤백 / 복구속도</td>
                  <td style={StySpecification.BorAll}>어플리케이션 원복 / 복구</td>
                  <td style={StySpecification.BorAll}>300% 빠른 회귀(10분미만)</td>
                </tr>
                <tr>
                  <td  style={StySpecification.BorAll}>소통비용</td>
                  <td style={StySpecification.BorAll}>개발 / 운영 / 테스트</td>
                  <td style={StySpecification.BorAll}>0% 이상 비용절감</td>
                </tr>
              </tbody>
            </table>
            <div style={StySpecification.TextRight}>• 출처 : Cocktail Cloud Use Cases White Paper (Acomsoft, 2018)</div>
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

export default TableThreeColumns;


