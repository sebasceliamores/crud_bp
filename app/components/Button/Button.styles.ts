import { StyleSheet } from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  defaultButton: {
    width: "100%",
    height: heightPercentageToDP(7),
    backgroundColor: Colors.gray_d3d3d3,
    justifyContent: "center",
    marginTop: heightPercentageToDP(2)
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.redButton,
  },
  text: {
    textAlign: "center",
    fontSize: heightPercentageToDP(2),
    lineHeight: heightPercentageToDP(2),
    color: "black",
  },
  textWhite: {
    color: "white"
  },
});
