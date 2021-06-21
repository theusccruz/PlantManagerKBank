import styled, { css } from 'styled-components/native';

type ButtonStyleProps = {
  width?: number;
  height?: number;
};

type ButtonTextProps = {
  fontSize?: number;
};

export const ButtonContent = styled.TouchableOpacity<ButtonStyleProps>`
  background: #32b768;

  width: 220px;
  height: 60px;
  border-radius: 20px;

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 17px;
  font-family: 'Jost-Medium';
  color: #fff;

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}
`;
