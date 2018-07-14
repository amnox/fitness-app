import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, white } from '../utils/colors'

export default function TextButton ({ children, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.resetBtn}>
            <Text style={{color:white}}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    resetBtn:{
        backgroundColor: 'purple',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
})