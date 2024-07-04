import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    height: heightPercentageToDP(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: heightPercentageToDP(1.9),
    color: '#7784a0 ',
    fontWeight: 'bold',
  },
});
