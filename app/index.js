import { useState } from 'react';
import { View, ScrollView,SafeAreaView } from 'react-native';
import {Stack, UseRouter } from 'expo-router';

import { COLORS, icons,images,SIZES } from '../constants';
import {
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
} from '../components';

const Home = () => {
    const router = useRouter();
    return (
            <SafeAreaView style={{ flex:1, backgroundColor: COLORS.gray2}}>
                <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.gray2},
                }}
                />
            </SafeAreaView>
    )
};
export default Home;