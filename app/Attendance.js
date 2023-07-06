import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { COLORS } from '../constants';
import FetchQuote from './FetchQuote'

const Attendance = () => {

  return (
    <View style={{ flex: 1,backgroundColor: COLORS.black }}>
      <View style={{ flex: 1 }}>
        <Calendar style={{borderRadius:25, elevation: 4, margin: 10, backgroundColor: COLORS.gray, }}
          
        />
      </View>

      {/* Fitness Quotes */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 130 }}>
        <TouchableOpacity>
              <FetchQuote/>
        </TouchableOpacity>
      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30,paddingVertical: 20 }}>
        <TouchableOpacity
          style={{ backgroundColor: COLORS.gray3, paddingVertical: 20,paddingHorizontal: 20, borderRadius: 30 }}
          onPress={() => {

            // code that Handle left button press

          }}
        >
          <Text style={{ color: COLORS.lightWhite, fontWeight: 'bold' }}>     CheckIN     </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: COLORS.gray3, paddingVertical: 20, paddingHorizontal: 20, borderRadius: 30 }}
          onPress={() => {

            //  code that Handle right button press

          }}
        >
          <Text style={{ color: COLORS.lightWhite, fontWeight: 'bold' }}>    CheckOUT    </Text>
        </TouchableOpacity>
      </View>
      
    </View>
    
  );
};

export default Attendance;
