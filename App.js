import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import colors from './src/ui/colors';
import ChatScreen from './screens/ChatScreen';

// const { width } = Dimensions.get('window')
const CustomDrawerComponent = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 25, height: 60, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Daniel</Text>
      </View>
      <View style={{ height: 150, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <Image source={{ uri: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg' }}
          style={{ height: 120, width: 120, borderRadius: 60, }}
        />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  )
}
const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  Chat: ChatScreen,
},
  {
    contentComponent: CustomDrawerComponent,
    //drawerWidth: width
    contentOptions: {
      activeTintColor: colors.BLUE
    }
  })

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
