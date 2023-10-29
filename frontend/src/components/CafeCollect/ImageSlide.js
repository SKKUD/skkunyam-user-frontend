import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const ImageSlide = ({ source }) => (
    <Image source={source} style={styles.image} />
);

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: Dimensions.get('window').height * 0.3,
    },
});

export default ImageSlide;
