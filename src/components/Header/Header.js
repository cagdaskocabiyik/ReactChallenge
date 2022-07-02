import React from 'react'
import { Image, Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { images } from '../../themes/images';
import styles from './Header.styles';



export default function Header() {
    const barHeight = Platform.select({
        ios: 20,
        android: StatusBar.currentHeight,
        default: 0,
    });

    return (
        <SafeAreaView style={{ marginTop: barHeight }}>
            <View style={styles.header}>
                <Image style={styles.image} source={images.logo} />
            </View>
        </SafeAreaView>
    );
};

