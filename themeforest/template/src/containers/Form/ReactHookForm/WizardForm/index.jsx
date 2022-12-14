import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import showResults from '@/utils/showResults';
import Form from './components/Form';

const FormHookWizard = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.wizard_from.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Form onSubmit={showResults} />
    </Container>
  );
};

export default FormHookWizard;
