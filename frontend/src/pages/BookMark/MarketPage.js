import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SortingOrderSelector from "../../components/BookMark/SortingOrderSelector";
import { marketList } from "../../components/BookMark/dummy";
import MarketItem from "../../components/BookMark/MarketItem";

const MarketPage = () => {
  const [sortingOrder, setSortingOrder] = useState(0);
  const [markets, setMarkets] = useState(marketList);

  return (
    <View style={styles.container}>
      <View style={styles.mapView}></View>
      <View style={styles.body}>
        {markets.map((market) => (
          <MarketItem key={market.id} market={market} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  mapView: {
    height: 150,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
  },
  body: {
    marginTop: 40,
  },
});

export default MarketPage;
