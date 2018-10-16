import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Header from '../src/hoc/Header';

class ChatScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => {
            return (
                <Icon name="chatbubbles" style={{ fontSize: 24, color: tintColor }} />
            )
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header {...this.props} />
                <Text>ChatScreen</Text>
            </View>
        )
    }
}

export default ChatScreen;