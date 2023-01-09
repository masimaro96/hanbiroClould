

import React from 'react';
import styled from 'styled-components';
import TrafficFee from './TrafficFeeV1';
const ProtitleNew = (params) => {
  return (

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

function ServerPricing({ title, content, content1 }) {
  return (
    <Box>
      <div >
        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h2 style={StySpecification.Title}>{title}</h2>
              {(content && content1) && <>
                <p style={StySpecification.Text}>
                  <text>{content}
                  </text>
                  <br />
                  <text>{content1}</text>
                </p>
              </>
              }
            </div>
          </div>
          <div  style={StySpecification.TableScroll}>
            <div  style={StySpecification.TableWrap}>
              <div style={StySpecification.ListProduct}>

                {ProtitleNew({
                  classNameWrapper: StySpecification.InfPro,
                  classNameItem: StySpecification.ProTitleLeft,
                  PadPro: StySpecification.PadPro,
                  Title: "hi",
                  Core: "CPU",
                  G: "Memory",
                  SD: "Storage",
                  SG: "Traffic 전송량(월)",
                  원: "서비스비용(월)"

                })}

                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "소호형 상품",
                  Core: "1 Core",
                  G: "4G",
                  SD: "SSD 50G",
                  SG: "900G",
                  원: "17,500 원"

                })}
                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "스탠다드 상품",
                  Core: "2 Core",
                  G: "8G",
                  SD: "SSD 100G",
                  SG: "900G",
                  원: "35,000 원"

                })}
                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "비지니스",
                  Core: "4 Core",
                  G: "16G",
                  SD: "SSD 200G",
                  SG: "900G",
                  원: "70,000 원"

                })}

                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "엔터프라이즈형",
                  Core: "8 Core",
                  G: "32G",
                  SD: "SSD 400G",
                  SG: "900G",
                  원: "150,000 원"

                })}
              </div>

            </div>
          </div>
          <TrafficFee/>
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
  StylesTitle: {
    textAlign: "center",
  },
  Title: {
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "30px",
    fontSize:"16pt"
  },
  Text: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: "30px",
    fontSize:"15pt"
  },
  ColorText: {
    color: "white",
  },
  ProductTitle: {
    background: "#393939",
    fontWeight: "bold",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    paddingTop: 8,
    paddingBottom: 8,

  },
  ProTitleLeft: {
    fontWeight: 500,
    paddingTop: 8,
    paddingBottom: 8,
  },
  InfProduct: {
    borderRadius: "8px",
    width: "20%",
    minWidth: "170px",
    marginLeft: 20,
    border: "1px solid #D7E5ED",
    whiteSpace: "nowrap",

  },
  InfPro: {
    visibility:"visible",
    borderRadius: "8px",
    width: "20%",
    textAlign: "right",
    fontWeight: 700,
    whiteSpace: "nowrap",
    minWidth: "130px",
  },

  ListProduct: {
    display: "flex",
    fontSize: "110%",
    
  },
  PadPro: {
    paddingTop: 10,
  },
  Auto: {
    backgroundColor: "lightblue",
    width: "150px",
    overflowX: "scroll",

  },

  TableScroll:{
    position:"relative",
    width: "100%",
    margin:"auto",
    overflow:"hidden",
    
    
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



export default ServerPricing;
