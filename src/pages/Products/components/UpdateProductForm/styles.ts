import styled from 'styled-components'

export const FormContainer = styled.div`
  margin-top: 32px;
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  border-radius: 8px;

  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_dark};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.125rem;
  font-weight: regular;

  p {
    font-size: 12px;
    text-align: center;
    color: ${({ theme }) => theme.colors.orange}
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    label {
      width: 25%;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      div {
        width: auto;
        margin-left: 4px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 32px;
    width: 80%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;

    border-radius: 8px;

    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.gray_dark};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.125rem;
    font-weight: regular;

    p {
      font-size: 12px;
      text-align: center;
      color: ${({ theme }) => theme.colors.orange}
    }
  }
`

export const Input = styled.input`
  flex: 1;
  
  height: 2.5rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  font-weight: regular;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.gray_dark};
  border-radius: 5px;
  
  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors.gray_dark};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    opacity: 0.5;
  }
`

export const WrapperButtons = styled.div`
  margin-top: 16px;
`

const BaseButton = styled.button`
  width: 30%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const NewProductButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.success};
  opacity: 0.7;
  transition: all 0.2s;

  &:not(:disabled):hover {
    opacity: 1;
  }
`

export const CancelButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.danger};
  opacity: 0.7;
  transition: all 0.2s;
  
  &:not(:disabled):hover {
    &:not(:disabled):hover {
      opacity: 1;
    }
  }
`