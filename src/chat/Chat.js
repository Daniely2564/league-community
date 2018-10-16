import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Chat = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>My Name</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Chat;