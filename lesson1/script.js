"use strict";


// function Mob(lv, hp, mp){
//     this.lv = lv;
//     this.hp = hp;
//     this.mp = mp;
//     this.say = function(){
//         console.log("У меня "+ hp + " ХП");
//     };
// }


// let lex = new Mob(2, 111, 222);

// let a = 'mp';
// console.log(lex[a]);

// let b = 'say';
// lex[b]();

// let incr = 10;
// let decr = 10;

// console.log(incr++);
// console.log(decr--);
// console.log(incr++);
// console.log(10%6);

 window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayPosition, displayError);
    }else{
        alert("Oops, no geolocation support");
    }
}

function displayPosition(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    var div = document.getElementById("location");
    div.innerHTML = `You are at Latitude: ${lat}, Longitude: ${long}`;
}

function displayError(error){
    var div = document.getElementById("location");
    div.innerHTML = error.message;
}




