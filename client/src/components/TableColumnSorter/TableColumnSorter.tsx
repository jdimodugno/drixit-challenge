import React, { FC } from 'react';
import styled from 'styled-components';
import IconCaret from '../Icons/Caret';

const StyledTableColumnSorter = styled.div``;

interface ITableColumnSorterProps {
  isActive: boolean;
  ascendingOrder: boolean;
};

const TableColumnSorter: FC<ITableColumnSorterProps> = ({
  isActive = false,
  ascendingOrder = true,
}) => (
  <StyledTableColumnSorter>
    {
      isActive ? (
        <IconCaret fill="#fff" rotate={ascendingOrder ? false : true} />
      ) : (
        <>
          <IconCaret fill="#fff" rotate={false} />
          <IconCaret fill="#fff" rotate={true} />
        </>
      )
    }
  </StyledTableColumnSorter>
);

export default TableColumnSorter;