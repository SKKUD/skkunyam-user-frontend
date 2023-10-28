import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PointBox = ({ point }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.guideText}>보유 포인트</Text>
            <Text style={{...styles.guideText, fontSize: 12}}>1,000P부터 사용할 수 있어요</Text>
            <View style={styles.myPoint}>
                <View style={{width: '70%', height: 5, backgroundColor: '#FFCD4D'}}></View>
                <Text>{point} P</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFFBE5',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8
    },
    guideText: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22,
        color: '#222222',
        paddingBottom: 10,
    },
    myPoint: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }
});

export default PointBox;