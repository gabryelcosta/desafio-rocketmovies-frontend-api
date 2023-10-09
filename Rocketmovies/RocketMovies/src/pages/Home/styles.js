import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 125px auto;
  grid-template-areas:
  "header"
  "brand"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  > main::-webkit-scrollbar {
    width: 8px;
  }

  > main::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 123px 0;
  grid-area: brand;

  h1 {
    font-size: 32px;
    font-weight: 400;
    line-height: normal;
  };
}
`

export const NewMovie = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const Content = styled.div`
  grid-area: content;

`
