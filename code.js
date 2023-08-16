"use strict";

const addZeros = n =>{
    if(n.toString().length <2) return "0".concat(n);
    return n;
}

const updateHour = () =>{
    const time = new Date();
    let hour = addZeros(time.getHours());
    let minutes = addZeros(time.getMinutes());
    let seconds = addZeros(time.getSeconds());
    document.querySelector(".hour").textContent = hour;
    document.querySelector(".min").textContent = minutes;
    document.querySelector(".sec").textContent = seconds;
}

updateHour();

setInterval(updateHour, 1000)
