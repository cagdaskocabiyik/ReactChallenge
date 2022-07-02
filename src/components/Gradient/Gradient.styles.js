import COLORS from '../../themes/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
    },
    middle: {
        height: 80,
        marginTop: -80,
    },
    bgGray: {
        flex: 1,
        backgroundColor: COLORS.gray,
    },
});

export default styles;
