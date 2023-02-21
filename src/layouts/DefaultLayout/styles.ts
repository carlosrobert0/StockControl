import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  min-height: calc(100vh - 10rem);
  margin: 2.5rem auto;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.colors.primary_light};
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
`