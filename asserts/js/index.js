'use strict';

const change = document.querySelector('.change');
const theme = document.querySelector('.theme');
const title = document.querySelector('.title');
const inputBox = document.querySelector('#input-box');
const choice = document.querySelector('.choice');
const output = document.querySelector('.output');
const calculate = document.querySelector('#calculate');
const radios = document.getElementsByName('conversion');

change.addEventListener('click', function() {
  this.classList.toggle('Dark');

  if (this.classList.contains('Dark')) {
    this.innerText = 'Light mode';
    theme.style.backgroundColor = '#181721';
    this.style.backgroundColor = '#efedf5';
    this.style.color = '#000';
    title.style.color = '#fff';
    inputBox.style.backgroundColor = '#181721';
    inputBox.style.color = '#fff';
    choice.style.color = '#fff';
  } else {
    this.innerText = 'Dark mode';
    theme.style.backgroundColor = '#efedf5';
    this.style.backgroundColor = '#181721';
    this.style.color = '#fff';
    title.style.color = '#000';
    inputBox.style.backgroundColor = '#efedf5';
    inputBox.style.color = '#000';
    choice.style.color = '#000';
  }
});

function isNumber(inputBox) {
    if (inputBox.length > 0 && !isNaN(inputBox)) {
        return true;
    } else {
        return false;
    }
}

calculate.addEventListener('click', function() {
    let a = inputBox.value.trim();
    let selectedValue;

    for (const radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value; 
            break;
        }
    }

    if (isNumber(a) && selectedValue === 'toFah') {
        let result = a * 1.8 + 32;
        output.innerText = `${a} ℃ = ${result.toFixed(2)} ℉`;
    } else if (isNumber(a) && selectedValue === 'toCel') {
        let result = (a - 32) / 1.8;
        output.innerText = `${a} ℉ = ${result.toFixed(2)} ℃`;
    } else {
        output.innerText = 'Please enter a valid number';
    }
});

/*
inputBox.addEventListener('focus', function() {
    output.innerText = '';
    inputBox.value = '';
});
*/
