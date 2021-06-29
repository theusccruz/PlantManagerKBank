import React, { useState } from 'react';
import { Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import {
  Container,
  UserContent,
  UserView,
  Text,
  View,
  RoomsList,
  RoomButton,
  PlantList,
  PlantButton,
  PlantImage,
} from './styles';
import apiData from '../../utils/ApiMockData';
import Avatar from '../../assets/images/avatar.png';

interface RouteParams {
  name: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params as RouteParams;

  const [buttonRoomId, setButtonRoomId] = useState<string>();

  return (
    <Container>
      <UserContent>
        <UserView>
          <Text lineHeight={36}>Olá,</Text>
          <Text fontFamily="Jost-Medium" lineHeight={36}>
            {name}
          </Text>
        </UserView>
        <Image source={Avatar} />
      </UserContent>

      <View>
        <Text fontSize={17} fontFamily="Jost-Medium">
          Em qual ambiente
        </Text>
        <Text fontSize={17}>você quer colocar sua planta?</Text>
      </View>

      <RoomsList
        data={apiData.rooms}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={room => room.id}
        renderItem={({ item: room }) => (
          <RoomButton
            isFocused={buttonRoomId === room.id}
            onPress={() => setButtonRoomId(room.id)}
          >
            <Text fontSize={13} isFocused={buttonRoomId === room.id}>
              {room.name}
            </Text>
          </RoomButton>
        )}
      />

      <PlantList
        data={apiData.plants}
        keyExtractor={plant => plant.name}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: plant }) => (
          <PlantButton
            onPress={() =>
              navigation.navigate('Plant', { plantName: plant.name, photo: plant.photo })
            }
          >
            <PlantImage resizeMode="contain" source={plant.photo} />
            <Text fontSize={13} fontFamily="Jost-Medium">
              {plant.name}
            </Text>
          </PlantButton>
        )}
      />
    </Container>
  );
};

export default Home;
