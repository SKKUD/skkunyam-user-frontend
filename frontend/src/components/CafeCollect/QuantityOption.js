import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const QuantityOption = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.quantityContainer}>
      <Text style={styles.titleText}>수량</Text>

      <View style={styles.quantityControl}>
        <TouchableOpacity
          style={styles.quantityButtonContainer}
          onPress={decreaseQuantity}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text
          style={{
            ...styles.quantityButtonText,
            marginHorizontal: 16,
            fontSize: 20,
            backgroundColor: "#fff",
          }}
        >
          {quantity}
        </Text>
        <TouchableOpacity
          style={styles.quantityButtonContainer}
          onPress={increaseQuantity}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222222',
        paddingVertical: 20,
        paddingHorizontal: 5,
    },
    quantityContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 30,
    },
    quantityControl: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantityButtonContainer: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: "#FFE769",
        alignItems: "center",
    },
    quantityButtonText: {
        fontSize: 24,
        lineHeight: 22,
    },
});

export default QuantityOption;
