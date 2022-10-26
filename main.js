//DOM document object model

/*
let nombre=document.querySelector('#texto')
let email=document.querySelector('#email')
let edad=document.querySelector('#edad')

si coloco 
 email.value ----->  el value me retornará conidelfino@gmail.com
 nombre.value ------> el value me retornara constanza*/

const hex=[0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"]
let btn=document.querySelector('#btn')
let body=document.querySelector('body')
let colorname = document.querySelector('#colorname')


const obtengoNumero = () => {
    
    return Math.floor(Math.random() * hex.length)
}


const cambiaColor = () => {
    let hexcolor= '#'
    for (let i=0 ; i < 6 ; i++){
    hexcolor=hexcolor+hex[obtengoNumero()]
    console.log(hexcolor)
    }

    body.style.backgroundColor = hexcolor        
    colorname.innerHTML = hexcolor
}

btn.addEventListener('click',cambiaColor)

//let resultado = Math.random() * 100 Me muestra nun random del 1 al 100

