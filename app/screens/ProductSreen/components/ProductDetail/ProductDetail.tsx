import React from 'react';
import {ProductDetailScreenNavigationProp} from '../../../../navigation/models/navigationProps.model';
import {Image, Text, View} from 'react-native';
import {IProduct} from '../../../../models/Product.model';
import AppStyles from '../../../../styles/AppStyles';
import ProductDetailStyles from './ProductDetail.styles';
import {ButtonType} from '../../../../enums/ButtonType';
import Button from '../../../../components/Button/Button';
import { ScreenName } from '../../../../navigation/constants/screen.constants';
import api from '../../../../services/api';
import { CommonActions } from '@react-navigation/routers';

interface Props {
  navigation: ProductDetailScreenNavigationProp;
  route: {
    params: {
      detail: IProduct;
    };
  };
}

const resetStackToHomeScreen = (navigation: ProductDetailScreenNavigationProp) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: ScreenName.PRODUCTS}],
    }),
  );
};

const ProductDetail = ({navigation, route}: Props) => {
  // Implement your component logic here
  const detail = route.params.detail;
  const releaseDate = new Date(detail.date_release!);
  const releaseDateFormatted = `${releaseDate.getDate()}/${releaseDate.getMonth()}/${releaseDate.getFullYear()}`;

  const revisionDate = new Date(detail.date_revision!);
  const revisionDateFormatted = `${revisionDate.getDate()}/${revisionDate.getMonth()}/${revisionDate.getFullYear()}`;

  const handleDelete = async (id: string) => {
    const response = await api.deleteProduct(id);
    resetStackToHomeScreen(navigation);
  }

  return (
    <View style={ProductDetailStyles.container}>
      <View style={{flex: 0.8}}>
        <Text style={ProductDetailStyles.idText}>ID: {detail.id}</Text>
        <Text style={ProductDetailStyles.infoText}>Información extra</Text>
        <View style={ProductDetailStyles.blankSpace} />

        {/*  NAME */}
        <View style={ProductDetailStyles.textContainer}>
          <Text style={ProductDetailStyles.nameText}>Nombre</Text>
          <Text style={ProductDetailStyles.detailNameText}>{detail.name}</Text>
        </View>

        {/*  DESCRIPTION */}
        <View style={ProductDetailStyles.textContainer}>
          <Text style={ProductDetailStyles.descText}>Descripción</Text>
          <Text style={ProductDetailStyles.detailDescText}>
            {detail.description}
          </Text>
        </View>

        {/*  LOGO */}
        <View style={ProductDetailStyles.logoContainer}>
          <Text style={ProductDetailStyles.logoText}>Logo</Text>
          <Image
            source={{uri: detail.logo}}
            style={ProductDetailStyles.logoImg}
          />
        </View>

        {/*  DATE RELEASE */}
        <View style={ProductDetailStyles.textContainer}>
          <Text style={ProductDetailStyles.descText}>Fecha de liberación</Text>
          <Text style={ProductDetailStyles.detailDescText}>
            {releaseDateFormatted}
          </Text>
        </View>

        {/*  DATE REVISION */}
        <View style={ProductDetailStyles.textContainer}>
          <Text style={ProductDetailStyles.descText}>Fecha de revisión</Text>
          <Text style={ProductDetailStyles.detailDescText}>
            {revisionDateFormatted}
          </Text>
        </View>
      </View>
      <View style={ProductDetailStyles.buttonsContainer}>
        <Button
          text={'Editar'}
          onPress={() => navigation.navigate(ScreenName.REGISTER_PRODUCT, {detail})}
          buttonType={ButtonType.DEFAULT}
        />
        <Button
          text={'Eliminar'}
          onPress={() => handleDelete(detail.id)}
          buttonType={ButtonType.SECONDARY}
        />
      </View>
    </View>
  );
};

export default ProductDetail;
