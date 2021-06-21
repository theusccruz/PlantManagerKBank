import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Image as ReactImage, StatusBar } from 'react-native';
import { IconFill, IconOutline } from '@ant-design/icons-react-native';

import {
  Container,
  Image,
  View,
  ViewPlantInfo,
  WaterView,
  Circle,
  ArrowLeft,
} from './styles';
import Water from '../../assets/images/water.png';
import Arrow from '../../assets/images/arrowLeft.png';
import Title from '../../components/Title';
import Text from '../../components/Text';

interface RoutePlantParams {
  plantName: string;
  photo: ReactImage;
}

const Plant: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { plantName, photo } = route.params as RoutePlantParams;

  return (
    <>
      <StatusBar backgroundColor="#F5FAF7" />
      <Container>
        <View flexContent={1.3}>
          <ViewPlantInfo>
            <Image source={photo} />
            <Title>{plantName}</Title>
            <Text>
              Não pode pegar sol e deve ficar em temperatura ambiente, dentro de casa.
            </Text>
          </ViewPlantInfo>
        </View>

        <View backgroundColor="#fff">
          <Text contentWidth={340}>
            Ela é realmente uma planta muito procurada por conta dessas características e em
            consequência dos trabalhos com linguagem de jardins tropicais estarem em moda,
            conta o consultor Marcelo Faisal do Viveiro Santa Cruz, que trabalha também como
            arquiteto, agrônomo e paisagista...
          </Text>
        </View>

        <ArrowLeft onPress={() => navigation.navigate('Home')}>
          <IconOutline name="left" size={20} color="#52665A" />
        </ArrowLeft>

        <WaterView>
          <Circle>
            <Image source={Water} />
          </Circle>
          <Text fontColor="#3D7199" fontSize={15} contentWidth={200}>
            A rega deve ser feita com 400ml a cada dois dias
          </Text>
        </WaterView>
      </Container>
    </>
  );
};

export default Plant;
