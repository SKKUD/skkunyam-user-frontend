import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NearStore from './NearStore';
import chunkArray from '../../utils/chunkArray';

const NearStores = ({ stores }) => {
  const chunkedStores = chunkArray(stores);

  return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
                {chunkedStores.map((storeGroup, index) => (
                <View key={index} style={styles.storeGroup}>
                    {storeGroup.map((store) => (
                        <NearStore key={store.id} store={store} />
                    ))}
                </View>
                ))}
            </View>
        </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  storeGroup: {
    marginRight: 20,
    flexDirection: 'row',
  },
});

export default NearStores;
