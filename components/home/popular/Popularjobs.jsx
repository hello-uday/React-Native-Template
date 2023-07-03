import React from 'react'
import { useRouter } from 'expo-router'
import { View, Text, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import {COLORS,SIZES, images} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

import styles from './popularjobs.style'

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  const jobs = [
    { id: 1, imageKey: 'back' },
    { id: 2, imageKey: 'shoulder' },
    { id: 3, imageKey: 'chest' },
    { id: 4, imageKey: 'leg' },
    { id: 5, imageKey: 'bicep' },
    { id: 6, imageKey: 'tricep' },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Personalized Plan</Text>
        
      </View>
    <View style={styles.cardsContainer}>
    {
      isLoading ? (
        <ActivityIndicator size="large" colors={COLORS.primary} />
      ) : error ? (
        <Text>
          Somthing went Wrong !!
        </Text>
      ) : (
        <FlatList 
          data={jobs}
          renderItem={({item})=>(
            <PopularJobCard
            job={item}
            />
      )}
      keyExtractor = {item => item.id.toString()}
      contentContainerStyle = {{ columnGap: SIZES.medium}}
      horizontal
      />
      )}
    </View>
    
    </View>
  )
}

export default Popularjobs