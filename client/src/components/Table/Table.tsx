import React, { FC, useCallback, useEffect, useState, useContext } from 'react'
import styled from 'styled-components';
import IStatistic from '../../interfaces/IStatistic';
import { StatisticTableHead } from '../../presets/StatisticTableHead';
import { GlobalContext } from '../../context/GlobalContext';
import { ITableHeadCell } from '../../interfaces/ITableHeadCell';
import DataHelper from '../../utils/DataHelper';
import TableColumnSorter from '../TableColumnSorter/TableColumnSorter';

const StyledTableSection = styled.div`
  > div {
    padding: .5em;
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledTable = styled.table`
  padding: 1em 1.5em 2em;
  width: 100%;
  border-collapse: collapse;

  td {
    padding: .5em;
    font-size: .875em;
    border: 1px solid ${({ theme }) => theme.colors.grayDark};;

    &:not(:first-of-type) {
      text-align: center;
      vertical-align: middle;
    }
  }

  tr > td {
    &:not(.no-results) {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.gray};
    }
  }
  
  > tbody > tr > td {
    &:not(:nth-of-type(1)) {
      background-color: ${({ theme }) => theme.colors.grayLight};
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const StyledHeaderCell = styled.td`
  ${({ onClick }) => onClick && `
    cursor: pointer;
  `}
`;

const Table: FC = () => {
  const [orderField, setOrderField] = useState<string>('');
  const [orderByFieldAsc, setOrderByFieldAsc] = useState<boolean>(true);
  const [computedData, setComputedData] = useState<Array<IStatistic>>([]);
  const {
    data,
    selectStatistic,
    selectedStatistics,
    filter,
    setFilter
  } = useContext(GlobalContext);

  useEffect(() => {
    setComputedData(
      DataHelper.ComputeFilterAndSorting(
        data,
        orderField,
        orderByFieldAsc,
        filter
      )
    );
  }, [data, orderField, orderByFieldAsc, filter])

  const setOrderBy = useCallback(
    (field: string) => {
      if (orderField !== field) {
        setOrderField(field);
        setOrderByFieldAsc(true);
      } else setOrderByFieldAsc((prevValue) => !prevValue);
    },
    [orderField, setOrderField, setOrderByFieldAsc],
  );

  const exportDataToCSV = useCallback(() => {
    DataHelper.ExportDataToCSV(computedData);
  }, [computedData]);

  return (
    <StyledTableSection>
      <div>
        <button onClick={exportDataToCSV}>CSV</button>
      </div>
      <StyledTable>
        <thead>
          <tr>
            <td>
              <input
                value={filter}
                placeholder="Filtrar…"
                onChange={(ev) => setFilter(ev.target.value)}
              />
            </td>
            {
              StatisticTableHead.columns.map(
                ({ sortingKey, label }: ITableHeadCell, idx: number) => (
                  sortingKey ? (
                    <StyledHeaderCell
                      key={`column_${idx}`}
                      onClick={() => setOrderBy(sortingKey)}
                    >
                      {label}
                      <TableColumnSorter
                        isActive={sortingKey === orderField}
                        ascendingOrder={orderByFieldAsc}
                      />
                    </StyledHeaderCell>
                  ) : (
                    <td key={`column_${idx}`}>{label}</td>
                  )
                )
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            !!computedData.length ? (
              computedData.map((e: IStatistic) => (
                <tr key={e.name}>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        value={e.name}
                        defaultChecked={selectedStatistics.includes(e.name)}
                        onClick={() => selectStatistic(e.name)}
                      />
                      {e.name}
                    </label>
                  </td>
                  <td>{e["acc6%"]}</td>
                  <td>{e.acc6}</td>
                  <td>{e["acc7%"]}</td>
                  <td>{e.acc7}</td>
                  <td>{e["acc8%"]}</td>
                  <td>{e.acc8}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="no-results" colSpan={8}>No se hallaron resultados…</td>
              </tr>
            )
          }
        </tbody>
      </StyledTable>
    </StyledTableSection>
  )
}

export default Table;