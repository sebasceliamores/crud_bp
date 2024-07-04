import { StyleSheet } from 'react-native';
import AppStyles from '../../../../styles/AppStyles';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../../../../styles/Colors';

export default StyleSheet.create({
  container: {
    ...AppStyles.screen,
    flex: 1,
  },
  idText: {
    fontSize: heightPercentageToDP(2.5),
    fontWeight: 'bold',
    color: Colors.gray_717174
  },
  infoText: {
    fontSize: heightPercentageToDP(1.6),
    color: Colors.gray_717174
  },
  blankSpace: {
    height: heightPercentageToDP(7),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPercentageToDP(2),
  },
  nameText: {
    fontSize: heightPercentageToDP(2),
    color: Colors.gray_717174,
  },
  detailNameText : {
    fontSize: heightPercentageToDP(2),
    fontWeight: 'bold',
    color: Colors.gray_717174,
    width: '50%',
    textAlign: 'right'
  },
  descText: {
    fontSize: heightPercentageToDP(2),
    color: Colors.gray_717174,
  },
  detailDescText : {
    fontSize: heightPercentageToDP(2),
    fontWeight: 'bold',
    color: Colors.gray_717174,
    width: '50%',
    textAlign: 'right'
  },
  logoContainer: {
    marginBottom: heightPercentageToDP(2.5),
  },
  logoText: {
    fontSize: heightPercentageToDP(2),
    color: Colors.gray_717174,
  },
  logoImg : {
    alignSelf: 'center',
    width: heightPercentageToDP(25),
    height: heightPercentageToDP(15),
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
  }
});
