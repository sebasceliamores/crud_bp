import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {ProductScreenNavigationProp} from '../../navigation/models/navigationProps.model';
import ProductList from './components/ProductList/ProductList';
import Button from '../../components/Button/Button';
import {ButtonType} from '../../enums/ButtonType';
import styles from './ProductScreen.styles';
import SearchBar from '../../components/SearchBar/SearchBar';
import { ScreenName } from '../../navigation/constants/screen.constants';
import api from '../../services/api';

interface ProductScreenProps {
  navigation: ProductScreenNavigationProp;
}

const ProductScreen = ({navigation}: ProductScreenProps) => {
  const {data, loading, error} = api.getProducts();
  const [dataManager, setDataManager] = useState(data);

  useEffect(() => {
    setDataManager(data);
  }, [data]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.noDataText}>Error: {error.message}</Text>;
  }

  if (!dataManager || dataManager.length === 0) {
    return <Text style={styles.noDataText}>No data</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection:"column", width: "100%"}}>
        <SearchBar data={data!} setDataManager={setDataManager} />
        <ProductList navigation={navigation} data={dataManager} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          text={'Agregar'}
          buttonType={ButtonType.PRIMARY}
          onPress={() => navigation.navigate(ScreenName.REGISTER_PRODUCT)}
        />
      </View>
    </View>
  );
};

export default ProductScreen;
