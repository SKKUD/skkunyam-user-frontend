import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BuildingStore from './BuildingStore';

const BuildingStores = ({ stores }) => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {stores.map((store) => (
                <BuildingStore key={store.id} store={store} />
            ))}
        </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 40,
  }
});

export default BuildingStores;
