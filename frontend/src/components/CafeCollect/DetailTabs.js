import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// dummy contents
const InfoContent = () => {
    return (
        <View style={styles.tempContentStyles}>
            <Text>정보 내용</Text>
        </View>
    );
}

const StampsContent = () => {
    return (
        <View style={styles.tempContentStyles}>
            <Text>스탬프 내용</Text>
        </View>
    );
}

const MapContent = () => {
    return (
        <View style={styles.tempContentStyles}>
            <Text>지도 내용</Text>
        </View>
    );
}

const DetailTabs = ({ cafe }) => {
    const [activeTab, setActiveTab] = useState('info');

    const tabStyle = (tab) => {
        return [
            styles.tab,
            activeTab === tab && styles.activeTab,
        ];
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'info':
                return <InfoContent />;
            case 'stamps':
                return <StampsContent />;
            case 'map':
                return <MapContent />;
            default:
                return null;
        }
    };

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => setActiveTab('info')}
                    style={tabStyle('info')}
                >
                    <Text style={activeTab == 'info'? styles.activeText : styles.baseText}>정보</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setActiveTab('stamps')}
                    style={tabStyle('stamps')}
                >
                    <Text style={activeTab == 'stamps'? styles.activeText : styles.baseText}>스탬프</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setActiveTab('map')}
                    style={tabStyle('map')}
                >
                    <Text style={activeTab == 'map'? styles.activeText : styles.baseText}>지도</Text>
                </TouchableOpacity>
            </View>
            <View>
                {renderContent()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        marginVertical: 15,
    },
    activeTab: {
        borderBottomColor: '#8B8B8B',
    },
    baseText: {
        color: '#8B8B8B',
        fontSize: 16,
    },
    activeText: {
        color: '#222222',
        fontSize: 16,
    },

    // dummy styles
    tempContentStyles: {
        height: 100,
        borderWidth: 1,
        borderColor: '#BEBEBE',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default DetailTabs;
