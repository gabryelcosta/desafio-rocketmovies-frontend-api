import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  font-family: 'Roboto', serif;
  font-weight: 400;

  height: 25px;

  padding: 5px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
`