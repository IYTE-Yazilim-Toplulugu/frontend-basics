console.log("DOM");


const p = document.getElementById("merhaba");

// const paragraphs = document.getElemen
// const p2 = document.getElementByClassName("classMerhaba");
// const p3 = document.getElementByTagName("h2");

p.innerHTML += ". İyi günler";

// console.log(p3);



const e = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + e[0].innerHTML;


let h1 = document.createElement("h1");
h1.innerHTML = "Create Element with Document Object";
document.body.appendChild(h1);


let wrapper = document.getElementById("wrapper");
wrapper.style.border = "2px solid blue";
wrapper.style.padding = "10px";

let div = document.createElement("div");
div.style.border = "2px solid red";
div.style.padding = "10px";

let h2 = document.createElement("h2");
h2.style.border = "2px solid green";

let h3 = document.createElement("h3");
h3.style.border = "2px solid green";

let div2 = document.createElement("div");

h2.innerHTML = "Hello World";
h3.innerHTML = "Hello World";

div.appendChild(h2);
div2.appendChild(h3);

wrapper.appendChild(div);
wrapper.appendChild(div2);


let buton = document.getElementById("buton");
buton.innerHTML = "Lütfen Tıklayın";
buton.style.marginTop = "10px";

let sayi = document.getElementById("sayi");
let counter = 0;

buton.addEventListener("click", function click() {
    buton.innerHTML = "Tıklamaya Devam Et";
    counter++;
    sayi.innerHTML = counter.toString();
})


document.getElementById("increase").addEventListener("click", function clicked() {
    counter++;
    sayi.innerHTML = counter.toString();
});

document.getElementById("decrease").addEventListener("click", function clicked() {
    counter--;
    sayi.innerHTML = counter.toString();
});


// Daha detaylı içerik için: https://www.w3schools.com/js/js_htmldom_document.asp



// HOMEWORK: https://www.w3schools.com/js/js_dom_examples.asp
