import { yupResolver } from '@hookform/resolvers/yup';
import { CommonActions } from '@react-navigation/routers';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import InputFieldDatePicker from '../../components/InputFieldDatePicker/InputFieldDatePicker';
import { ButtonType } from '../../enums/ButtonType';
import { IProduct } from '../../models/Product.model';
import { ScreenName } from '../../navigation/constants/screen.constants';
import { RegisterScreenNavigationProp } from '../../navigation/models/navigationProps.model';
import api from '../../services/api';
import { addOneYear } from '../../utils/date.util';
import styles from './RegisterScreen.styles';
import registerProductSchema from './schema/registerProduct.schema';

interface IProps {
  navigation: RegisterScreenNavigationProp;
  route?: {
    params: {
      detail: IProduct;
    };
  };
}

const resetStackToHomeScreen = (navigation: RegisterScreenNavigationProp) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: ScreenName.PRODUCTS}],
    }),
  );
};


const RegisterScreen = ({navigation, route}: IProps) => {
  const detail = route?.params?.detail;
  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: {errors},
    watch,
  } = useForm({
    resolver: yupResolver(registerProductSchema),
    defaultValues: {
      id: detail?.id || '',
      name: detail?.name || '',
      description: detail?.description || '',
      logo: detail?.logo || '',
      date_release: new Date(),
      date_revision: addOneYear(new Date()),
    } 
  });

  const onSubmit = async (product: IProduct) => {
    let response = undefined;

    if (!detail) {
      response = await api.saveProduct(product);
    } else {
      response = await api.updateProduct(product);
    }

    if (response?.data) {
      if(!detail)resetStackToHomeScreen(navigation);
      else navigation.navigate(ScreenName.PRODUCT_DETAIL, {detail: response.data});
    } else {
      control.setError('id', {message: 'El ID ya existe'});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{detail ? 'Actualización de Registro' : 'Formulario de Registro'}</Text>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="id"
          render={({field}) => (
            <InputField
              label={'ID'}
              fields={{...field}}
              errors={errors.id?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="name"
          render={({field}) => (
            <InputField
              label={'Nombre'}
              fields={{...field}}
              errors={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({field}) => (
            <InputField
              label={'Descripción'}
              fields={{...field}}
              errors={errors.description?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="logo"
          render={({field}) => (
            <InputField
              label={'Logo'}
              fields={{...field}}
              errors={errors.logo?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="date_release"
          render={({field}) => (
            <InputFieldDatePicker
              field={{...field}}
              label={'Fecha liberación'}
              errors={errors.date_release?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="date_revision"
          render={({field}) => {
            const dateRevisionValue = watch().date_release;
            return (
              <InputFieldDatePicker
                field={{...field}}
                label={'Fecha revisión'}
                errors={errors.date_revision?.message}
                dateRevisionValue={dateRevisionValue}
              />
            );
          }}
        />

        <Button
          text={"Enviar"}
          onPress={handleSubmit(onSubmit)}
          buttonType={ButtonType.PRIMARY}
        />
        <Button text="Reiniciar" onPress={() => reset()} />
      </View>
    </View>
  );
};

export default RegisterScreen;
