interface Result {
    mp3: any;
    nameSong: string;
    singer: string;
    img: string;
}

const playList: Result[] = [
    {
        mp3:require('../../assets/mp3/yeunguoicouocmo.mp3'),
        nameSong: "Yêu Người Có Ước Mơ",
        singer: "buitruonglinh",
        img: "https://i.ytimg.com/vi/6r7jzy1LABY/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/suytnuathi.mp3'),
        nameSong: "Suýt Nữa Thì",
        singer: "Andiez",
        img: "https://i.ytimg.com/vi/cUmpJ2zwfVU/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/maimaikhongphaianh.mp3'),
        nameSong: "Mãi Mãi Không Phải Anh",
        singer: "Thanh Bình",
        img: "https://i.ytimg.com/vi/677bAENZAEI/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/ghequa.mp3'),
        nameSong: "Ghé Qua",
        singer: "taynguyensound",
        img: "https://i.ytimg.com/vi/W2FRMzCuPzY/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/duongtoichoemve.mp3'),
        nameSong: "Đường Tôi Chở Em Về",
        singer: "buitruonglinh",
        img: "https://i.ytimg.com/vi/OuNo8Tkb3lI/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/chodoicodangso.mp3'),
        nameSong: "Chờ đợi có đáng sợ",
        singer: "Andiez",
        img: "https://i.ytimg.com/vi/WE05tPmCj8k/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/aidoiminhduocmai.mp3'),
        nameSong: "Ai Đợi  mình Được Mãi lofi",
        singer: "Thanh Hưng",
        img: "https://i.ytimg.com/vi/LM-q6gkn63s/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/3107full.mp3'),
        nameSong: "3107 Full version ",
        singer: "W/n x DuongG, Nâu , Titie, Erik",
        img: "https://i.ytimg.com/vi/GatNL0mmQGc/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/CuChillThoi.mp3'),
        nameSong: "Cứ Chill Thôi ",
        singer: "Chillies ft Suni Hạ Linh & Rhymastic",
        img: "https://karaoke.com.vn/wp-content/uploads/2020/07/photo-1-15953249129091703469711.jpg"
    },
    {
        mp3:require('../../assets/mp3/XeDap.mp3'),
        nameSong:" Xe Đạp ",
        singer: "CM1X",
        img: "https://i.ytimg.com/vi/3v3YYpVrEuA/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/MuonRuouToTinh.mp3'),
        nameSong:" Mượn Rượu Tỏ Tình",
        singer: "BIGDADDY x EMILY",
        img: "https://i.ytimg.com/vi/aGUQsb31TEw/hq720.jpg"
    },
    {
        mp3:require('../../assets/mp3/HaiMuoiHai.mp3'),
        nameSong: "Hai Mươi Hai",
        singer: "amme x Hứa Kim Tuyền",
        img: "https://i.ytimg.com/vi/n2iFnPaAsnU/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/AnhMetRoi.mp3'),
        nameSong:" Anh Mệt Rồi",
        singer: "Anh Quân Idol x Freak D",
        img: "https://i.ytimg.com/vi/wAQnEYVcOq4/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/AnhSeQuenEmMa.mp3'),
        nameSong:" Anh Sẽ Quên Em Mà",
        singer: "NIT ft Sing",
        img: "https://i.ytimg.com/vi/tYNX2E6v6jU/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/ChungTaCuaHienTai.mp3'),
        nameSong:" Chúng Ta Của Hiện Tại- lofi",
        singer: "MTP x CM1X",
        img: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/chungtacuahientai.jpg"
    },
    {
        mp3:require('../../assets/mp3/BuongDoiTayNhauRa.mp3'),
        nameSong:" Buông Đôi Tay Nhau Ra",
        singer: "Sơn Tùng-MTP ",
        img: "https://i.ytimg.com/vi/LCyo565N_5w/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/HayTraoChoAnh.mp3'),
        nameSong:"Hãy Trao Cho Anh",
        singer: "Sơn Tùng-MTP ",
        img: "https://amthanhthudo.com/wp-content/uploads/hay-trao-cho-anh.jpg"
    },
    {
        mp3:require('../../assets/mp3/LacTroi.mp3'),
        nameSong:"Lạc Trôi",
        singer: "Sơn Tùng-MTP ",
        img: "https://i.ytimg.com/vi/DrY_K0mT-As/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/EmCuaNgayHomQua.mp3'),
        nameSong:"Em Của Ngày Hôm Qua",
        singer: "Sơn Tùng-MTP ",
        img: "https://baogiaothong.mediacdn.vn/upload/images/2021-1/article_img/2021-03-07/img-bgt-2021-9025-1615082562-width700height440.jpg"
    },
    {
        mp3:require('../../assets/mp3/HoaVoSac.mp3'),
        nameSong:"Hoa Vô Sắc",
        singer: "K-ICM , Jack ",
        img: "https://i.ytimg.com/vi/gZKkD3edFaE/maxresdefault.jpg"
    },
    {
         mp3:require('../../assets/mp3/ChungTaCuaSauNay.mp3'),
         nameSong:" Chúng Ta Của Sau Này",
         singer: "T.R.I",
         img: "https://avatar-ex-swe.nixcdn.com/song/share/2021/01/27/f/1/e/c/1611738359456.jpg"
    },
    {
        mp3:require('../../assets/mp3/HetThuongCanNho.mp3'),
        nameSong:" Hết Thương Cạn Nhớ",
        singer: "Đức Phúc",
        img: "https://i.ytimg.com/vi/DZDYZ9nRHfU/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/DungLoAnhDoiMa.mp3'),
        nameSong:" Đừng Lo Anh Đợi Mà",
        singer: "Mr.Siro",
        img: "https://i.ytimg.com/vi/BnWiFq0AxQc/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/HoaNoKhongMau.mp3'),
        nameSong:" Hoa Nở Không Màu",
        singer: "Hoài Lâm x Freak D",
        img: "https://i.ytimg.com/vi/y_6aSG2yfe8/mqdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/MuaHaNamAy.mp3'),
        nameSong:" Mùa Hạ Năm Ấy",
        singer: "Linh",
        img: "https://avatar-ex-swe.nixcdn.com/mv/2021/06/09/d/1/5/b/1623210285834_640.jpg"
    },
    {
        mp3:require('../../assets/mp3/NhuAnhDaThayEm.mp3'),
        nameSong:"Như Anh Đã Thấy Em",
        singer: "Phúc XP x Freak D",
        img: "https://i.ytimg.com/vi/cPbp2iFaZRo/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/PhaiChangEmDaYeu.mp3'),
        nameSong:" Phải Chăng Em Đã Yêu",
        singer: "Juky San ft Redt x Freak D ",
        img: "https://i.ytimg.com/vi/O81_4VAson4/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/SinhRaDaLaThuDoiLapNhau.mp3'),
        nameSong:" Sinh Ra Đã Là Thứ Đối Lập Nhau",
        singer: "Emcee L (Da LAB) ft. Badbies",
        img: "https://i.ytimg.com/vi/redFrGBZoJY/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/TinhKaNgotNgao.mp3'),
        nameSong:"Tình Ka Ngọt Ngào",
        singer: "LẬP NGUYÊN x YẾN NỒI CƠM ĐIỆN",
        img: "https://i.ytimg.com/vi/Yr7FIIshNxo/maxresdefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/Yeu1NguoiCoLe.mp3'),
        nameSong:"Yêu Một Người Có Lẽ",
        singer: " Lou Hoàng - Miu Lê",
        img: "https://i.ytimg.com/vi/w2DBMrXJDIo/sddefault.jpg"
    },
    {
        mp3:require('../../assets/mp3/LegendsNeverDie.mp3'),
        nameSong:"Legends Never Die",
        singer: " Against The Curent-World 2017",
        img: "https://haycafe.vn/wp-content/uploads/2021/11/Hinh-anh-Yasuo-nghi-ngoi-tren-nui.jpg"
    },
]

export default playList
   
