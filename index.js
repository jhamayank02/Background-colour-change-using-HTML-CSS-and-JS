let selectColour = document.getElementById('selectColour');
let showColour = document.getElementById('showColour');
let body = document.getElementsByTagName('body')[0];


function colourChange() {
    let colourName = selectColour.value;
    // console.log(colourName);
    body.style.background = `${colourName}`;
    showColour.innerText = `${colourName}`
}
