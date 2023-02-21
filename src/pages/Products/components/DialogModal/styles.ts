import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: #fff;
  position: absolute;
  top: 25%;
  left: 35%;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  text-align: center;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 16px;
  }
`

export const ModalButtons = styled.div`
  margin-left: auto;
  margin-right: auto;
  
  button {
    margin: 8px;
    padding: 8px 16px;
    font-size: 1.2rem;
    border-radius: 4px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:first-of-type {
      background-color: ${({ theme }) => theme.colors.gray};
    }

    &:last-of-type {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`