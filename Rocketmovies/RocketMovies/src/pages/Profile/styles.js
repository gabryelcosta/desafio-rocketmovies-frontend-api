import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

    > header {
      width: 100%;
      height: 144px;
      display: flex;
      align-items: center;
      padding: 65px 144px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }


`

export const Form = styled.form`
  margin: 60px auto 0px;
  max-width: 450px;

  > div:nth-child(2) {
    margin-bottom: 8px;
  }

  > div:nth-child(4){
    margin-top: 24px;
    margin-bottom: 8px;
  }

  > div:nth-child(5){
    margin-bottom: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -140px auto 65px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border: none;
    border-radius: 93px;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 93px;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }
`