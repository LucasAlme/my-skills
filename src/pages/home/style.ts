import { StyleSheet } from 'react-native';
import { cores } from '../../utils/Constants';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: cores.preto,
        paddingHorizontal: 50,
        paddingVertical: 70,
    },
    title: {
        fontSize: 24,
        color: cores.branco,
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        backgroundColor: cores.pretoInput,
        color: cores.branco,
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
    },
    btnStyle: {
        width: '100%',
        marginTop: 20
    },
    skill: {
        color: cores.branco,
        fontSize: 22,
        fontWeight: 'bold',
    },
    btnskill: {
        backgroundColor: cores.pretoInput,
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    }

});
