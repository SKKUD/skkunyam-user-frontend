import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/CafeCollect/Header";
import { images } from "../../dummy";
import DivideLine from "../../components/CafeCollect/DivideLine";
import MenuOption from "../../components/CafeCollect/MenuOption";
import QuantityOption from "../../components/CafeCollect/QuantityOption";

const CafeMenuSelect = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Header />
            <Image source={images[1].source} style={styles.menuImage} />

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{item}</Text>
                <Text style={styles.titleText}>2,900 원</Text>
            </View>

            <DivideLine height={12} />

            <MenuOption option="temp" />

            <DivideLine height={12} />

            <QuantityOption />
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    menuImage: {
        width: '100%',
        height: Dimensions.get('window').height * 0.25,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222222',
        paddingVertical: 20,
        paddingHorizontal: 5,
    },
    
});

export default CafeMenuSelect;
