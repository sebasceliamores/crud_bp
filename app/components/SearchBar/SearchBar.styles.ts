import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInput: {
    width: "100%",
    textAlign: 'left',
    fontSize: heightPercentageToDP(2),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.gray_d3d3d3,
    paddingHorizontal: heightPercentageToDP(1),
    color: Colors.black,
    flexDirection: 'row',
  },
});
