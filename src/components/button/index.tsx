import React, { ReactNode } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { cores } from '../../utils/Constants'

import styles from './style';

type Props = {
    value: string;
    customStyle?: object;
    color?: string;
    onPress: () => void;
    txtStyle?: object;
    opacity?: number;
}

export default function Button({ value, customStyle, color, onPress, txtStyle, opacity }: Props) {
    return (
        <TouchableOpacity activeOpacity={opacity} onPress={onPress} style={[styles.btn, customStyle, { backgroundColor: color ?? cores.roxo }]}>
            <Text style={[styles.txt, txtStyle]}>{value}</Text>
        </TouchableOpacity>
    )
}
