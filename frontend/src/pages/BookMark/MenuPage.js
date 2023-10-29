import { StyleSheet, View } from "react-native";
import SortingOrderSelector from "../../components/BookMark/SortingOrderSelector";
import { useState } from "react";
import { menuList } from "../../components/BookMark/dummy";
import MenuItem from "../../components/BookMark/MenuItem";

const MenuPage = () => {
  const [sortingOrder, setSortingOrder] = useState(0);
  const [_menuList, setMenuList] = useState(menuList);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SortingOrderSelector
          setSortingOrder={setSortingOrder}
          sortingOrder={sortingOrder}
        />
      </View>
      <View style={styles.body}>
        {_menuList.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
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

    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  body: {
    marginTop: 24,
  },
});

export default MenuPage;
