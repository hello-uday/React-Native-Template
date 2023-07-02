import { View, Text } from 'react-native'
import { COLORS, icons,images,SIZES } from '../../../../constants';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

const PopularJobCard = ({ job }) => {
  return (
    <View style={styles.boxImage}>
      <Image 
        source={images[job.imageKey]}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxImage: {
    flex: 1,
    height: 400,
    backgroundColor: COLORS.gray3,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    height: 400,
    width: 400,
    borderRadius: 20,
  },
});

export default PopularJobCard