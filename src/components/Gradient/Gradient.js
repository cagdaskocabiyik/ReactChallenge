import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../../themes/colors';
import styles from './Gradient.styles';

export default function Gradient() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={[COLORS.organish, COLORS.maize]} start={{ x: 0.5, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={{ height: 150 }} />
            <LinearGradient
                colors={['transparent', '#f7f7f7']}
                start={{ x: 0.5, y: 0.4 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0.1, 1]}
                style={styles.middle}
            />
            <View style={styles.bgGray} />
        </View >
    );
};

