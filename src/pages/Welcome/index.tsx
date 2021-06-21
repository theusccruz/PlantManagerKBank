import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import Woman from '../../assets/images/woman.png';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Text from '../../components/Text';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title fontSize={30} contentWidth={260}>
        Gerencie {'\n'} suas plantas de forma fácil
      </Title>

      <Image source={Woman} />

      <Text>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que
        precisar.
      </Text>

      <Button
        fontSize={29}
        width={65}
        height={65}
        onPress={() => navigation.navigate('Register')}
      >
        {'>'}
      </Button>
    </Container>
  );
};

export default Welcome;
