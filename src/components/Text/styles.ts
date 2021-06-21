import styled, { css } from 'styled-components/native';

type TextStyleProps = {
  fontSize?: number;
  width?: number;
  color?: string;
};

export const ContentText = styled.Text<TextStyleProps>`
  width: 300px;

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  text-align: center;
  font-family: 'Jost-Regular';
  font-size: 17px;
  line-height: 25px;

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}

  color: #5c6660;

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
