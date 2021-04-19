let test = (document.getElementById("test"));
document.getElementById("test").innerHTML = 'good evening';

let nana = (document.getElementById("mor"));
document.getElementById("mor").innerHTML = 'israel dhen good taecher';

let divBox = document.querySelectorAll('.box');
console.log(divBox);

divBox.forEach(el =>  el.test.border = "10 px solid #000000")