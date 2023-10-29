import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NearStore = ({ store }) => {
    const navigation = useNavigation();

    const handleCafeClick = () => {
        navigation.navigate('CafeDetail', { store: store })
    }

    return (
        <View style={styles.container}>
            <View style={{width: 56, aspectRatio: 1, backgroundColor: '#D9D9D9', borderRadius: 8, marginRight: 20}}></View>
            <TouchableOpacity onPress={() => handleCafeClick()}>
                <View style={styles.row}>
                    <Text style={{fontSize: 16, lineHeight: 22}}>{store.name}</Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="clock-time-four-outline" size={14} color="gray" />
                    <Text style={styles.infoText}>{store.time}</Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="map-marker-radius" size={14} color="gray" />
                    <Text style={styles.infoText}>{store.distance}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 8,
        flexDirection: 'row',
        width: 270,
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 14,
        lineHeight: 22,
        color: '#9C9C9C',
        marginLeft: 4,
    }
});

export default NearStore;