import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding-left: 3.5rem;
  padding-right: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    
    gap: 0.5rem;

    hr {
      margin: 0;
      width: 20px;
      transform: rotate(90deg);
    }

    a {
      width: auto;

      display: flex;
      justify-content: space-between;
      align-items: center;

      gap: 0.5rem;

      color: ${({ theme }) => theme.colors.gray};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: all 0.2s;

      text-decoration: none;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
      }

      &.active {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 6.5rem;

    nav {
      display: flex;
      align-items: center;
      flex-direction: column;

      gap: 0.5rem;

      hr {
        margin: 0;
        width: 20px;
        transform: rotate(0deg);
      }

      a {
        width: auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 0.5rem;

        color: ${({ theme }) => theme.colors.gray};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        transition: all 0.2s;

        text-decoration: none;

        &:hover {
          border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
        }

        &.active {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`

export const WrapperLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  
  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }

  h1 {
    color: ${({ theme }) => theme.colors.gray_dark};
    font-weight: 400;

    strong {
      font-weight: 700;
    }
  }
`