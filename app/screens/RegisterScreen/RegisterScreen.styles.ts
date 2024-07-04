import {StyleSheet} from 'react-native';
import AppStyles from '../../styles/AppStyles';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    ...AppStyles.screen,
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title:{
    ...AppStyles.title,
  },
  formContainer: {
    width: '100%',
  },
});
