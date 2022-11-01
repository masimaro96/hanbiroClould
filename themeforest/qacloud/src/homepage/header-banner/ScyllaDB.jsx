

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
              <h2 style={StySpecification.Title}> Kubernetes for ScyllaDB 요금안내 </h2>
              <p style={StySpecification.Text}>
                <text>리플리카구성 및 Node 및 Shard 분산처리, 대용량 고가용성 분산 클라우드 Scylla(Cassandra)</text>
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
              data5:"3 POD, 1 LB",
              data6:"72,500"

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
              data5:"3 POD, 1 LB",
              data6:"125,000"
            
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
              data5:"3 POD, 1 LB",
              data6:"230,000"
            })} 
          </div>
          <div style={StySpecification.TextContent}>
            오토스케일링으로 확장된 클러스터는 확장된 컨테이너의 수량만큼 추가 과금됩니다.<br/>

            시스템 엔지니어와 상담을 통해서 다양한 방식으로 쿠베네티스 클러스터 시스템을 구축할 수 있습니다.
         
          
          </div>
          <div style={StySpecification.BoxCenter}>
            <text style={StySpecification.TextCenter}>가상서버(인스턴스) 기반 단독 Scylla (Cassandra) 데이터베이스</text>
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
              data6:"서비스비용(월)"

            })}

            {ProtitleNew({
              classNameWrapper: StySpecification.InfProduct,
              classNameItem: StySpecification.ProductTitle,
              PadPro : StySpecification.PadPro,
              Title: "스탠다드 상품",
              Core: "2 Core",
              G: "8G",
              SD:"SSD 100G",
              SG:"900G", 
              data6:"35,000"

            })}
           
            {ProtitleNew({
              classNameWrapper: StySpecification.InfProduct,
              classNameItem: StySpecification.ProductTitle,
              PadPro : StySpecification.PadPro,
              Title: "비지니스",
              Core: "4 Core",
              G: "16G",
              SD:"SSD 200G",
              SG:"900G",
              data6:"70,000"
            
            })}
            {ProtitleNew({
              classNameWrapper: StySpecification.InfProduct,
              classNameItem: StySpecification.ProductTitle,
              PadPro : StySpecification.PadPro,
              Title: "엔터프라이즈형",
              Core: "8 Core",
              G: "32G",
              SD:"SSD 400G",
              SG:"900G",
              data6:"150,000"
            })} 
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
    boxShadow: "0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)",
    border: "1px solid #E7EAF3",
    borderRadius: "8px",
    padding: 20,
    marginTop:30,
  },
  StylesTitle: {
    textAlign: "center",
  },
  TextCenter:{
    padding:10,
    fontWeight: 600,
    margin:"auto"
  },
  BoxCenter:{
    background:"#F3F5F9",
    width: "100%",
    display: "flex",
    marginBottom:40,
    borderRadius: "10px",
    padding:8,
   
  },
  Title:{
    fontWeight: "bold",
    borderRadius: "20px",
    marginTop:"20px",
    marginBottom:"30px"
  },
  Text:{
    fontWeight: 600,
    fontSize: 20,
    marginBottom:"30px"
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
    marginTop:15,
    marginBottom:30
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
