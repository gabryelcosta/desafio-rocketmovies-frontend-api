import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div `
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  margin-top: 200px;
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  > button:nth-last-child(1) {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    margin: 80px auto 200px;
  }

  div {
    width: 100%;
    margin-bottom: 8px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`