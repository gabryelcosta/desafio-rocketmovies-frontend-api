import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: ${({ isBigSize }) => (isBigSize ? '16px' : '6px')};
  margin-top: 8px;

  svg {
    font-size: ${({ isBigSize }) => (isBigSize ? '20px' : '12px')};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
