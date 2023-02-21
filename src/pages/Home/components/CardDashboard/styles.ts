import styled from "styled-components";

export const CardDashboardContainer = styled.div`
  position: relative;
  width: 270px;
  height: 246px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(67, 77, 85, 0) 100%);
`

export const CardDashboardContent = styled.div`
  width: 230px;
  height: 196px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    font-size: 52px;
    text-align: center;
    margin: auto;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray_dark}
  }

  p {
    width: 192px;
    height: 55px;
    margin-left: auto;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray}
  }
`

export const SeparateDiv = styled.div`
  width: 270px;
  height: 5px;

  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background: ${({ theme }) => theme.colors.info};
`