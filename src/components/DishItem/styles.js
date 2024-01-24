import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
width: 100%;

background-color: ${({ theme, isnew }) => isnew== 'true' ? "transparent" : theme.COLORS.GRAY_600};
color: ${({ theme }) => theme.COLORS.WHITE_100};


border: ${({ theme, isnew }) => isnew== 'true' ? `1px dashed ${theme.COLORS.GRAY_400}` : "none"};

margin-bottom: 0.8rem;
border-radius: 1rem;
padding-right: 1.6rem;

@media (min-width: 768px) {
  width: 25%;
}


> button {
  border: none;
  background: transparent;
}

.button-delete {
  color: ${({ theme }) => theme.COLORS.WHITE_100};
}

.button-add {
  color: ${({ theme }) => theme.COLORS.GRAY_500};
}

> input {
  width: 100%;
  padding: 1rem 1.6rem;

  font-size: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background: transparent;

  font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};

  font-weight: 400;
  line-height: 100%;

  border: none;

  text-align:center;

  @media (min-width: 768px) {
    font-size: 14px;
}

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
}
`;