import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  'header'
  'content';

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding-top: 40px;
  }

  > main::-webkit-scrollbar {
    width: 8px;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;
  margin: 0 123px 150px;

  button {
    justify-content: start;
  }

  .movies {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin: 24px 0;

    > h1 {
      font-size: 36px;
      font-weight: 500;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }

  .perfil {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 50px;

    > img {
      width: 20px;
      height: 20px;
      border-radius: 35px;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
    }

    > svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    > span {
      font-size: 16px;
      font-weight: 400;
      font-family: 'Roboto', serif;
      text-align: justify;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }

  .tags {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
  }

  .description {
    font-size: 16px;
    text-align: justify;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
`