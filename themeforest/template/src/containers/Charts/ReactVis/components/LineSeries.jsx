import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis,
} from 'react-vis';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const LineSeriesChart = () => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={12} xl={4}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('charts.react_vis.line_series')}</CardTitle>
          </CardTitleWrap>
          <div className="react-vis" dir="ltr">
            <FlexibleWidthXYPlot height={250}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries
                className="react-vis__svg-line"
                curve="curveMonotoneX"
                data={[
                  { x: 1, y: 3 },
                  { x: 2, y: 5 },
                  { x: 3, y: 15 },
                  { x: 4, y: 12 },
                ]}
                color="#70bbfd"
              />
              <LineSeries
                className="react-vis__svg-line"
                curve="curveMonotoneX"
                data={[
                  { x: 1, y: 10 },
                  { x: 2, y: 4 },
                  { x: 3, y: 2 },
                  { x: 4, y: 15 },
                ]}
                color="#c88ffa"
              />
              <LineSeries
                className="react-vis__svg-line"
                curve="curveMonotoneX"
                data={[
                  { x: 1, y: 7 },
                  { x: 2, y: 11 },
                  { x: 3, y: 9 },
                  { x: 4, y: 2 },
                ]}
                color="#f6da6e"
              />
            </FlexibleWidthXYPlot>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineSeriesChart;
