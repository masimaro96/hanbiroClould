import React from 'react';
import styled from 'styled-components';
import '../footer/main.css';
import {
  Container, Row, Col
} from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap,
} from '@/shared/components/Card';
import {
  left,
  marginRight,
} from '@/utils/directions';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import PhoneIcon from 'mdi-react/PhoneIcon';
import FaxIcon from 'mdi-react/FaxIcon';
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon';
import { Box } from '@mui/material';
function Footer() {

  return (
    <div id='footer'>
        <div className='footer-top'>
            <Container className='footer-body'>
                <Row>
                    <Col md={12} lg={9} className='logo-footer'>
                        <Box>
                            <Box className='logo-footer-detail'>
                                <img className='logo-footer-img' src='https://www.hanbiro.com/images/logo-footer.png' />
                                <p className="typography-message">
                                    · 본사 : 도로명 주소 - 서울시 서초구 남부순환로333길 9(서초동, 효천빌딩) 4,5층 | 지번 주소 - 서울특별시 서초구 서초1동 1425-10 효천빌딩 4,5층
                                <br />
                                · 미국 : Hanbiro Inc., 2570 N First street 2nd fl, san jose, ca 95131
                                <br />
                                · 일본 : 東京都千代田区霞が関3-2-5 霞が関ビルディング 5階 KOTRA
                                <br />
                                · 중국 : 深圳市南山区后海大道东路天利中央商务广场A座11楼1108G
                                <br />
                                · 베트남 : Lầu 3, tòa nhà Phúc Tấn Nguyên 400 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, Tp Hồ Chí Minh
                                <br />
                                · 서버 운영실 : 서울 서초구 서초동 1423-1 KIDC 서초1센타 2층
                                <br />
                                <EmailIcon className='icon-text'/> <a href='mailto:hanbiro@hanbiro.com' className='text-color'>hanbiro@hanbiro.com</a>  &nbsp;&nbsp;&nbsp;<PhoneIcon className='icon-text'/>Phone: <a href='tel:1544-4755' className='text-color'>1544-4755</a>  &nbsp;&nbsp;&nbsp;<FaxIcon className='icon-text'/>Fax: 02) 6919-2050
                                </p>
                                <p>법인명 : (주)한비로 | 대표 : 권택술 | 사업자 등록 번호 : 220-87-04858 | 통신 판매업 신고 번호 : 서초 제09110호<a href='http://ftc.go.kr/www/bizCommView.do?key=232&apv_perm_no=2006321007630209110&pageUnit=10&searchCnd=bup_nm&searchKrwd=%ED%95%9C%EB%B9%84%EB%A1%9C&pageIndex=1' className='text-color external-link'> 사업자 정보 확인 <ExternalLinkIcon className='icon-text icon-external-link'/></a>  |  개인 정보 관리 책임 : 운영 정보팀 부장 이용덕</p>
                            </Box>
                        </Box>
                    </Col>

                    <Col md={12} lg={3} className='spaced'>
                        <Box>
                            <Box>
                              <h5>Explore</h5>
                              <List>
                                  <li><a href='https://hanbiro.com/cloud/'><ChevronRightIcon className='right-icon'/> 클라우드</a></li>
                                  <li><a href='https://hanbiro.com/software/overview-video.html'><ChevronRightIcon className='right-icon' /> 그룹웨어</a></li>
                                  <li><a href='https://hanbiro.com/software/vora-email-features.html'><ChevronRightIcon className='right-icon' /> Vora Works</a></li>
                                  <li><a href='https://hanbiro.com/management/management-outline.html'><ChevronRightIcon className='right-icon' /> 호스팅</a></li>
                                  <li><a href='https://hanbiro.com/hanbiro/about.html'><ChevronRightIcon className='right-icon' /> 한비로</a></li>
                                  <li><a href='https://hanbiro.com/customer/inquiry.html'><ChevronRightIcon className='right-icon' /> 고객 센터</a></li>
                              </List>
                            </Box>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </div>
        <hr />
        <div>
            <Row className='footer-bottom'>
                <Col md={12}>
                    <p>All Right Reserved © Hanbiro, Inc. &nbsp;&nbsp;  <a href='https://www.hanbiro.com/hanbiro/about.html' className='text-color external-link'>한비로 소개</a> • <a href='https://www.hanbiro.com/hanbiro/contact-us.html' className='text-color external-link'>오시는 길</a> • <a href='https://www.hanbiro.com/privacy.html' className='text-color external-link'>개인 정보 처리 방침</a> • <a href='https://www.hanbiro.com/terms.html' className='text-color external-link'>서비스 이용 약관</a> • <a href='https://www.hanbiro.com/files/cloudTerms.pdf' className='text-color external-link'>클라우드 서비스 이용 약관</a> • <a href='https://www.hanbiro.com/sitemap.html' className='text-color external-link'>사이트맵</a></p>
                </Col>
            </Row>
        </div>
    </div>
  );
};

export default Footer;

// region STYLES

const GridCard = styled(Card)`
  padding-bottom: 20px;

  p {
    margin-bottom: 0;
  }
`;

const GridCardBody = styled(CardBody)`
  padding: 0;
  text-align: center;
  height: 62px;
`;

const GridSmall = styled.p`
  
  @media screen and (min-width: 768px) and (max-width: 1920px) {
    display: none;
  }
`;

const List = styled.ul`
  text-align: ${left};
  list-style: none;
  padding: 0;

  span {
    position: relative;
    bottom: -2px;
    ${marginRight}: 8px;
    float: ${left};
  }

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
// endregion
