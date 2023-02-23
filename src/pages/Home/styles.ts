import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
    div {
      flex-direction: column;
    }

    gap: 2.5rem;

    h1 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    
    div {
      flex-direction: column;
    }

    gap: 2.5rem;

    h1 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  }
`