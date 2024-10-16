import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, ScrollView, Text, View, Image, Keyboard, Button, TouchableOpacity, Modal } from 'react-native';
import { Audio } from 'expo-av'; // Nếu bạn sử dụng Expo Audio
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome} from '@expo/vector-icons';
import playList from '../../assets/mp3/mp3'


export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const playSound = async (mp3: any, index: number) => {
  try {
    if (index >= playList.length) {
      console.warn('Không thể phát nhạc: chỉ số vượt quá danh sách.');
      return;
    }

    if (playingIndex === index) {
      if (sound) {  // Chỉ gọi stopSound khi âm thanh tồn tại
        stopSound();
        setPlayingIndex(null);
      }
    } else {
      await stopSound();
      await startSound(mp3);
      setPlayingIndex(index);
    }
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

  const stopSound = async () => {//Function xử lý Dừng phát nhạc
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
      }
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  };
  

  const startSound = async (mp3File: any) => {// Function xử lý Bật phát nhạc
    try {
      const { sound } = await Audio.Sound.createAsync(mp3File);
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error starting sound:', error);
    }
  };

  
  const handleSubmit = () => {
    if (searchText.trim() !== '') {
      setResult((prevResults) => [...prevResults, searchText]);
      setSearchText('');
    }
  };


  const filteredResults = playList.filter((item) =>
    item.nameSong.toLowerCase().includes(searchText.toLowerCase())
  );


  const handlerFocus = () => {
    setIsFocused(true);
  };


  const handlerblur = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };



  const renderList = playList.map((result, index) => (

    <View>
    <View key={`item-${index}`} style={styles.resultItem}>
      <TouchableOpacity
        style={styles.resultItem}
        onPress={() => playSound(result.mp3, index)}
      >
          <Image source={{ uri: result.img }} style={styles.avatar} />
          <Text style={styles.resultTextList}>{result.nameSong}</Text>
          <Text style={styles.singerNameList}>({result.singer})</Text>

          <View style={styles.iconContainer}>
            <FontAwesome
              name={playingIndex === index ? 'pause' : 'play'}
              size={24}
              color="black"
              style={styles.playPauseIcon}
            />
            <FontAwesome
              name='ellipsis-v'
              size={24}
              color="white"
              style={styles.ellipsisIcon}
            />
          </View>

      </TouchableOpacity>

      <Modal visible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.menuItem} onPress={toggleModal}>Menu Item 1</Text>
          <Text style={styles.menuItem} onPress={toggleModal}>Menu Item 2</Text>
          <Text style={styles.menuItem} onPress={toggleModal}>Menu Item 3</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
    </View>
          <View style={styles.resultItem3}></View>
    </View>
  ));
  

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm nhạc theo tên"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSubmit}
          placeholderTextColor="#888"
          onPress={() => setIsFocused(true)}
          onFocus={handlerFocus}
        />
      </View>

  

      <ThemedView style={styles.stepContainer}>
        <View>
        <ScrollView>
          {renderList}
        </ScrollView>
        </View>

      </ThemedView>


      {isFocused && searchText.length > 0 && (
        <View style={styles.popup}>

          <TouchableOpacity onPress={() => setIsFocused(false)} style={styles.closeButton}>
            <Text style={styles.closeText}>Đóng</Text>
          </TouchableOpacity>
          <Text style={styles.resultSearch}>Kết quả tìm kiếm</Text>
          <ScrollView style={styles.resultContainer2}>
            {filteredResults.length > 0 ? (
              filteredResults.map((result, index) => (

                <TouchableOpacity key={index} style={styles.resultItem} >
                  <Image source={{ uri: result.img }} style={styles.avatar} />
                  <Text style={styles.resultText} numberOfLines={1}>{result.nameSong}</Text>
                  <Text style={styles.singerNameList} numberOfLines={1}>({result.singer})</Text>
                
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.noResults}>Không tìm thấy kết quả</Text>
            )}
        </ScrollView>
      </View>
)}
    </View>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginTop: 0,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -20,

  },
  playPauseIcon: {
  position: 'absolute',
  alignSelf: 'center',
  marginLeft: 75,
  color: 'white',
  fontSize: 20
},
  container: {
    flex: 1,
  },
  popup: {
    position: 'absolute',
    top: 135,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
  headerContainer: {
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 70,
  },
  singerName: {
    marginLeft: 20
  },
  singerNameList: {
    marginLeft: 0,
    color: 'white',
    maxWidth: 60,
    minWidth: 60,
    fontSize: 8,
    overflow: 'hidden',
  },
  searchInput: {
    width: '90%',
    height: 40,
    backgroundColor: '#f0f2f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  resultContainer2: {
    marginTop: 50,
    padding: 10,
  },
  resultText: {
    fontSize: 18,
    color: 'black',
  },
  resultTextList: {
    fontSize: 18,
    color: 'white',
    maxWidth: 200,
    minWidth: 200
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    maxWidth: 370,
    marginTop: 5,
    paddingLeft: 10
  },
  resultItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 300,
  },
  resultItem3: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: 420,
  },
  ellipsisIcon: {
    marginLeft: 35,
    fontSize: 15
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  menuItem: {
    padding: 10,
    fontSize: 16,
  },
  // closeButton: {
  //   marginTop: 20,
  //   color: 'blue',
  // },
  resultSearch: {
    marginLeft: 10,
    marginTop: 10
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: 'black',
    fontWeight: 'bold'
  }
});
