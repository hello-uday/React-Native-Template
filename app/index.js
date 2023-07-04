import React from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Stack, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import UserAttendance from './Attendance';

class Home extends React.Component {
  render() {
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.dark}}>
      <ScrollView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.dark },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerRight: () => (
              <View style={{ flex: 1, padding: SIZES.medium }}>
                <Welcome />
              </View>
          ),
          headerTitle: '',
        }}
      />

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
      </View>
      
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.boxAttendance}>
          <Text> Graph Space </Text>
        </View>
      </View>
        

      <Popularjobs />
      
      </ScrollView>

    </SafeAreaView>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

class ImageScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Image Screen</Text>
      </View>
    );
  }
}

class Attendance extends React.Component {
  render() {
    return (
      <UserAttendance />
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ color: tintColor }} size={25} name={'ios-home'} />
        ),
      },
    },
    
    Image: {
      screen: ImageScreen,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ color: tintColor }} size={25} name={'ios-images'} />
        ),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: { backgroundColor: '#67baf6' },
      },
    },
    Attendance: {
      screen: Attendance,
      navigationOptions: {
        tabBarLabel: 'Attendance',
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ color: tintColor }} size={25} name={'ios-calendar'} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ color: tintColor }} size={25} name={'ios-person'} />
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: COLORS.gray3,
    barStyle: { backgroundColor: COLORS.black },
    borderRadius:20
  }
);

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 130,
    backgroundColor: "#2a2f37",
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  boxAttendance: {
    flex: 1,
    height: 300,
    backgroundColor: "#2a2f37",
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // overflow: 'hidden',
  },

  boxImage: {
    flex: 1,
    height: 400,
    backgroundColor: COLORS.gray3,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxTextAttendance: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center'  
}, 
});

export default createAppContainer(TabNavigator);

