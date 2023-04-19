let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda",
 "toyota", "renault", "tesla", "volvo", "skoda", "nissan",
 "ferrari", "volkswagen", "alfa romeo", "mitsubishi"];

let filteredCars = cars.filter(car => car.includes("o"));
// o harfi iceren arabalari filtrele

let numberOfCars = filteredCars.length;
// filtrelenmis arabalarin sayisini hesapla

console.log(filteredCars);// o harfi iceren arabalari yazdir

console.log(numberOfCars); // o harfi iceren arabalarin sayisini yazdir

//-----------------farkli ornek
let filteredCarss = cars.filter(car => car.includes("t"));
// t harfi iceren arabalari filtrele

let numberOfCarss = filteredCars.length;
// filtrelenmis arabalarin sayisini hesapla

console.log(filteredCarss);// o harfi iceren arabalari yazdir

console.log(numberOfCarss); // o harfi iceren arabalarin sayisini yazdir

//------ iki tane o harfi gecenler

let filteredCars2 = cars.filter(car => (car.match(/o/g) || []).length === 2);

let numberOfCars2 = filteredCars.length;

console.log(filteredCars2);
console.log(numberOfCars2);

//---------harf uzunlugu 5 ten kucuk olanlar

let filteredCarsKucuk = cars.filter(car => car.length < 5);

console.log(filteredCarsKucuk);

//--------Ilk harfi "f" olanlarin son harfini x olarak degistirmek

let degisenCars = cars.map(car => {
    if (car.charAt(0) === "f") {
        return car.slice(0, -1) + "x";
    } else {
        return car;
    }
});

console.log(degisenCars);

//-------farkli ornek

let degisenCars1 = cars.map(car => {
    if (car.charAt(0) === "f") {
        return car.slice(0, 2) + "x";
    } else {
        return car;
    }
});

console.log(degisenCars1);

//--------Uzunlugu 3 ile 6 arasinda olan arabalardan
// isminin icinde "a" harfi olanlari, isimlerinin önüne
// "my favorite " gelecek sekilde degistirin ve html
// icerisinde listeleyin.

let filteredCarsFavori = cars.filter(car => car.length >= 3 &&
 car.length <= 6 && car.includes ("a"));

let guncelCars = filteredCarsFavori.map(car => "my favorite " + car);

let carList = "<ul>";

guncelCars.forEach(car => {
    carList += "<li>" + car + "</li>";
});

carList += "</ul>";

document.getElementById("car-list").innerHTML = carList;


//--------Ismi icinde "o" ve "a" gecen arabalar

let selectedCars = [];

for (let i = 0; i < cars.length; i++) {
    let car = cars [i];
    if (car.includes ("o") && car.includes("a")) {
        selectedCars.push(car);
    }
}
console.log(selectedCars);

//--------Ismi icinde "o" veya "i" gecen arabalar

let selectedCars1 = [];

for (let i = 0; i < cars.length; i++) {
    let car = cars [i];
    if (car.includes ("o") || car.includes("i")) {
        selectedCars1.push(car);
    }
}
console.log(selectedCars1);
