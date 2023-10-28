import React from 'react';
import Swiper from 'react-native-swiper';
import ImageSlide from './ImageSlide';
import { images } from '../../dummy';
import { Dimensions } from 'react-native';

const ImageContainers = () => {

    return (
        <Swiper
            showsButtons={false}
            paginationStyle={{ 
                bottom: 10,
             }}
            dotStyle={{ backgroundColor: '#fff' }}
            activeDotStyle={{ backgroundColor: '#8B8B8B' }}
        >
            {images.map((image, index) => (
                <ImageSlide key={image.id} source={image.source} index={index} />
            ))}
        </Swiper>
    )
}

export default ImageContainers;