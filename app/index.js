import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import Calendar from 'react-native-calendars/src/calendar';



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

      
          
          <Calendar style={{borderRadius:25, elevation: 4, margin: 10, backgroundColor: COLORS.black}}
             markedDates={{
              '2023-07-03': {
                selected: true,
                selectedColor: 'blue',
                customStyles: {
                  container: {
                    backgroundColor: 'blue',
                    borderRadius: 10,
                    elevation: 4,
                    margin: 5,
                  },
                  text: {
                    color: COLORS.white,
                    fontWeight: 'bold',
                  },
                },
              },
            }}
            theme={{
              selectedDayBackgroundColor: 'blue',
              dayTextColor: 'black',
              backgroundColor: 'black',

            }}
          />

      <Popularjobs />
      
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
});

export default Home;
