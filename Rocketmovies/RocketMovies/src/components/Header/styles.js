import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  padding: 24px 123px;
  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > h1 {
    font-size: 28px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};

    cursor: pointer;
  }

  h1:hover {
    filter: brightness(0.9);
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 35px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};

    cursor: pointer;
  }

  img:hover {
    filter: brightness(0.9);
  }

  > div {
    display: flex;
    align-items: end;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;

    strong {
      font-size: 14px;
      font-weight: 700;

      cursor: pointer;

      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }

    strong:hover{
      filter: brightness(0.9);
    }

    span {
      font-size: 14px;
      font-weight: 400;

      cursor: pointer;

      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }

    span:hover {
      filter: brightness(0.9);
    }
  }
`;