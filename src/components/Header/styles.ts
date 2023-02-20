import styled from 'styled-components'

export const HeaderContainer = styled.header`
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

      color: ${({ theme }) => theme.colors.white};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      opacity: 0.4;

      transition: all 0.2s;

      text-decoration: none;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors.info};
        opacity: 0.8;
      }

      &.active {
        color: ${({ theme }) => theme.colors.info};
        opacity: 0.8;
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