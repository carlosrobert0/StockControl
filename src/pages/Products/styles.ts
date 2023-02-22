import styled from "styled-components";

export const ProductsContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    div {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;

      gap: 2.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      h1 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        gap: 0.5rem;
      }
    }
  }
`

export const ProductsList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: separate;
    min-width: 600px;

    th {
      background-color: ${({ theme }) => theme.colors.gray_dark};

      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.white};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
    
      text-align: start;

      &:first-child {
        width: 20%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
        
        svg {
          cursor: pointer;
          flex: 1;
          transition: all 0.2s;

          &:hover {
            color: ${({ theme }) => theme.colors.info};
            opacity: 0.8;
          }
        }

        div {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
  }
`

export const InputSearch = styled.input`
  position: relative;
  width: 19rem;
  height: 2.5rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  font-weight: regular;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.gray_dark};
  border-radius: 5px;
  
  &:focus {
    box-shadow: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 0.5;
  }
`

export const WrapperCheckbox = styled.div`
`