

import { padding } from '@mui/system';
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
              <h2 style={StySpecification.Title}>Kubernetes for Kafka 요금안내</h2>
              <p style={StySpecification.Text}>
                <text>리플리카구성, Node 및 Shard 분산처리, 대용량 고가용성 분산 데이터 스트리밍 플랫폼
                </text>
              </p>
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
                  Core: "CPU",
                  G: "Memory",
                  SD: "Storage",
                  SG: "Traffic 전송량(월)",
                  data5: "컨테이너최소수량",
                  data6: "서비스비용(월)"

                })}

                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "스탠다드 상품",
                  Core: "1 Core",
                  G: "4G",
                  SD: "SSD 100G",
                  SG: "900G",
                  data5: "4 POD, 1 LB",
                  data6: "90,000"

                })}

                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "비지니스",
                  Core: "2 Core",
                  G: "8G",
                  SD: "SSD 100G",
                  SG: "900G",
                  data5: "4 POD, 1 LB",
                  data6: "160,000"

                })}
                {ProtitleNew({
                  classNameWrapper: StySpecification.InfProduct,
                  classNameItem: StySpecification.ProductTitle,
                  PadPro: StySpecification.PadPro,
                  Title: "엔터프라이즈형",
                  Core: "4 Core",
                  G: "16G",
                  SD: "SSD 100G",
                  SG: "900G",
                  data5: "4 POD, 1 LB",
                  data6: "300,000"
                })}
              </div>
            </div>
          </div>
          <div style={StySpecification.TextContent}>

            오토스케일링으로 확장된 클러스터는 확장된 컨테이너의 수량만큼 추가 과금됩니다.<br />

            클러스터 구성단위 컨테이너의 하드웨어를 별도로 지정할 수 있습니다.<br />

            예&#10089; [Zookeeper 노드, 0.5cpu 컨테이너 1개] + [Kafka 노드, 1cpu 컨테이너 3]<br />

            &#61;&#62;	 (17,500 원 x 1/2) + (17,500원 x 3) + 20,000원 = 81,250원 / 월<br />

            한비로 클라우드 시스템 엔지니어와 상담을 통해서 다양한 방식으로 쿠베네티스 클러스터 시스템을 구축할 수 있습니다.

          </div>
        </div>
      </div>
    </Box>

  );
}


const StySpecification = {
  StylesAll: {
    display: "flex",
  },
  StylesContainer: {
    boxShadow: "0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)",
    border: "1px solid #E7EAF3",
    width: "100%",
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
  TextContent: {
    width: "75%",
    float: "right",
    textAlign: "left",
    paddingLeft: 15,
    fontSize: 15,
    color: "gray",
    marginTop: 15
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
    marginRight: 10,
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



export default ServerPricing;
