import styled, { css } from 'styled-components/native';
import { Image as ReactImage } from 'react-native';

interface ImageProps {
  source: ReactImage;
}

interface ViewProps {
  backgroundColor?: string;
  flexContent?: number;
}

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const View = styled.View<ViewProps>`
  background-color: #f5faf7;
  flex: 1;
  width: 100%;

  ${props =>
    props.flexContent &&
    css`
      flex: ${props.flexContent};
    `}

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  align-items: center;
  justify-content: center;
`;

export const ViewPlantInfo = styled.View`
  height: 310px;

  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image<ImageProps>``;

export const WaterView = styled.View`
  background-color: #e6f1fa;

  width: 330px;
  height: 100px;
  border-radius: 25px;

  flex-direction: row;
  align-items: center;
  padding: 10px 25px;

  position: absolute;
  top: 50%;
`;

export const Circle = styled.View`
  width: 60px;
  height: 60px;

  border-radius: 50px;
  justify-content: center;
  align-items: center;

  background-color: #d6edff;
`;

export const ArrowLeft = styled.TouchableOpacity`
  height: 50px;
  width: 50px;

  justify-content: center;
  align-items: center;

  position: absolute;
  top: 4%;
  left: 4%;
`;
