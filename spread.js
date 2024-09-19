//! SPREAD OPERATOR INI DIGUNAKAN UNTUK MENGAMBIL SEMUA VALUE DARI SENUAH ARRAY ATU OBJECT, DENGAN MENGGUNAKAN '...nama-terserah'
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [one, two, ...semuaAngka] = myArray;
console.log("one :", one, "two : ", two, "semua angka : ", semuaAngka);

//! SPREAD OPERATOR JUGA BISA UNTUK MENGUPDATE VALUE DARI SEBUAH ARRAY OBJECT
const myProfile = {
  name: "Fery",
  umur: 20,
  hobby: "tidur",
};

const myProfileUpdate = {
  umur: 21,
  hobby: "Sepak Bola",
  makananFavorite: "mie ayam",
};
const myProfileUpdatedProfile = { ...myProfile, ...myProfileUpdate };
console.log(myProfileUpdatedProfile);
