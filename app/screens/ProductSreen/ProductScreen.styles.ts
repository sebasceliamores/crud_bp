import {StyleSheet} from 'react-native';
import AppStyles from '../../styles/AppStyles';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    ...AppStyles.screen,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    marginBottom: 30
  },
  buttonsContainer: {
    // flex: 0.1, 
    width: "100%",
    // justifyContent: "flex-end"
  },
  noDataText: {
    fontSize: heightPercentageToDP(3),
    color: Colors.gray_717174,
  }
});
