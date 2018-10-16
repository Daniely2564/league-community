import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../ui/colors';
import H1 from '../ui/h1';

const Profile = () => {
    return (
        <View style={styles.mainContainer}>
            <H1 color="black">Hardgun</H1>
            <View style={{ flowDirection: 'row', flex: 1 }}>
                <View style={[styles.col6, { backgroundColor: colors.BLUE }]}>
                    <Image style={styles.tierImage} source={require('../assets/img/base-icons/challenger.png')} />
                </View>
                <View styles={[styles.col6, { backgroundColor: colors.ORANGE }]}>
                    <Text>I DONT GET</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        textAlign: 'left',
        justifyContent: 'flex-start',
        padding: 20,
    },
    col6: {
        flex: 1,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    tierImage: {
        width: 230,
        height: 230,
    }
})

export default Profile;