import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScreenName } from '../../navigation/constants/screen.constants';
import { HomeScreenNavigationProp } from '../../navigation/models/navigationProps.model';

interface IProps {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({navigation}: IProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Products"
        onPress={() => {
          console.log("STACK NAVIGATION", navigation.getState().history)
          navigation.navigate(ScreenName.PRODUCTS)}}
      />
    </View>
  );
};

export default HomeScreen;
