import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import Carousel from '@/shared/components/carousel/CarouselMultiply';

const data = [
  { id: 0, src: `${process.env.PUBLIC_URL}/img/1.png` },
  { id: 1, src: `${process.env.PUBLIC_URL}/img/2.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/img/3.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/img/4.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/img/1.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/img/2.png` },
  { id: 6, src: `${process.env.PUBLIC_URL}/img/3.png` },
  { id: 7, src: `${process.env.PUBLIC_URL}/img/4.png` },
];

const BasicCarousel = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.carousel.basic_carousel')}</CardTitle>
            <CardSubhead>
              Use the component <span className="red-text">CarouselMultiply</span>
            </CardSubhead>
          </CardTitleWrap>
          <Carousel>
            {data.map(item => (
              <div key={item.id}>
                <img src={item.src} alt={`slide_${item.src}`} />
              </div>
            ))}
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCarousel;
