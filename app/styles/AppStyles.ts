import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const AppStyles = StyleSheet.create({
  screen: {
    margin: heightPercentageToDP(5),
  },
  title: {
    fontSize: heightPercentageToDP(3),
    alignSelf: "flex-start"
  }
});

export default AppStyles;
