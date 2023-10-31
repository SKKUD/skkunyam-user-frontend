import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Header from '../../components/CafeCollect/Header';
import { useRoute } from '@react-navigation/native';
import { images } from '../../dummy';

const CafeMenuList = () => {
    const route = useRoute();
    const { store } = route.params;

    const categories = ['Best 메뉴', 'COFFEE', 'TEA', 'DESSERT', 'BAKERY'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const menuItems = {
        'Best 메뉴': ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
        'COFFEE': ['Coffee Item 1', 'Coffee Item 2', 'Coffee Item 3', 'Coffee Item 4', 'Coffee Item 5', 'Coffee Item 6'],
        'TEA': ['Tea Item 1', 'Tea Item 2', 'Tea Item 3', 'Tea Item 4', 'Tea Item 5'],
        'DESSERT': ['Dessert Item 1', 'Dessert Item 2', 'Dessert Item 3'],
        'BAKERY': ['Bakery Item 1', 'Bakery Item 2', 'Bakery Item 3', 'Bakery Item 4'],
    };

    const scrollViewRef = useRef(null);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const categoryIndex = categories.indexOf(category);
        scrollViewRef.current.scrollTo({ x: 0, y: categoryIndex * 300, animated: true }); 
    };

    const handleScrollEnd = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const categoryIndex = Math.floor(offsetY / 300);
        const newCategory = categories[categoryIndex];
        if (newCategory !== selectedCategory) {
            setSelectedCategory(newCategory);
        }
    };

    return (
        <View style={styles.container}>
            <Header title={store.name} icon="search" />

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryTabs}>
                {categories.map(category => (
                    <TouchableOpacity
                        key={category}
                        style={styles.tab}
                        onPress={() => handleCategoryChange(category)}
                    >
                        <Text style={category === selectedCategory ? styles.selectedText : styles.text}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.menuList}
                onMomentumScrollEnd={handleScrollEnd}
                ref={scrollViewRef}
                >
                {categories.map((category, index) => (
                    <View key={category}>
                    <Text style={styles.subheading}>{category}</Text>
                    {menuItems[category].map((item, itemIndex) => (
                        <TouchableOpacity key={itemIndex} style={styles.menuItem}>
                            <View>
                                <Text>{item}</Text>
                                <Text>3,500 원</Text>
                            </View>
                            <Image source={images[0].source} style={styles.menuImage}/> 
                        </TouchableOpacity>
                    ))}
                    {index === categories.length - 1 && (
                        <View style={styles.bottomPadding} />
                    )}
                    </View>
                ))}
                </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    categoryTabs: {
        flexDirection: 'row',
        paddingTop: 10,
        position: 'absolute',
        top: 80,
        left: 20,
    },
    tab: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        color: '#8b8b8b',
    },
    selectedText: {
        fontSize: 16,
        color: '#222222',
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 16,
        backgroundColor: '#E9E9E9',
        padding: 12,
        fontWeight: 'bold',
    },
    menuItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuList: {
        marginTop: 50,
    },
    menuImage: {
        width: 66,
        height: 66,
        borderRadius: 8,
    },
    bottomPadding: {
        paddingBottom: Dimensions.get('window').height * 0.5,
    },
});

export default CafeMenuList;
