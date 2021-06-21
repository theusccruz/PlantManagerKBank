import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Confirmation from '../pages/Confirmation';
import Home from '../pages/Home';
import Plant from '../pages/Plant';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <App.Screen name="Welcome" component={Welcome} />
      <App.Screen name="Register" component={Register} />
      <App.Screen name="Confirmation" component={Confirmation} />
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Plant" component={Plant} />
    </App.Navigator>
  );
};

export default Routes;
