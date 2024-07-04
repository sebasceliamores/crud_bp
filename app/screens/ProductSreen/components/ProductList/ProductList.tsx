import React from 'react';
import { FlatList, View } from 'react-native';
import { IProduct } from '../../../../models/Product.model';
import { ProductScreenNavigationProp } from '../../../../navigation/models/navigationProps.model';
import Product from './Product/Product';
import ProductListStyles from './ProductList.styles';

const keyExtractor = (item: any, index: any) => `${item?.id}_${index}`;

interface IProps {
  navigation: ProductScreenNavigationProp;
  data: IProduct[];
}

const ProductList = ({navigation, data}: IProps) => {

  return (
    <View style={ProductListStyles.flatListContainer}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={ProductListStyles.separator} />
        )}
        keyExtractor={keyExtractor}
        data={data}
        renderItem={({item}) => (
          <Product detail={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default ProductList;
