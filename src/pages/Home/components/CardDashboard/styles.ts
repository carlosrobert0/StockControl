import styled from "styled-components";

export const CardDashboardContainer = styled.div`
  position: relative;
  width: 270px;
  height: 276px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(67, 77, 85, 0) 100%);
`

export const CardDashboardContent = styled.div`
  width: 230px;
  height: 196px;

  display: flex;
  flex-direction: column;

  h1 {
    position: absolute;
    font-size: 52px;
    text-align: center;
    top: 50%;
    left: 45%;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray_dark}
  }

  p {
    width: 192px;
    height: 55px;
    position: absolute;
    font-size: 16px;
    top: 70%;
    left: 20%;
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