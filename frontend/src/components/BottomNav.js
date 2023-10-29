import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import homeIcon from "../images/nav/nav_home.png";
import stampIcon from "../images/nav/nav_stamp.png";
import orderIcon from "../images/nav/nav_order.png";
import bookmarkIcon from "../images/nav/nav_bookmark.png";
import myIcon from "../images/nav/nav_my.png";

const BottomNav = ({ state, navigation }) => {
  const handlePress = (index) => {
    const event = navigation.emit({
      type: "tabPress",
      target: state.routes[index].key,
    });

    if (!event.defaultPrevented) {
      navigation.navigate(state.routes[index].name);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handlePress(0)}>
          <View style={state.index === 0 ? styles.activeTab : null}>
            <Image source={homeIcon} />
            <Text style={styles.label}>홈</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handlePress(1)}>
          <View style={state.index === 1 ? styles.activeTab : null}>
            <Image source={stampIcon} />
            <Text style={styles.label}>스탬프</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.orderButtonContainer}>
        <View style={styles.orderButton}>
          <TouchableOpacity onPress={() => handlePress(2)}>
            <Image source={orderIcon} />
            <Text style={{...styles.label, fontWeight: 'bold', color: '#725827'}}>ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handlePress(3)}>
          <View style={state.index === 3 ? styles.activeTab : null}>
            <Image source={bookmarkIcon} />
            <Text style={styles.label}>북마크</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handlePress(4)}>
          <View style={state.index === 4 ? styles.activeTab : null}>
            <Image source={myIcon} />
            <Text style={styles.label}>마이</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 95,
    backgroundColor: "#fff",
    position: "absolute",
    paddingBottom: 25,
    paddingHorizontal: 15,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    color: '#666666',
    textAlign: 'center',
    marginTop: 3,
  },
  orderButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderButton: {
    backgroundColor: '#FFE769',
    width: 82,
    height: 82,
    borderRadius: 41,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
//   activeTab: {
//     backgroundColor: '#62b5f7',
//     borderRadius: 20,
//     padding: 5,
//   },
});

export default BottomNav;
