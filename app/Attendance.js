import React from 'react'
import { SafeAreaView, View} from 'react-native-safe-area-context'
import { COLORS, icons, images, SIZES } from '../constants';
import { Calendar } from 'react-native-calendars';

const Attendance = () => {
  return (

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
    )
}

export default Attendance;




{/* <Attendance /> */}
// import Attendance from './Attendance';