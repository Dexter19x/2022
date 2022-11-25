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



const ourCoords = {
    latitude: 47.624851,
    longitude: -122.52099
};

function computeDistance(start, dest){
    let startLatRads = degreesToRadians(start.latitude);
    let startLongRads = degreesToRadians(start.longitude);
    let destLatRads = degreesToRadians(dest.latitude);
    let destLongRads = degreesToRadians(dest.longitude);

    var Radius = 6371;
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                   Math.cos(startLatRads) * Math.cos(destLatRads) *
                   Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees){
    var radians = (degrees * Math.PI)/180;
    return radians;
}


 
function getMyLocation() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    }else{
        alert("Oops, no geolocation support");
    }
}

function displayLocation(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    var div = document.getElementById("location");
    var km = computeDistance(position.coords, ourCoords);
    div.innerHTML = `You are at Latitude: ${lat}, Longitude: ${long}, ${km} km from the...`;

}



function displayError(error){
    var div = document.getElementById("location");
    div.innerHTML = error.message;
}




fghfghfghfghfghfgh