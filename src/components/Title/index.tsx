import React from 'react';
import { TextProps } from 'react-native';

import { ContentTitle, TextTitle } from './styles';

interface TitleProps extends TextProps {
  children: string[] | string;
  contentWidth?: number;
  fontSize?: number;
}

const Title: React.FC<TitleProps> = ({ contentWidth, fontSize, children, ...rest }) => {
  return (
    <ContentTitle width={contentWidth}>
      <TextTitle fontSize={fontSize} {...rest}>
        {children}
      </TextTitle>
    </ContentTitle>
  );
};

export default Title;
