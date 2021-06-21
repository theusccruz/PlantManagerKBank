import React from 'react';
import { TextProps as ReactNativeTextProps } from 'react-native';

import { ContentText } from './styles';

interface TextProps extends ReactNativeTextProps {
  children: string;
  fontSize?: number;
  contentWidth?: number;
  fontColor?: string;
}

const Text: React.FC<TextProps> = ({
  fontSize,
  fontColor,
  contentWidth,
  children,
  ...rest
}) => {
  return (
    <ContentText color={fontColor} fontSize={fontSize} width={contentWidth} {...rest}>
      {children}
    </ContentText>
  );
};

export default Text;
