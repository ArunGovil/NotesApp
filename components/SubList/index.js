import React from 'react';
import {View, FlatList} from 'react-native';
import Subjects from '../Subjects';

import styles from './styles';
import subs from './subs';

const SubList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        data={subs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Subjects sub={item} />}
      />
    </View>
  );
};

export default SubList;
