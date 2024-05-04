var x = 1;
while (x <= 10) {
    console.log(x);
    x++;
}

x = 11;
do {
    console.log(x);
    x++;
} while (x <= 10);


for (var i = 0; i < 100; i++) {
    console.log(i);
}

const user = {
    username: "fatih",
    password: "123"
}
console.log(user);

//Veri Tipleri

// 1 - String;
// 2 - Number;
// 3 - Boolean;
// 4 - null;
// 5 - undefined;
// 6 - Object;
// 7 - Function;

let isim = "Fatih" /*String;*/
console.log(isim);
console.log(typeof isim);

var models = ["Mercedes", "Audi", "Bmw", "Porshce"]


models.forEach(function (model) {
    console.log(model);

})
var filmler = [
    {
        adı: "Kılıbık",
        puanı: 10,
        izlenme: false
    },
    {
        adı: "Hababam Sınıfı",
        puanı: 10,
        izlenme: true
    }
]


filmler.forEach(function (film) {
    if (film.izlenme) {
        console.log("Filmin adı : " + film.adı + "ve izlendi. Puanı ise " + film.puanı);

    } else {

        console.log("Filmin adı : " + film.adı + " ve izlenmedi. Puanı ise " + film.puanı);
    }
});