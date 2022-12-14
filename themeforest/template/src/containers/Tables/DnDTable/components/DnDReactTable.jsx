import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import ReactTableCustomizer from '@/shared/components/table/components/ReactTableCustomizer';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const DnDReactTable = ({ reactTableData }) => {
  const [rows, setData] = useState(reactTableData.tableRowsData);
  const [isSortable, setIsSortable] = useState(false);
  const [withPagination, setWithPaginationTable] = useState(true);
  const [withSearchEngine, setWithSearchEngine] = useState(false);

  const updateDraggableData = (result) => {
    const items = reorder(
      rows,
      result.source.index,
      result.destination.index,
    );
    setData(items);
  };

  const handleClickIsSortable = () => {
    setIsSortable(!isSortable);
  };

  const handleClickWithPagination = () => {
    setWithPaginationTable(!withPagination);
  };

  const handleClickWithSearchEngine = () => {
    setWithSearchEngine(!withSearchEngine);
  };

  const tableConfig = {
    isEditable: false,
    isSortable,
    isResizable: false,
    withDragAndDrop: true,
    withPagination,
    withSearchEngine,
    manualPageSize: [15, 30, 45],
    placeholder: 'Search by First name...',
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardHeaderWrap>
            <CardTitleWrap>
              <CardTitle>drag & drop react-table</CardTitle>
              <CardSubhead>
                Use table with&nbsp;
                <span className="red-text">drag & drop</span>
              </CardSubhead>
            </CardTitleWrap>
            <ReactTableCustomizer
              handleClickIsSortable={handleClickIsSortable}
              handleClickWithPagination={handleClickWithPagination}
              handleClickWithSearchEngine={handleClickWithSearchEngine}
              isSortable={isSortable}
              withPagination={withPagination}
              withSearchEngine={withSearchEngine}
            />
          </CardHeaderWrap>
          <ReactTableBase
            key={withSearchEngine ? 'searchable' : 'common'}
            columns={reactTableData.tableHeaderData}
            data={rows}
            updateDraggableData={updateDraggableData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

DnDReactTable.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default DnDReactTable;

// region STYLES

const CardHeaderWrap = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
