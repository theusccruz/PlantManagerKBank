import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Container, Image, Main } from './styles';
import Emoji from '../../assets/images/emoji.png';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Text from '../../components/Text';

interface RouteParams {
  name: string;
}

const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params as RouteParams;

  return (
    <Container>
      <Image source={Emoji} />

      <Main>
        <Title>Prontinho, {name}</Title>

        <Text>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</Text>
      </Main>

      <Button onPress={() => navigation.navigate('Home', { name })}>Começar</Button>
    </Container>
  );
};

export default Confirmation;
