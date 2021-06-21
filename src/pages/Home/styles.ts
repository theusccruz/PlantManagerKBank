import styled, { css } from 'styled-components/native';
import { FlatList, Image as ReactImage } from 'react-native';
import { PlantProps, RoomProps } from '../../utils/ApiMockData';

type TextStyleProps = {
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  isFocused?: boolean;
};

type RoomButtonProps = {
  isFocused?: boolean;
};

interface ImageProps {
  source: ReactImage;
}

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;

  padding: 20px 0;
`;

export const UserContent = styled.View`
  height: 150px;
  width: 355px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserView = styled.View`
  width: 280px;
  height: 100px;

  justify-content: center;
`;

export const Text = styled.Text<TextStyleProps>`
  font-size: 32px;
  font-family: 'Jost-Light';

  ${props =>
    props.fontFamily &&
    css`
      font-family: ${props.fontFamily};
    `}

  ${props =>
    props.isFocused &&
    css`
      font-family: 'Jost-Medium';
    `}

  ${props =>
    props.lineHeight &&
    css`
      line-height: ${props.lineHeight}px;
    `}

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}

  color: #52665a;
`;

export const View = styled.View`
  width: 355px;
  height: 50px;
`;

export const RoomsList = styled(FlatList as new () => FlatList<RoomProps>)`
  margin: 20px 0 20px 25px;
  height: 50px;
`;

export const RoomButton = styled.TouchableOpacity<RoomButtonProps>`
  width: 75px;
  height: 40px;

  background: #dcdce6;

  ${props =>
    props.isFocused &&
    css`
      background: #daf2e4;
    `}

  align-items: center;
  justify-content: center;

  border-radius: 12px;
  margin-right: 5px;
`;

export const PlantList = styled(FlatList as new () => FlatList<PlantProps>)`
  width: 355px;
  padding: 5px 0;
`;

export const PlantButton = styled.TouchableOpacity`
  width: 170px;
  height: 180px;

  background: #dcdce6;

  align-items: center;
  justify-content: space-evenly;

  border-radius: 20px;
  margin-bottom: 15px;
  padding: 5px;
`;

export const PlantImage = styled.Image<ImageProps>`
  flex: 0.7;
`;
