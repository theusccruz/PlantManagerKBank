import { Image } from 'react-native';

import Imbe from '../../assets/images/plants/imbe.png';
import Aningapara from '../../assets/images/plants/aningapara.png';
import Yucca from '../../assets/images/plants/yucca.png';
import EspadaSJ from '../../assets/images/plants/espadasj.png';
import Peperomia from '../../assets/images/plants/peperomia.png';
import Zamioculca from '../../assets/images/plants/zamioculca.png';

export type RoomProps = {
  id: string;
  name: string;
};

export type PlantProps = {
  id: string;
  name: string;
  photo: Image;
};

export interface ApiDataProps {
  rooms: RoomProps[];
  plants: PlantProps[];
}

const apiData: ApiDataProps = {
  rooms: [
    {
      id: '1',
      name: 'Sala',
    },
    {
      id: '2',
      name: 'Cozinha',
    },
    {
      id: '3',
      name: 'Varanda',
    },
    {
      id: '4',
      name: 'Quarto',
    },
    {
      id: '5',
      name: 'Quintal',
    },
    {
      id: '6',
      name: 'Área',
    },
    {
      id: '7',
      name: 'Banheiro',
    },
    {
      id: '8',
      name: 'Quadra',
    },
    {
      id: '9',
      name: 'Dispensa',
    },
  ],
  plants: [
    {
      id: '1',
      name: 'Imbé',
      photo: Imbe,
    },
    {
      id: '2',
      name: 'Aningapara',
      photo: Aningapara,
    },
    {
      id: '3',
      name: 'Espada de São Jorge',
      photo: EspadaSJ,
    },
    {
      id: '4',
      name: 'Yucca',
      photo: Yucca,
    },
    {
      id: '5',
      name: 'Peperomia',
      photo: Peperomia,
    },
    {
      id: '6',
      name: 'Zamioculca',
      photo: Zamioculca,
    },
  ],
};

export default apiData;
