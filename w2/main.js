// 1. Değişkenler ve Syntax
/*
-> JS Variables
    -> var, let, const

-> JS Data Types
    -> object, array, date

-> JS Functions
-> JS Objects
-> JS Strings
    -> String Methods
    -> String Search
    -> String Templates
*/


// 2. Arrayler
/*
-> JS Arrays
    -> JS Array Methods
    -> JS Array Sort
    -> JS Array Iteration

-> JS Math
*/

// 3. Koşullar
/*
-> If Else
-> Switch - case
*/


// 4. Döngüler
/*
-> for
-> foreach
-> While
*/



// 5. Fonksiyonlar



// 6. Document Object Model
/*
-> DOM Elements
-> DOM Documents
-> DOM Methods
-> DOM CSS
-> DOM Forms
-> DOM Events ve EventListener
*/



// 7. Web API's ve Asenkron Programlama
/*
-> Data fetching
*/



console.log("JavaScript Dosyasına Bağlandı...");

var x = 0;
let y = 12;
const z = 15;

const mock = ["Merhaba", "Nasılsın", "İyiyim"]
mock[0] = "Selam";

console.log(mock);



function functionName(parametre_1, parametre_2, parametre_3) {
    return parametre_1 * parametre_2 + parametre_3;
}

console.log(functionName(12, 24, 23));


const myObj = {
    type: "Fiat",
    model: "500",
    color: "white",
    name: "Fiat",
    modelName: "500T",
    getFullName: function() {
        return this.name + " " + this.modelName;
    }
}

console.log(myObj.type);
console.log(myObj.color);
console.log(myObj.getFullName())



let name = "Doğukan";
console.log(name.length);

let part = name.slice(2, 5);
console.log(part);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

let text = "    Merhaba     ";
console.log(text);
console.log(text.trim());

// Fazlası için: https://www.w3schools.com/js/js_string_methods.asp


let newText = "Please locate where 'locate' occurs!";
console.log(newText.indexOf("where"));


let firstName = "John";
let lastName = "Doe";

let lastText = `Welcome ${firstName}, ${lastName}!`;
console.log(lastText);


// -------------------------------


const cars = ["Volvo", "Reanult", "Mercedes"];

console.log(cars[2]);

cars[3] = "BMW";
console.log(cars[3]);
console.log(cars[4]);

console.log(cars.length);


console.log(cars);
console.log(cars.pop());
cars.push("Togg");
console.log(cars);

// Dahası için: https://www.w3schools.com/js/js_array_methods.asp

cars.sort();
console.log(cars);

cars.reverse();
console.log(cars);


const sayilar = [12, 24, 36, 48, 32, 13]
console.log(sayilar);

sayilar.map(function myFunc(value) {
    console.log(value * 2);
});


const over23 = sayilar.filter(function myFilter(value) {
    return value > 23;
})
console.log(over23);

console.log(sayilar.includes(12));
console.log(sayilar.includes(23));


// MATH
let randomNumber = Math.random() * 10;
console.log(randomNumber);
console.log(Math.round(randomNumber));
console.log(Math.floor(randomNumber));
console.log(Math.ceil(randomNumber));


// -----------------------------------------------------

let a = 3;
let b = 4;

if (a > b) {
    console.log("x büyüktür y");
}
else if (a == b) {
    console.log("x eşittir y");
}
else {
    console.log("x küçüktür y");
}

let c = 15
switch (c) {
    case 13:
        console.log("c sayım 13'e eşittir");
        break;
    case 14:
        console.log("c sayım 14'e eşittir");
        break;
    default:
        console.log("default");
}


//  --------------------------------------------

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

cars.forEach(element => {
   console.log(element); 
});


let r = 12
while(r < 25) {

    console.log(r);
    r++;

    if (r == 18) {
        break;
    }
}

// ------------------------------------------

function sum(param1, param2) {
    return param1 + param2;
}

let sum1 = sum(23, 35);
console.log(sum1);