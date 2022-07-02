import React from 'react'
import { Pressable, View, Text, Image } from 'react-native';
import styles from './OptionButton.styles';

export default function OptionButton({ text, image, onPress }) {

    return (
        <Pressable style={styles.pressable} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
            <Image style={styles.image} source={image} />
        </Pressable>
    );
};

