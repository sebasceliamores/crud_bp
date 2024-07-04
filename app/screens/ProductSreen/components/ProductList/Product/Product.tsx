import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import ProductStyles from './Product.styles';
import {IProduct} from '../../../../../models/Product.model';
import {ProductScreenNavigationProp} from '../../../../../navigation/models/navigationProps.model';

interface IProps {
  detail: IProduct;
  navigation: ProductScreenNavigationProp;
}

const Product = ({detail, navigation}: IProps) => {
  const {id, name} = detail;
  const openProductDetails = () => {
    navigation.navigate('ProductDetail', {detail});
  };

  return (
    <TouchableOpacity
      style={ProductStyles.container}
      onPress={openProductDetails}>
      <View>
        <Text style={ProductStyles.nameText}>{name}</Text>
        <Text style={ProductStyles.idText}>ID: {id}</Text>
      </View>
      <Text style={ProductStyles.arrow}>{`>`}</Text>
    </TouchableOpacity>
  );
};

export default Product;
