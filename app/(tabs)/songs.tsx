import React from 'react';

import { TextInput, StyleSheet, ScrollView, Text, View, Image, Keyboard, Button, TouchableOpacity, Modal } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '@/app/(tabs)';

export default function Songs() {
    return (
        <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.text}>My Songs</Text>
            <Ionicons name="musical-notes-outline" size={30} color="white" />
            {/* <HomeScreen /> */}
        </TouchableOpacity>

        
    )
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
        marginTop: 100,
        marginLeft: 100
      },
      text: {
        color: "white"
      }
    });
    