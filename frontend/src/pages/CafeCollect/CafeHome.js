import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/CafeCollect/Header';
import SectionGuide from '../../components/CafeCollect/SectionGuide';
import NearStores from '../../components/CafeCollect/NearStores';
import BuildingCategory from '../../components/CafeCollect/BuildingCategory';
import BuildingStores from '../../components/CafeCollect/BuildingStores';
import { stores, buildingCategories } from '../../dummy';

const CafeHomeScreen = () => {
    const buildingKeys = buildingCategories.map(category => Object.keys(category)[0]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedStores, setSelectedStores] = useState(buildingCategories[0][buildingKeys[0]]);

    const handleCategoryClick = (categoryIndex) => {
        setSelectedCategory(categoryIndex);
        const selectedCategoryData = buildingCategories[categoryIndex];
        const selectedCategoryName = Object.keys(selectedCategoryData)[0];
        setSelectedStores(selectedCategoryData[selectedCategoryName]);
    };
    

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Header icon="md-map-outline"/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.boldText}>카페 모아보기</Text>
                <Text>토글</Text>
            </View>
            <SectionGuide mainText={"스꾸디 님 현재 위치\n근처에 있는 매장이에요!"} moreText="더보기"/>
            <NearStores stores={stores}/>
            <SectionGuide mainText={"장소별로 모아보기"} moreText="전체보기"/>
            <BuildingCategory
                buildings={buildingKeys}
                selectedCategory={selectedCategory}
                onCategoryClick={handleCategoryClick}
            />
            <BuildingStores stores={selectedStores}/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    boldText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    guide: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default CafeHomeScreen;