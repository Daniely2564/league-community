import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './colors';

const H1 = (props) => (
    <Text style={[styles.h1, { color: colors[props.color.toUpperCase()] }]}>{props.children}</Text>
)
const styles = StyleSheet.create({
    h1: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default H1;