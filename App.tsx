import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getScreens} from './app/navigation/layout/NavScreens/NavScreens';
import { ScreenName } from './app/navigation/constants/screen.constants';
import Header from './app/navigation/layout/Header/Header';
import { StatusBar } from 'react-native';

export const StackNavigator = createNativeStackNavigator();
StatusBar.setHidden(true);

const isAuth = true;

function App() {

  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName={ScreenName.PRODUCTS}
        screenOptions={{
          orientation: 'portrait',
          header: (p) => <Header navigation={p.navigation} route={p.route}  />,
        }}>
        <StackNavigator.Group>{getScreens(isAuth)}</StackNavigator.Group>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;
