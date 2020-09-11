import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 8px 8px ${({ theme }) => theme.colors.gray};
  padding: .75em;

  > nav {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Navbar : FC = () => {
  const { tryRefetch, fetchError } = useContext(GlobalContext)
  return (
    <StyledHeader>
      <nav>
        <div>Juan Emanuel Di Modugno</div>
        <div>
          <button 
            disabled={!fetchError}
            onClick={tryRefetch}
          >
            Refetch
          </button>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Navbar;