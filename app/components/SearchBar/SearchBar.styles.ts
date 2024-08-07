import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInput: {
    width: "100%",
    textAlign: 'left',
    fontSize: heightPercentageToDP(1.7),
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.gray_d3d3d3,
    paddingHorizontal: widthPercentageToDP(1),
    color: Colors.black,
    flexDirection: 'row',
  },
});
