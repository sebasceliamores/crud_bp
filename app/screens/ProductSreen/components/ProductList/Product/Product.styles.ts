import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Colors from '../../../../../styles/Colors';

export default StyleSheet.create({
  container: {
    height: heightPercentageToDP(7.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '1.5%',
    paddingHorizontal: '2%',
  },
  nameText: {
    fontSize: heightPercentageToDP(1.7),
    color: Colors.gray_717174,
    fontWeight: '500',
  },
  idText: {
    fontSize: heightPercentageToDP(1.45),
    color: Colors.gray_717174,
  },
  arrow: {
    fontSize: heightPercentageToDP(3),
    color: Colors.gray_717174,
  }
});
