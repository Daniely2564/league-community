import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header, Left, Right, Icon } from 'native-base';

export default class Top extends Component {

    render() {
        return (
            <Header style={{ flex: 1, backgroundColor: '#343434', paddingTop: 40, paddingBottom: 21, justifyContent: 'center' }}>
                <Left style={{ flex: 1 }}>
                    <Icon name="menu" style={{ color: '#fff' }} onPress={() => this.props.navigation.openDrawer()} />
                </Left>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, left: -50, color: '#fff', fontWeight: 'bold', }}>League Chat</Text>
                </View>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    headTextCon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})