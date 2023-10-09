import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;

  width: 100%;
  padding: 19px 24px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  > input {
    width: 100%;
    background: transparent;
    border: 0;
    margin-left: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    &placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }

    > svg {
      margin-left: 16px;
    }
  }
`;