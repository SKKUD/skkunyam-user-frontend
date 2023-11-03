import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Header = ({title = "", icon, onIconClick}) => {
    const navigation = useNavigation();

    const onBackClick = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackClick}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            {
                icon == ''? 
                <TouchableOpacity onPress={onIconClick}>
                    <Feather name={icon} size={24} color="black" />
                </TouchableOpacity>
                :
                <View style={{width: 24}}></View>
            }
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Header;
