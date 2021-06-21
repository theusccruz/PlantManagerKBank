import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContent, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  fontSize?: number;
  width?: number;
  height?: number;
}

const Button: React.FC<ButtonProps> = ({ fontSize, width, height, children, ...rest }) => {
  return (
    <ButtonContent width={width} height={height} {...rest}>
      <ButtonText fontSize={fontSize}>{children}</ButtonText>
    </ButtonContent>
  );
};

export default Button;
