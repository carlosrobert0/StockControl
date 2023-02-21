import styled from 'styled-components'

export const WrapperContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const Target = styled.div`
  cursor: pointer;
`

export const Tooltip = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  padding: 5px;
  top: 100%;
  left: 100%;
  transform: translateX(-50%);
`