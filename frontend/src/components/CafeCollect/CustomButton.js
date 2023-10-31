import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, width, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, { width: width }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFCD4D',
        paddingVertical: 18,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },
});

export default CustomButton;