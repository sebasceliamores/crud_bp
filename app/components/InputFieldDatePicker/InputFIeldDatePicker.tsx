import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

const InputFiel = ({ field }: { field: ControllerRenderProps<any> }) => {
  const { onChange, value } = field;

  return (
    <DateTimePicker
      value={value ? new Date(value) : new Date()}
      mode="date"
      display="default"
      onChange={(event, selectedDate) => {
        onChange(selectedDate || value);
      }}
    />
  );
};

export default SelectDatePicker;