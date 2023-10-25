import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons'; 

const Header = ({title = "", icon, onIconClick}) => {
    const onBackClick = () => {
        console.log("Back clicked");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackClick}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text>{title}</Text>
            <TouchableOpacity onPress={onIconClick}>
                <Ionicons name={icon} size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 24,
    },
});

export default Header;
