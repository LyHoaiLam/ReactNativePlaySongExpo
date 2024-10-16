import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

    <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: () => (
              <FontAwesome
              name='music'
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="songs"
        options={{
          title: 'Songs',
          tabBarIcon: () => (
            <FontAwesome
            name='music'
            size={24}
            color="white"
          />
          ),
        }}
      />


      {/* <Tabs.Screen
        name="libary"
        options={{
          title: 'Libary',
          tabBarIcon: () => (
            <FontAwesome
            name='plus'
            size={24}
            color="white"
          />
          ),
        }}
      /> */}


      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}>

            </TabBarIcon>
          ),
        }}
      />

    </Tabs>
  );
}
