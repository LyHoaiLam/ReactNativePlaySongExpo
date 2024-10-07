import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, ScrollView, Text, View, Image, Keyboard, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av'; // Nếu bạn sử dụng Expo Audio
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome } from '@expo/vector-icons';

interface Result {
  nameSong: string;
  singer: string;
  img: string;
  mp3: string;
}


const playList: Result[] = [
  {
      mp3:require('./../../assets/mp3/yeunguoicouocmo.mp3') as  any,
      nameSong: "Yêu Người Có Ước Mơ",
      singer: "buitruonglinh",
      img: "https://i.ytimg.com/vi/6r7jzy1LABY/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/suytnuathi.mp3') as  any,
      nameSong: "Suýt Nữa Thì",
      singer: "Andiez",
      img: "https://i.ytimg.com/vi/cUmpJ2zwfVU/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/maimaikhongphaianh.mp3') as  any,
      nameSong: "Mãi Mãi Không Phải Anh",
      singer: "Thanh Bình",
      img: "https://i.ytimg.com/vi/677bAENZAEI/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/ghequa.mp3') as  any,
      nameSong: "Ghé Qua",
      singer: "taynguyensound",
      img: "https://i.ytimg.com/vi/W2FRMzCuPzY/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/duongtoichoemve.mp3') as  any,
      nameSong: "Đường Tôi Chở Em Về",
      singer: "buitruonglinh",
      img: "https://i.ytimg.com/vi/OuNo8Tkb3lI/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/chodoicodangso.mp3') as  any,
      nameSong: "Chờ đợi có đáng sợ",
      singer: "Andiez",
      img: "https://i.ytimg.com/vi/WE05tPmCj8k/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/aidoiminhduocmai.mp3') as  any,
      nameSong: "Ai Đợi  mình Được Mãi lofi",
      singer: "Thanh Hưng",
      img: "https://i.ytimg.com/vi/LM-q6gkn63s/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/3107full.mp3') as  any,
      nameSong: "3107 Full version ",
      singer: "W/n x DuongG, Nâu , Titie, Erik",
      img: "https://i.ytimg.com/vi/GatNL0mmQGc/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/CuChillThoi.mp3') as  any,
      nameSong: "Cứ Chill Thôi ",
      singer: "Chillies ft Suni Hạ Linh & Rhymastic",
      img: "https://lyrics-hot.com/wp-content/uploads/2021/02/loi-bai-hat-cu-chill-thoi-640.jpg"
  },
  {
      mp3:require('./../../assets/mp3/XeDap.mp3') as  any,
      nameSong:" Xe Đạp ",
      singer: "CM1X",
      img: "https://i.ytimg.com/vi/3v3YYpVrEuA/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/MuonRuouToTinh.mp3') as  any,
      nameSong:" Mượn Rượu Tỏ Tình",
      singer: "BIGDADDY x EMILY",
      img: "https://i.ytimg.com/vi/aGUQsb31TEw/hq720.jpg"
  },
  {
      mp3:require('./../../assets/mp3/HaiMuoiHai.mp3') as  any,
      nameSong: "Hai Mươi Hai",
      singer: "amme x Hứa Kim Tuyền",
      img: "https://i.ytimg.com/vi/n2iFnPaAsnU/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/AnhMetRoi.mp3') as  any,
      nameSong:" Anh Mệt Rồi",
      singer: "Anh Quân Idol x Freak D",
      img: "https://i.ytimg.com/vi/wAQnEYVcOq4/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/AnhSeQuenEmMa.mp3') as  any,
      nameSong:" Anh Sẽ Quên Em Mà",
      singer: "NIT ft Sing",
      img: "https://i.ytimg.com/vi/tYNX2E6v6jU/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/ChungTaCuaHienTai.mp3') as  any,
      nameSong:" Chúng Ta Của Hiện Tại- lofi",
      singer: "MTP x CM1X",
      img: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/chungtacuahientai.jpg"
  },
  {
      mp3:require('./../../assets/mp3/BuongDoiTayNhauRa.mp3') as  any,
      nameSong:" Buông Đôi Tay Nhau Ra",
      singer: "Sơn Tùng-MTP ",
      img: "https://i.ytimg.com/vi/LCyo565N_5w/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/HayTraoChoAnh.mp3') as  any,
      nameSong:"Hãy Trao Cho Anh",
      singer: "Sơn Tùng-MTP ",
      img: "https://amthanhthudo.com/wp-content/uploads/hay-trao-cho-anh.jpg"
  },
  {
      mp3:require('./../../assets/mp3/LacTroi.mp3') as  any,
      nameSong:"Lạc Trôi",
      singer: "Sơn Tùng-MTP ",
      img: "https://i.ytimg.com/vi/DrY_K0mT-As/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/EmCuaNgayHomQua.mp3') as  any,
      nameSong:"Em Của Ngày Hôm Qua",
      singer: "Sơn Tùng-MTP ",
      img: "https://loretofest.org/cdn/files/loi-bai-hat-em-cua-ngay-hom-qua.jpg"
  },
  {
      mp3:require('./../../assets/mp3/HoaVoSac.mp3') as  any,
      nameSong:"Hoa Vô Sắc",
      singer: "K-ICM , Jack ",
      img: "https://i.ytimg.com/vi/gZKkD3edFaE/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/ChungTaCuaSauNay.mp3') as  any,
      nameSong:" Chúng Ta Của Sau Này",
      singer: "T.R.I",
      img: "https://avatar-ex-swe.nixcdn.com/song/share/2021/01/27/f/1/e/c/1611738359456.jpg"
  },
  {
      mp3:require('./../../assets/mp3/HetThuongCanNho.mp3') as  any,
      nameSong:" Hết Thương Cạn Nhớ",
      singer: "Đức Phúc",
      img: "https://i.ytimg.com/vi/DZDYZ9nRHfU/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/DungLoAnhDoiMa.mp3') as  any,
      nameSong:" Đừng Lo Anh Đợi Mà",
      singer: "Mr.Siro",
      img: "https://i.ytimg.com/vi/BnWiFq0AxQc/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/HoaNoKhongMau.mp3') as  any,
      nameSong:" Hoa Nở Không Màu",
      singer: "Hoài Lâm x Freak D",
      img: "https://i.ytimg.com/vi/y_6aSG2yfe8/mqdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/MuaHaNamAy.mp3') as  any,
      nameSong:" Mùa Hạ Năm Ấy",
      singer: "Linh",
      img: "https://i.ytimg.com/vi/bbiXiY_Ec_c/sddefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/NhuAnhDaThayEm.mp3') as  any,
      nameSong:"Như Anh Đã Thấy Em",
      singer: "Phúc XP x Freak D",
      img: "https://i.ytimg.com/vi/cPbp2iFaZRo/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/PhaiChangEmDaYeu.mp3') as  any,
      nameSong:" Phải Chăng Em Đã Yêu",
      singer: "Juky San ft Redt x Freak D ",
      img: "https://i.ytimg.com/vi/O81_4VAson4/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/SinhRaDaLaThuDoiLapNhau.mp3') as  any,
      nameSong:" Sinh Ra Đã Là Thứ Đối Lập Nhau",
      singer: "Emcee L (Da LAB) ft. Badbies",
      img: "https://i.ytimg.com/vi/redFrGBZoJY/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/TinhKaNgotNgao.mp3') as  any,
      nameSong:"Tình Ka Ngọt Ngào",
      singer: "LẬP NGUYÊN x YẾN NỒI CƠM ĐIỆN",
      img: "https://i.ytimg.com/vi/Yr7FIIshNxo/maxresdefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/Yeu1NguoiCoLe.mp3') as  any,
      nameSong:"Yêu Một Người Có Lẽ",
      singer: " Lou Hoàng - Miu Lê",
      img: "https://i.ytimg.com/vi/w2DBMrXJDIo/sddefault.jpg"
  },
  {
      mp3:require('./../../assets/mp3/LegendsNeverDie.mp3') as  any,
      nameSong:"Legends Never Die",
      singer: " Against The Curent-World 2017",
      img: "https://haycafe.vn/wp-content/uploads/2021/11/Hinh-anh-Yasuo-nghi-ngoi-tren-nui.jpg"

  },
]

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);


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

  
  
  

  const stopSound = async () => {
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
  

  const startSound = async (mp3File: any) => {
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

    <View key={`item-${index}`} style={styles.resultItem}>
      <TouchableOpacity
        style={styles.resultItem}
        onPress={() => playSound(result.mp3, index)}
      >
        <Image source={{ uri: result.img }} style={styles.avatar} />
        <Text style={styles.resultTextList}>{result.nameSong}</Text>
        <Text style={styles.singerNameList}>({result.singer})</Text>
        <FontAwesome
          name={playingIndex === index ? 'pause' : 'play'}
          size={24}
          color="black"
          style={styles.playPauseIcon}
        />
      </TouchableOpacity>
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
          <ScrollView style={styles.resultContainer2}>
            {filteredResults.length > 0 ? (
              filteredResults.map((result, index) => (

                <TouchableOpacity key={index} style={styles.resultItem} >
                  <Image source={{ uri: result.img }} style={styles.avatar} />
                  <Text style={styles.resultText}>{result.nameSong}</Text>
                  <Text style={styles.singerNameList}>({result.singer})</Text>
                
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
  playPauseIcon: {
  position: 'absolute',
  // right: 10,
  alignSelf: 'center',
  marginLeft: 350,
  color: 'white'
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
    marginLeft: 20,
    color: 'white',
    fontSize: 8
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
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,

  },
  
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});
