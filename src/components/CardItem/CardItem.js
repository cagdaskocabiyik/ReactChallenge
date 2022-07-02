import React from 'react'
import { Image, TouchableOpacity, View, Text, Pressable, StyleSheet } from 'react-native';
import styles from './CardItem.styles';


export default function CardItem({ title, image, onPress }) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{title}</Text>
            <Pressable onPress={onPress}>
                <Image style={styles.image} source={image} />
            </Pressable>
        </View>
    );
};
