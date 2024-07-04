import React, {useEffect, useState} from 'react';
import {ControllerRenderProps} from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../InputField/InputField';
import { addOneYear, formatDate_mm_dd_yyyy } from '../../utils/date.util';

interface IProps {
  field: ControllerRenderProps;
  label: string;
  errors: string | undefined;
  dateRevisionValue?: Date;
}

const InputFieldDatePicker = ({
  field,
  label,
  errors,
  dateRevisionValue,
}: IProps) => {
  const {onChange, value} = field;
  const [selectDatePicker, setSelectDatePicker] = useState(false);

  useEffect(() => {
    if (dateRevisionValue) {
      onChange(addOneYear(dateRevisionValue));
    }
  }
  , [dateRevisionValue]);

  useEffect(() => {
    if (value) {
      setSelectDatePicker(false);
    }
  }, [value]);

  return (
    <>
      <InputField
        label={label}
        fields={{...field, value: formatDate_mm_dd_yyyy(value)}}
        errors={errors}
        onPress={() => !selectDatePicker && setSelectDatePicker(true)}
        editable={dateRevisionValue ? false : true}
        disableOnPress={dateRevisionValue ? true : false}
      />
      {!dateRevisionValue && selectDatePicker ? (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            onChange(selectedDate || value);
          }}
        />
      ) : null}
    </>
  );
};

export default InputFieldDatePicker;
