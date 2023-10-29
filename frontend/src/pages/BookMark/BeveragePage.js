import { StyleSheet, View } from "react-native";
import SortingOrderSelector from "../../components/BookMark/SortingOrderSelector";
import { useState } from "react";
import { beverageList } from "../../components/BookMark/dummy";
import BeverageItem from "../../components/BookMark/BeverageItem";

const BeveragePage = () => {
  const [sortingOrder, setSortingOrder] = useState(0);
  const [beverages, setBeverages] = useState(beverageList);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SortingOrderSelector
          sortingOrder={sortingOrder}
          setSortingOrder={setSortingOrder}
        />
      </View>
      <View style={styles.body}>
        {beverages.map((beverage, index) => (
          <BeverageItem key={index} beverage={beverage} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 28,
    alignItems: "flex-end",
  },
  body: {
    marginTop: 24,
  },
});

export default BeveragePage;
