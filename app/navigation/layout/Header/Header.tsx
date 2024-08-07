import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HeaderStyles from './Header.styles';
import {ScreenName} from '../../constants/screen.constants';
import {CommonActions, Route} from '@react-navigation/native';

interface IProps {
  navigation: NativeStackNavigationProp<any, any>;
  route: Route<string>;
}

const Header = ({navigation, route}: IProps) => {
  const isHomeScreen = route.name === ScreenName.PRODUCTS;

  const navigateToHomeScreenAndReset = () => {
    if (isHomeScreen) return;

    const handleLogout = () => {
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [
          { name: ScreenName.PRODUCTS }
        ],
      }));
    };

    handleLogout();
  };

  return (
    <TouchableOpacity
      style={HeaderStyles.container}
      onPress={navigateToHomeScreenAndReset}
      disabled={isHomeScreen}>
      <Text style={HeaderStyles.text}>BANCO</Text>
    </TouchableOpacity>
  );
};

export default Header;
