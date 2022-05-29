// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//Monica
const warnaMonica = ["Yellow", "Pink", "White", "Purple"];
const restoMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];

let setColorMonica = new Set(warnaMonica);
let setRestoMonica = new Set(restoMonica);

const educationMonica = [
    { name : "SD 01", city: "Jakarta", graduate: "2016" },
    { name : "SD 02", city: "Jakarta", graduate: "2019" },
    { name : "SD 03", city: "Teangerang" },
];

//Wendy
const warnaWendy = ["Blue", "Black", "Grey"];
const restoWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

let setColorWendy = new Set(warnaWendy);
let setRestoWendy = new Set(restoWendy);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [...setColorMonica],
    isHvePet: "Yes",
    educcation: educationMonica,
    favoriteRestaurant: [...setRestoMonica],
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [...setColorWendy],
    isHvePet: "Yes",
    educcation: educationWendy,
    favoriteRestaurant: [...setRestoWendy],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};