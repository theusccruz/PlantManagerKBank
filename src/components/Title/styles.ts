import styled, { css } from 'styled-components/native';

type TitleContentStyleProps = {
  width?: number;
};

type TitleTextProps = {
  fontSize?: number;
};

export const ContentTitle = styled.View<TitleContentStyleProps>`
  width: 250px;

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
`;

export const TextTitle = styled.Text<TitleTextProps>`
  font-size: 24px;
  font-family: 'Jost-SemiBold';
  text-align: center;
  line-height: 38px;
  font-style: normal;

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}

  color: #52665a;
`;
