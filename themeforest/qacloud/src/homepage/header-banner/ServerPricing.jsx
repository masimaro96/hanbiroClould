

import React from 'react';


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
            <p><text>{params.원}</text></p>
          </div>
        </div>

    )
}

function ServerPricing() {
  return (
    <div >
      <div style={StySpecification.StylesContainer}>
        <div >
          <div >
            <h2 style={StySpecification.Title}>가상서버(인스턴스) 요금안내</h2>
            <p style={StySpecification.Text}>
              <text>Hanbiro Cloud 관리자 콘솔에서 원하는 하드웨어를 선택후 서버를 생성할 수 있습니다.
              </text>
              <br/>
              <text>(이용요금실시간확인)</text>
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
            원:"서비스비용(월)"

          })}

          {ProtitleNew({
            classNameWrapper: StySpecification.InfProduct,
            classNameItem: StySpecification.ProductTitle,
            PadPro : StySpecification.PadPro,
            Title: "소호형 상품",
            Core: "1 Core",
            G: "4G",
            SD:"SSD 50G",
            SG:"900G",
            원:"17,500 원"

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
            원:"35,000 원"

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
            원:"70,000 원"

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
            원:"150,000 원"

          })} 
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
    width: "20%",
    marginLeft:20,
    border: "1px solid #D7E5ED",
  },
  InfPro:{
    borderRadius: "8px",
    width: "20%",
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


export default ServerPricing;
