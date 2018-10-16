import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import Header from '../src/hoc/Header';

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => {
            return (
                <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
            )
        }
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header {...this.props} />
                <View style={styles.body}>
                    <Text>Body</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})