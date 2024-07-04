import { StyleSheet } from 'react-native';
import Colors from '../../../../styles/Colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
  flatListContainer: {
    maxHeight: heightPercentageToDP(65),
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.gray_d3d3d3,
    marginVertical: heightPercentageToDP(5),
  },
  separator:{
    width: '100%',
    height: 2,
    backgroundColor: Colors.gray_d3d3d3,
  },
});
