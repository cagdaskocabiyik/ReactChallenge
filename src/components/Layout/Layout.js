import React from 'react'
import { View, Text } from 'react-native';
import Gradient from '../Gradient/Gradient';
import Header from '../Header/Header';
import styles from './Layout.styles';

export default function Layout({ children }) {

    return (
        <>
            <Header></Header>
            <Gradient></Gradient>
            <View style={styles.view}>
                {children}
            </View>
        </>
    );
};

