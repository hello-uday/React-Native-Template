import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '.';
// import Personal from './Personal'

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Personal" component={Personal} />
    </Tab.Navigator>
  );
};

// const Personal = () => {
//   return (
//     <Tab.Screen name="Personal" component={Personal} />
//   );
// };

export default App;