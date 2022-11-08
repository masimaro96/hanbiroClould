

import React from 'react';
import styled from 'styled-components';

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
      </div>
    </div>
  )
}

function ServerPricing() {
  return (
    <Box>
      <div >
        <div style={StySpecification.StylesContainer}>
          <div >
            <div >
              <h2 style={StySpecification.Title}>MS-SQL (Windows) 데이터베이스 요금안내</h2>

            </div>
          </div>
          <div style={StySpecification.TableScroll}>
            <div style={StySpecification.TableWrap}>
              <div style={StySpecification.ListProduct}>

                {ProtitleNew({
                  classNameWrapper: StySpecification.InfPro,
                  classNameItem: StySpecification.ProTitleLeft,
                  PadPro: StySpecification.PadPro,
                  Title: "hi",
                  Core: "상세정보",
                  G: "Core 수",
                  SD: "가격 (VAT별도/월)",
                  SG: "비고",

                })}

                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "Microsoft SQL Server",
                  Core: "2012 ~2019 Standard",
                  G: "4",
                  SD: "320,000원",
                  SG: "4 Core 단위 1 Copy",

                })}

                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "SQL server 2019",
                  Core: "Express (제공예정)",
                  G: "4",
                  SD: "무료",
                  SG: "최대 4 Core",

                })}
                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "Windows Server",
                  Core: "2012 ~ 2019 server",
                  G: "-",
                  SD: "30,000원",
                  SG: "Windows Server 1대",

                })}
              </div>
            </div>
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
    marginTop: 30,
  },
  StylesTitle: {
    textAlign: "center",
  },
  Title: {
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "30px"
  },
  Text: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: "30px"
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
    width: "25%",
    marginLeft: 20,
    border: "1px solid #D7E5ED",
    whiteSpace: "nowrap",
    minWidth: "170px",
  },
  InfPro: {
    borderRadius: "8px",
    width: "25%",
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



export default ServerPricing;
