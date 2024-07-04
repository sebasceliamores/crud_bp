import React from 'react';
import {TextInput, View, Text, Touchable, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {ControllerRenderProps, FieldErrors} from 'react-hook-form';

import styles from './InputField.styles';

type InputFieldProps = {
  label: string;
  errors: string | undefined;
  fields: ControllerRenderProps;
  onPress?: () => void;
  editable?: boolean;
  disableOnPress?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({label, errors, fields, onPress, editable, disableOnPress}) => {
  return (
    <TouchableOpacity disabled={disableOnPress} onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onTouchEnd={onPress}
        style={[styles.input, errors ? styles.errors : undefined]}
        onChangeText={fields.onChange}
        editable={editable}
        {...fields}
      />
      {errors && <Text style={styles.textErrors}>{errors}</Text>}
    </TouchableOpacity>
  );
};

export default InputField;
