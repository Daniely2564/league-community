import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../src/hoc/Header';
import Profile from '../src/profile/Profile';
import { Icon } from 'native-base';
export default class ProfileScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => {
            return (
                <Icon name="person" style={{ fontSize: 24, color: tintColor }} />
            )
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header {...this.props} />
                <Profile />
            </View>
        )
    }
}

