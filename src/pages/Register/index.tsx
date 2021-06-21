import React, { useState } from 'react';
import { Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Input, Main } from './styles';
import LitleEmoji from '../../assets/images/litleEmoji.png';
import Button from '../../components/Button';
import Title from '../../components/Title';

const Register: React.FC = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Container>
      <Main>
        <Image source={LitleEmoji} />

        <Title>Como podemos chamar você?</Title>

        <Input onChangeText={value => setInputValue(value)} />

        <Button
          onPress={() =>
            inputValue
              ? navigation.navigate('Confirmation', { name: inputValue })
              : Alert.alert('Digite seu nome para prosseguir')
          }
        >
          Confirmar
        </Button>
      </Main>
    </Container>
  );
};

export default Register;
