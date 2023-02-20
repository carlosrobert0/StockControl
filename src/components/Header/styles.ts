import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 4rem;
      height: 4rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({ theme }) => theme.colors.white};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors.info};
      }

      &.active {
        color: ${({ theme }) => theme.colors.info}
      }
    }
  }
`

export const WrapperLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`