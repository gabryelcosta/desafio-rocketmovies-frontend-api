import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE_200};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_600}` : "none"};

  border-radius: 10px;
  padding-right: 10px;

  > button {
    border: none;
    background: none;
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add{
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE_200};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`