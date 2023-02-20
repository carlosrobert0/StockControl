import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  min-height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
`