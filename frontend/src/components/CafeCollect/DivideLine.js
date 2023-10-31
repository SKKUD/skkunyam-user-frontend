import React from "react";
import { View, StyleSheet } from "react-native";

const DivideLine = ({ height }) => {
    return (
        <View style={[styles.divider, { height: height }]} />
    );
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#E9E9E9',
        width: '100%'
    }
});

export default DivideLine;
