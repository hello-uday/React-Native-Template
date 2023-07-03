import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';


const Home = () => {
  const router = useRouter();
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
          <Text style={styles.boxTextAttendance}>Box 1</Text>
        </View>
      </View>
      <Popularjobs />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.boxImage}>
          <Image
            source={require('../assets/images/chest.jpg')}
            style={{ height: 400, width: '100%', borderRadius: 20 }}
          />
        </View>
      </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};

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
});

export default Home;
