import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: heightPercentageToDP(1),
  },
  label: {
    fontSize: heightPercentageToDP(1.6),
  },
  input: {
    width: '100%',
    textAlign: 'left',
    fontSize: heightPercentageToDP(1.7),
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.gray_d3d3d3,
    paddingHorizontal: widthPercentageToDP(1),
    marginVertical: heightPercentageToDP(0.7),
    color: Colors.black,
    flexDirection: 'row',
  },
  textErrors: {
    color: Colors.red_d80404,
  },
  errors: {
    borderColor: Colors.red_d80404,
  },
});
