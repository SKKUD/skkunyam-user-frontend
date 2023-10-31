import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const MenuOption = ({ option }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };
        
    return (
        <View>
            {   option === "temp" &&
                <>
                    <Text style={styles.titleText}>ICE/HOT</Text>

                    <View style={styles.optionContainer}>
                        <View style={styles.optionTextContainer}>
                        <TouchableOpacity
                            style={[
                            styles.optionButton,
                            selectedOption === "ICE" ? styles.selectedOption : null,
                            ]}
                            onPress={() => handleOptionSelect("ICE")}
                        />
                        <Text style={styles.optionText}>ICE</Text>
                        </View>
                        <Text style={styles.optionText}>+ 0원</Text>
                    </View>
        
                    <View style={styles.optionContainer}>
                        <View style={styles.optionTextContainer}>
                        <TouchableOpacity
                            style={[
                            styles.optionButton,
                            selectedOption === "HOT" ? styles.selectedOption : null,
                            ]}
                            onPress={() => handleOptionSelect("HOT")}
                        />
                        <Text style={styles.optionText}>HOT</Text>
                        </View>
                        <Text style={styles.optionText}>+ 0원</Text>
                    </View>
                </>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222222',
        paddingVertical: 20,
        // 나중에 빼야 함
        paddingHorizontal: 5,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        justifyContent: 'space-between',
    },
    optionButton: {
        width: 19,
        height: 19,
        borderRadius: 10,
        borderColor: '#FFCD4D',
        borderWidth: 3
    },
    selectedOption: {
        backgroundColor: '#FFCD4D', 
    },
    optionTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        lineHeight: 20,
        color: '#222222',
        marginLeft: 10
    },
});


export default MenuOption;
