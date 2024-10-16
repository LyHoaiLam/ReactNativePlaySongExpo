import React from 'react';

import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

import { FontAwesome, Ionicons } from '@expo/vector-icons';


const array = [
  {
    name: "GOLD",
    img: ""
  },
  {
    name: "Keys To The City",
    img: ""
  }
]

export default function Discover() {
    return (

      <View>

      <View style={styles.container}>

        
            <View style={styles.headerDisovery}>

            <Text style={styles.text}>Trang Chủ</Text>
            <FontAwesome
               name='user-circle'
               size={24}
               color="white"
               style={styles.ellipsisIcon}
            ></FontAwesome>
            </View>

        
      </View>
            <Text style={styles.textChose}>Lựa chọn hàng đầu của bạn</Text>
      </View>

        
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: 'red',
        marginTop: 50
      },
      iconButton: {
        padding: 10,
      },
      text: {
        color: "white",
        marginRight: 10,
        fontSize: 25
      },
      ellipsisIcon: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        justifyContent: "space-between",
        marginLeft: 250,
        fontSize: 35
      },
      headerDisovery: {
        flexDirection: "row",
        alignItems: "center"
      },
      textChose: {
        color: "white",
        fontSize: 22,
        marginTop: 50
      }
    });
    