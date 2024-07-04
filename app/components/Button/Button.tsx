import React from 'react';
import {Text, TouchableOpacity, ViewStyle, StyleProp} from 'react-native';
import styles from './Button.styles';
import {ButtonType} from '../../enums/ButtonType';

interface ButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  buttonType?: ButtonType;
  customStyles?: StyleProp<ViewStyle>;
}

const Button = (props: ButtonProps) => {
  const {disabled, text, customStyles, onPress, buttonType} = props;

  const setButtonStylesByType = () => {
    switch (buttonType) {
      case ButtonType.PRIMARY:
        return styles.primaryButton;
      case ButtonType.SECONDARY:
        return styles.secondaryButton;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.defaultButton, customStyles, setButtonStylesByType()]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, buttonType === ButtonType.SECONDARY && styles.textWhite]}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
