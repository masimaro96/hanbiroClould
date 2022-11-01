

import { padding } from '@mui/system';
import React from 'react';
import styled from 'styled-components';

const ProtitleNew = (params) => {
    return(

        <div style={params.classNameWrapper}>
          <div style={params.classNameItem}>
            <text style={StySpecification.ColorText}>{params.Title} </text>
          </div>
          <div style={params.PadPro}>
            <p><text>{params.Core}</text></p>
            <p><text>{params.G}</text></p>
            <p><text>{params.SD}</text></p>
            <p><text>{params.SG}</text></p>
            <p><text>{params.data5}</text></p>
            <p><text>{params.data6}</text></p>
          </div>
        </div>
    )
}

function ServerPricing() {
  return (
    <Box>
      <div style={StySpecification.StylesAll}>
        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h2 style={StySpecification.Title}>ClickHouse 요금안내</h2>
              <p style={StySpecification.Text}>
                <text>샤딩 및 리플리카, Failover 시스템 기본구성, 대용량 고가용성 분산 클라우드 ClickHouse DBMS</text>
              </p>
            </div>
          </div>
          <div style={StySpecification.ListProduct}>

            {ProtitleNew({
              classNameWrapper: StySpecification.InfPro,
              classNameItem: StySpecification.ProTitleLeft,
              PadPro : StySpecification.PadPro,
              Title: "hi",
              Core: "CPU",
              G: "Memory",
              SD:"Storage",
              SG:"Traffic 전송량(월)",
              data5:"컨테이너최소수량",
              data6:"서비스비용(월)"

            })}

            {ProtitleNew({
              classNameWrapper: StySpecification.InfProduct,
              classNameItem: StySpecification.ProductTitle,
              PadPro : StySpecification.PadPro,
              Title: "스탠다드 상품",
              Core: "1 Core",
              G: "4G",
              SD:"SSD 100G",
              SG:"900G",
              data5:"7 POD, 1 LB",
              data6:"142,500"

            })}
           
            {ProtitleNew({
              classNameWrapper: StySpecification.InfProduct,
              classNameItem: StySpecification.ProductTitle,
              PadPro : StySpecification.PadPro,
              Title: "비지니스",
              Core: "2 Core",
              G: "8G",
              SD:"SSD 100G",
              SG:"900G",
              data5:"7 POD, 1 LB",
              data6:"285,000"
            
            })}
            {ProtitleNew({
              classNameWrapper: StySpecification.InfProduct,
              classNameItem: StySpecification.ProductTitle,
              PadPro : StySpecification.PadPro,
              Title: "엔터프라이즈형",
              Core: "4 Core",
              G: "16G",
              SD:"SSD 100G",
              SG:"900G",
              data5:"7 POD, 1 LB",
              data6:"570,000"
            })} 
          </div>
          <div style={StySpecification.TextContent}>
            
            클러스터 구성단위 컨테이너의 하드웨어를 별도로 지정할 수 있습니다. <br/>

            시스템 엔지니어와 상담을 통해서 다양한 방식으로 쿠베네티스 클러스터 시스템을 구축할 수 있습니다.
          
          </div>
        </div>
      </div>
    </Box>

  );
}


const StySpecification = {
  StylesAll:{
    display: "flex",
  },
  StylesContainer: {
    width: "100%",
    border: "1px solid #D7E5ED",
    borderRadius: "8px",
    padding: 20,
    marginTop:30,
  },
  StylesTitle: {
    textAlign: "center",
  },
  Title:{
    fontWeight: "bold",
  },
  Text:{
    fontWeight: 600,
    fontSize: 20,
  },
  ColorText:{
    color: "white",
  },
  TextContent :{
    width: "75%",
    float: "right",
    textAlign: "left",
    paddingLeft:15,
    fontSize: 15,
    color: "gray",
    marginTop:15
  },
  ProductTitle:{
    background: "#393939",
    fontWeight: "bold",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    paddingTop: 8,
    paddingBottom: 8,

  },
  ProTitleLeft:{
    fontWeight: 500,
    paddingTop: 8,
    paddingBottom: 8,
  },
  InfProduct:{
    borderRadius: "8px",
    width: "25%",
    marginLeft:20,
    border: "1px solid #D7E5ED",
  },
  InfPro:{
    borderRadius: "8px",
    width: "25%",
    marginRight:10,
    textAlign: "right",
    fontWeight: 700,
  },

  ListProduct:{
    display: "flex",
    fontSize: "110%",
    justifyContent: "center",
  },
  PadPro:{
    paddingTop: 10,
  }
 
}

const Box = styled.div`
  @media only screen and (max-width: 767px){
    font-size: 80%;
  }
`



export default ServerPricing;
