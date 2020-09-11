import React, { FC, useState, useEffect, useContext } from 'react'
import styled, { useTheme } from 'styled-components';
import { Bar } from 'react-chartjs-3';
import StatisticsChartData from '../../utils/StatisticsChartData';
import IChartDataInterface from '../../interfaces/IChartData';
import { GlobalContext } from '../../context/GlobalContext';
import { ITheme } from '../../interfaces/ITheme';

const StyledChart = styled.div`
  padding: 1em 1.5em 2em;
`;

const Chart: FC = () => {
  const theme = useTheme();
  const { data, selectedStatistics } = useContext(GlobalContext);
  const [chartData, setChartData] = useState<IChartDataInterface>();

  useEffect(() => {
    setChartData(
      StatisticsChartData.transformData(
        data.filter(({ name }) => selectedStatistics.length ?
          selectedStatistics.includes(name) : name), 3, Object.values((theme as ITheme).colors))
    );
  }, [data, selectedStatistics, theme]);

  return (
    <StyledChart>
      {
        !!chartData && (
          <>
            <Bar
              data={chartData}
              height={400}
              options={{
                beginAtZero: true,
                maintainAspectRatio: false,
                legend: {
                  display: false,
                },
                type: 'bar',
              }}
            />
          </>
        )
      }
    </StyledChart>
  )
}

export default Chart;