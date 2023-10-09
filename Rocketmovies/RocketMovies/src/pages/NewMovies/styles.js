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
  max-width: 100%;
  margin: 40px 123px 0;

  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 36px;
    font-weight: 500;

    margin-top: 25px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }

  > button:first-child {
    margin-right: auto;;
  }

  .input {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 40px;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  > h2 {
    margin-top: 40px;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme}) => theme.COLORS.GRAY_500};
  }

  .marcadores {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 24px;
    padding: 16px;
    gap: 24px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  .buttons {
    display: flex;
    gap: 40px;
    align-items: center;

    text-align: center;
    font-size: 16px;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.GRAY_800};

    margin-top: 40px;
    margin-bottom: 90px;

    button:first-child{
      color: ${({ theme }) => theme.COLORS.PINK};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }


`