import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  width: 87.5%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  border: none;
  border-radius: 16px;
  margin: 40px 123px 24px;
  padding: 32px;

  > h1 {
    flex: 1;
    align-items: start;
    font-weight: 700;
    font-weight: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }

  > p {
    display: flex;
    text-align: justify;
    align-self: stretch;
    font-family: 'Roboto', Serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;

    margin-top: 15px;

    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
    gap: 8px;
  }
`