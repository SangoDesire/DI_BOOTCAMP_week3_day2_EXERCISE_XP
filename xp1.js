//Using a DOM property, retrieve the h1 and console.log it.
const some = document.getElementById("some");
console.log(some);
//Using DOM methods, remove the last paragraph in the <article> tag.
const lastpara = document.getElementById('lastpara');
lastpara.remove();

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const chocolat = document.getElementById("chocolat");

//chocolat.addEventListener("click", bgcolor);

function bgcolor() {
    chocolat.style.backgroundColor = "red";
}

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const hid = document.getElementById("hid")

function hide() {
    hid.style.display = "none"
}

//Add a <button> to the HTML file, that when clicked on, 
//should make the text of all the paragraphs, bold.
const para = document.getElementsByTagName("p");

function textbold() {
    for (i = 0; i < para.length; i++) {
        para[i].style.fontWeight = "bold";

    }
}