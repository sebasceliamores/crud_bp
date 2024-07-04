import React, { useState } from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.styles';
import Colors from '../../styles/Colors';
import { IProduct } from '../../models/Product.model';

interface SearchBarProps {
  data: IProduct[]
  setDataManager: (data: IProduct[]) => void;
}

const SearchBar = ({data, setDataManager}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchFilter = () => {
    if(searchTerm === "") {
      setDataManager(data);
      return
    }

    const dataFiltered = data.filter((item) => {
      return item.name!.toLowerCase().includes(searchTerm.toLowerCase()) || item.id!.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setDataManager(dataFiltered);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search...'}
        underlineColorAndroid="transparent"
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        autoCapitalize="none"
        onSubmitEditing={searchFilter}
        returnKeyType={'search'}
        autoCorrect={false}
        selectionColor={Colors.black}
        testID="searchTextInput"
      />
    </View>
  );
};

export default SearchBar;
