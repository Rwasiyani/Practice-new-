tn = document.getElementsByTagName('div')
//console.log(tn)

createElement = document.createElement('p')
createElement.innerText = "This is a Para"
// tn[0].appendChild(createElement)

createElement2 = document.createElement('b')
createElement2.innerText = "This is a Bold"
tn[0].appendChild(createElement2)

//tn[0].replaceChild(createElement2, createElement)
tn[0].removeChild(createElement2)

let elemClass = document.getElementsByClassName('container')
// elemClass[0].classList.add("adding")
for(let i=0;i<elemClass.length;i++){
    elemClass[i].classList.add("adding")
    //console.log(elemClass[i].innerHTML)
    //console.log(elemClass[i].innerText)
}

//ln = document.getElementsByTagName('button')
ln = document.getElementsByName("but")
// console.log(ln)

sel = document.querySelectorAll('.firstContainer')
// console.log(sel)

logIn = ()=>{
    document.getElementById('secondContainer').innerHTML = "<b>This is a Next Text</b>"
    console.log("Hello World")
}
//setInterval(logIn, 2000)

let counter = 0
function call(){
    document.getElementById('ii').innerHTML = "Hello Azim"+counter
    counter ++;
}

