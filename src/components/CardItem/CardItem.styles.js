import COLORS from '../../themes/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 12,
        marginTop: 12,
    },
    options: {
        width: 24,
        height: 24,
    },
    text: {
        fontFamily: "ProximaNovaBold",
        fontSize: 18
    },
    image: {
        height: 23,
        width: 23
    }
});

export default styles;
