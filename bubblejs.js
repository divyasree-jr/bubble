let circle1 = document.getElementById('circle-one');
let circle2 = document.getElementById('circle-two');
let circle3 = document.getElementById('circle-three')
let circle4 = document.getElementById('circle-four');
let clickedContainer1 = document.getElementById('clicked-container1');
let clickedContainer2 = document.getElementById('clicked-container2');
let clickedContainer3 = document.getElementById('clicked-container3');
let clickedContainer4 = document.getElementById('clicked-container4');
let reset = document.getElementById('reset')

function colorChange1() {
    circle1.style.backgroundColor = "#aaa9ba";
    clickedContainer1.classList.remove('individual-circle-container');
    clickedContainer1.classList.add('clicked-individual-circle-container');
}

function colorChange2() {
    circle2.style.backgroundColor = "#aaa9ba";
    clickedContainer2.classList.remove('individual-circle-container');
    clickedContainer2.classList.add('clicked-individual-circle-container');
}

function colorChange3() {
    circle3.style.backgroundColor = "#aaa9ba";
    clickedContainer3.classList.remove('individual-circle-container');
    clickedContainer3.classList.add('clicked-individual-circle-container');
}

function colorChange4() {
    circle4.style.backgroundColor = "#aaa9ba";
    clickedContainer4.classList.remove('individual-circle-container');
    clickedContainer4.classList.add('clicked-individual-circle-container');
}

function resetBtn() {
    circle1.style.backgroundColor = "#e3bf4b"
    circle2.style.backgroundColor = "#2c6cc7"
    circle3.style.backgroundColor = "#d4192c"
    circle4.style.backgroundColor = "#2ba329"
    clickedContainer1.classList.remove('clicked-individual-circle-container');
    clickedContainer1.classList.add('individual-circle-container');
    clickedContainer2.classList.remove('clicked-individual-circle-container');
    clickedContainer2.classList.add('individual-circle-container');
    clickedContainer3.classList.remove('clicked-individual-circle-container');
    clickedContainer3.classList.add('individual-circle-container');
    clickedContainer4.classList.remove('clicked-individual-circle-container');
    clickedContainer4.classList.add('individual-circle-container');
}