import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HorizontalMenu() {
  return (
    <View style={styles.container}>
      {/* Home Icon */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="home-outline" size={30} color="black" />
      </TouchableOpacity>

      {/* Music Icon */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="musical-notes-outline" size={30} color="black" />
      </TouchableOpacity>

      {/* Search Icon */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="search-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-around', // Space the icons evenly
    paddingVertical: 10,
    backgroundColor: '#f8f8f8', // Background color of the menu
  },
  iconButton: {
    padding: 10,
  },
});
