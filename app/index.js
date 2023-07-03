// import { useState } from 'react';
// import { View, ScrollView, SafeAreaView, Text, Image } from 'react-native';
// import { Stack, useRouter } from 'expo-router';
// import { StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native';
// import { COLORS, icons, images, SIZES } from '../constants';
// import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

// import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
// import Icon from 'react-native-vector-icons/Ionicons';  



// class Home extends React.Component {
//   render(){
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.dark}}>
//       <ScrollView>
//       <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.dark },
//           headerShadowVisible: false,
//           headerLeft: () => (
//             <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
//           ),
//           headerRight: () => (
//               <View style={{ flex: 1, padding: SIZES.medium }}>
//                 <Welcome />
//               </View>
//           ),
//           headerTitle: '',
//         }}
//       />

//       <View style={{ flexDirection: 'row' }}>
//         <View style={styles.box}>
//           <Text style={styles.boxText}>Box 1</Text>
//         </View>
//         <View style={styles.box}>
//           <Text style={styles.boxText}>Box 2</Text>
//         </View>
//         <View style={styles.box}>
//           <Text style={styles.boxText}>Box 3</Text>
//         </View>
//       </View>
      
//       <View style={{ flexDirection: 'row' }}>
//         <View style={styles.boxAttendance}>
//           <Text> Graph Space </Text>
//         </View>
//       </View>
        

//       <Popularjobs />
      
//       </ScrollView>

      

//     </SafeAreaView>
//   );
// }
// };

// class ProfileScreen extends React.Component {  
//   render() {  
//     return (  
//         <View style={styles.container}>  
//           <Text>Profile Screen</Text>  
//         </View>  
//     );  
//   }  
// } 

// class ImageScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Image Screen</Text>  
//             </View>  
//         );  
//     }  
// }  

// class CartScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Cart Screen</Text>  
//             </View>  
//         );  
//     }  
// }  

// // const styles = StyleSheet.create({  

// // });  

// const styles = StyleSheet.create({
//   box: {
//     flex: 1,
//     height: 130,
//     backgroundColor: COLORS.gray3,
//     margin: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//   },
//   boxAttendance: {
//     flex: 1,
//     height: 300,
//     backgroundColor: COLORS.gray3,
//     margin: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     // overflow: 'hidden',
//   },

//   boxImage: {
//     flex: 1,
//     height: 400,
//     backgroundColor: COLORS.gray3,
//     margin: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//   },
//   boxText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   boxTextAttendance: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   container: {  
//     flex: 1,  
//     justifyContent: 'center',  
//     alignItems: 'center'  
// }, 
// });

// const TabNavigator = createMaterialBottomTabNavigator(  
//   {  
//       Home: { screen: Home,  
//           navigationOptions:{  
//               tabBarLabel:'Home',  
//               tabBarIcon: ({ tintColor }) => (  
//                   <View>  
//                       <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
//                   </View>),  
//           }  
//       },  
//       Profile: { screen: ProfileScreen,  
//           navigationOptions:{  
//               tabBarLabel:'Profile',  
//               tabBarIcon: ({ tintColor }) => (  
//                   <View>  
//                       <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
//                   </View>),  
//               activeColor: '#f60c0d',  
//               inactiveColor: '#f65a22',  
//               barStyle: { backgroundColor: '#f69b31' },  
//           }  
//       },  
//       Image: { screen: ImageScreen,  
//           navigationOptions:{  
//               tabBarLabel:'History',  
//               tabBarIcon: ({ tintColor }) => (  
//                   <View>  
//                       <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
//                   </View>),  
//               activeColor: '#615af6',  
//               inactiveColor: '#46f6d7',  
//               barStyle: { backgroundColor: '#67baf6' },  
//           }  
//       },  
//       Cart: {  
//           screen: CartScreen,  
//           navigationOptions:{  
//               tabBarLabel:'Cart',  
//               tabBarIcon: ({ tintColor }) => (  
//                   <View>  
//                       <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
//                   </View>),  
//           }  
//       },  
//   },  
//   {  
//     initialRouteName: "Home",  
//     activeColor: '#f0edf6',  
//     inactiveColor: '#226557',  
//     barStyle: { backgroundColor: '#3BAD87' },  
//   },  
// );  

// export default createAppContainer(TabNavigator);  

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

class CartScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Cart Screen</Text>
      </View>
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
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ color: tintColor }} size={25} name={'ios-cart'} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
  }
);

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 130,
    backgroundColor: COLORS.gray3,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  boxAttendance: {
    flex: 1,
    height: 300,
    backgroundColor: COLORS.gray3,
    margin: 5,
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

