import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.PINK};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`