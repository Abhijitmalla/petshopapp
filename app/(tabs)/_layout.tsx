import { Tabs } from 'expo-router';

import { FontAwesome } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (

      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color="blue" />,
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: 'Favorite',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome name="heart" size={24} color="blue"/>,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'Inbox',
            headerShown: false,
            tabBarIcon: ({ color }) => <Fontisto name="hipchat" size={24} color="blue"/>,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome6 name="people-group" size={24} color="blue" />,
          }}
        />
      </Tabs>
   
  );
}
