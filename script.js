'use strict'


let roomImage = ["img/room1.jpg","img/room2.jpg","img/room3.jpg","img/room4.jpg","img/room5.jpg"];
let roomPrice = [80,129,249,520,759];
let price = document.querySelector('.price');
let image = document.querySelector('.image');
let total = document.querySelector('.total');


function selectRoom(){
    let rooms = document.querySelector('.rooms').value;
    let night = document.querySelector('.night').value;
    image.setAttribute('src',roomImage[rooms-1])
    price.textContent = roomPrice[rooms-1] + '$'
    total.textContent = roomPrice[rooms-1] * night + '$'
}

function selectNight(){
    let rooms = document.querySelector('.rooms').value;
    let night = document.querySelector('.night').value;
    price.textContent = roomPrice[rooms-1] + '$'
    total.textContent = roomPrice[rooms-1] * night + '$'
}



/*

== for value
=== for value and type

plugin : CSS Peeper

*/