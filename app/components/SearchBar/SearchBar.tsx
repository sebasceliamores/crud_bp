import React, { useState } from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.styles';
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
        // underlineColorAndroid="black"
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={searchFilter}
        returnKeyType={'search'}
        // autoCorrect={false}
        // testID="searchTextInput"
      />
    </View>
  );
};

export default SearchBar;
