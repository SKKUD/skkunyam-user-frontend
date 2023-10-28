import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../../components/CafeCollect/Header';
import { useRoute } from '@react-navigation/native';
import ImageContainers from '../../components/CafeCollect/ImageContainers';
import PointBox from '../../components/CafeCollect/PointBox';
import DetailTabs from '../../components/CafeCollect/DetailTabs';
import CustomButton from '../../components/CafeCollect/CustomButton';

const CafeDetail = ({ navigation }) => {
    const route = useRoute();
    const { store } = route.params;

    const height = Dimensions.get('window').height;

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header icon="star-outline" />
            <View style={{height: height*0.3}}>
                <ImageContainers />
            </View>
            <View style={styles.info}>
                <Text style={styles.storeName}>{store.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.infoText}>위치 정보(주소, 건물)</Text>
                    <TouchableOpacity>
                        <Text style={{...styles.infoText, fontWeight: 'normal', color: '#222222'}}>복사</Text>
                    </TouchableOpacity>
                    {/* <Text style={styles.infoText}>Distance: {store.distance}</Text> */}
                </View>
            </View>
            <PointBox point={'1,200'}/>
            <DetailTabs />
            <View style={styles.buttonContainer}>
                <CustomButton title="먹고 갈게요" width={'48%'}/>
                <CustomButton title="포장 할게요" width={'48%'} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    info: {
        alignItems: 'center',
        paddingVertical: 20
    },
    storeName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 12,
        lineHeight: 22,
        fontWeight: 'bold',
        color: '#848383',
        padding: 4
    },
    image: {
        width: '100%',
        height: 300,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingBottom: 20
    }
});

export default CafeDetail;
