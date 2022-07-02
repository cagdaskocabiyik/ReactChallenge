import React from 'react';
import { ActivityIndicator } from 'react-native';
import COLORS from '../themes/colors';

const Spinner = ({ size }) => {
    return (
        <ActivityIndicator size={size || 'large'} color={COLORS.white} style={{ flex: 1 }} />
    );
};

export default Spinner;