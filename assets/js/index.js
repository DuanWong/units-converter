'use strict';

/*--------------------------------------------*/
/*isNumber                                    */
/*--------------------------------------------*/

function isNumberTemp(value) {
    if (!isNaN(value) && value.trim() !== '') {
        return true;
    } else {
        return false;
    }
}

function isNumber(value) {
    if (value > 0 && !isNaN(Number(value))) {
        return true;
    } else {
        return false;
    }
}

/*--------------------------------------------*/
/*Temperature converter                       */
/*--------------------------------------------*/

const tempInput = document.querySelector('.temp-input');
const tempOutput = document.querySelector('.temp-output');
const tempConvert = document.querySelector('.temp-convert');
const tempRadios = document.getElementsByName('temp-unit');

tempConvert.addEventListener('click', function() {
    let a = tempInput.value.trim();
    let selectedValue;

    for (const radio of tempRadios) {
        if (radio.checked) {
            selectedValue = radio.value; 
            break;
        }
    }

    if (isNumberTemp(a) && selectedValue === 'to-fah') {
        let result = a * 1.8 + 32;
        tempOutput.value = `${a} ℃ = ${result.toFixed(2)} ℉`;
        tempOutput.style.color = 'black';
    } else if (isNumberTemp(a) && selectedValue === 'to-cel') {
        let result = (a - 32) / 1.8;
        tempOutput.value = `${a} ℉ = ${result.toFixed(2)} ℃`;
        tempOutput.style.color = 'black';
    } else {
        tempOutput.value = 'Please enter a valid number';
        tempOutput.style.color = 'red';
    }

    tempInput.value = '';
});

tempInput.addEventListener('focus', function() {
    tempOutput.value = '';
});

/*--------------------------------------------*/
/*Length converter                            */
/*--------------------------------------------*/

const lengthInput = document.querySelector('.length-input');
const lengthOutput = document.querySelector('.length-output');
const lengthConvert = document.querySelector('.length-convert');
const lengthRadios = document.getElementsByName('length-unit');

lengthConvert.addEventListener('click', function() {
    let a = lengthInput.value.trim();
    let selectedValue;

    for (const radio of lengthRadios) {
        if (radio.checked) {
            selectedValue = radio.value; 
            break;
        }
    }

    if (isNumber(a) && selectedValue === 'to-cm') {
        let result = a * 2.54;
        lengthOutput.value = `${a} inch = ${result.toFixed(2)} cm`;
        lengthOutput.style.color = 'black';
    } else if (isNumber(a) && selectedValue === 'to-inch') {
        let result = a * 0.3937;
        lengthOutput.value = `${a} cm = ${result.toFixed(2)} inch`;
        lengthOutput.style.color = 'black';
    } else {
        lengthOutput.value = 'Please enter a valid number';
        lengthOutput.style.color = 'red';
    }

    lengthInput.value = '';
});

lengthInput.addEventListener('focus', function() {
    lengthOutput.value = '';
});

/*--------------------------------------------*/
/*Area converter                            */
/*--------------------------------------------*/

const areaInput = document.querySelector('.area-input');
const areaOutput = document.querySelector('.area-output');
const areaConvert = document.querySelector('.area-convert');
const areaRadios = document.getElementsByName('area-unit');

areaConvert.addEventListener('click', function() {
    let a = areaInput.value.trim();
    let selectedValue;

    for (const radio of areaRadios) {
        if (radio.checked) {
            selectedValue = radio.value; 
            break;
        }
    }

    if (isNumber(a) && selectedValue === 'to-square-meters') {
        let result = a * 0.092903;
        areaOutput.value = `${a} ft² = ${result.toFixed(2)} m²`;
        areaOutput.style.color = 'black';
    } else if (isNumber(a) && selectedValue === 'to-square-foot') {
        let result = a * 10.7639;
        areaOutput.value = `${a} m² = ${result.toFixed(2)} ft²`;
        areaOutput.style.color = 'black';
    } else {
        areaOutput.value = 'Please enter a valid number';
        areaOutput.style.color = 'red';
    }

    areaInput.value = '';
});

areaInput.addEventListener('focus', function() {
    areaOutput.value = '';
});

/*--------------------------------------------*/
/*Weight converter                            */
/*--------------------------------------------*/

const weightInput = document.querySelector('.weight-input');
const weightOutput = document.querySelector('.weight-output');
const weightConvert = document.querySelector('.weight-convert');
const weightRadios = document.getElementsByName('weight-unit');

weightConvert.addEventListener('click', function() {
    let a = weightInput.value.trim();
    let selectedValue;

    for (const radio of weightRadios) {
        if (radio.checked) {
            selectedValue = radio.value; 
            break;
        }
    }

    if (isNumber(a) && selectedValue === 'to-kg') {
        let result = a * 0.45359237;
        weightOutput.value = `${a} lb = ${result.toFixed(2)} kg`;
        weightOutput.style.color = 'black';
    } else if (isNumber(a) && selectedValue === 'to-lb') {
        let result = a * 2.20462;
        weightOutput.value = `${a} kg = ${result.toFixed(2)} lb`;
        weightOutput.style.color = 'black';
    } else {
        weightOutput.value = 'Please enter a valid number';
        weightOutput.style.color = 'red';
    }

    weightInput.value = '';
});

weightInput.addEventListener('focus', function() {
    weightOutput.value = '';
});