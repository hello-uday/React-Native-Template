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
    { id: 1, imageKey: 'kemal' },
    { id: 2, imageKey: 'chest' },
    { id: 3, imageKey: 'kemal' },
    { id: 4, imageKey: 'kemal' },
    { id: 5, imageKey: 'kemal' },
    { id: 6, imageKey: 'kemal' },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Personalized Plan</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View all</Text>
        </TouchableOpacity>
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