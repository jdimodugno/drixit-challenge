import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme/Default';
import Chart from '../Chart/Chart';
import Table from '../Table/Table';
import GlobalProvider from '../../context/GlobalContext';
import Navbar from '../Navbar/Navbar';

const StyledApp = styled.div``;

const StyledMainSection = styled.main`
  max-width: 1080px;
  margin: 0 auto;

  > div {
    margin-top: 1em;
  }
`;

const StatisticsApp: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalProvider>
      <StyledApp>
        <Navbar />
        <StyledMainSection>
          <Chart />
          <Table />
        </StyledMainSection>
      </StyledApp>
    </GlobalProvider>
  </ThemeProvider>
);

export default StatisticsApp;
