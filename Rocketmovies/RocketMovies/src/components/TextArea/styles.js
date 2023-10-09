import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  display: flex;
  gap: 8px;
  padding: 19px 16px;
  border-radius: 10px;
  border: none;
  resize: none;

  color: ${({ theme }) => theme.COLORS.WHITE_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  &placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`