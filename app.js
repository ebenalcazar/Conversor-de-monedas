'use strict';


const inputCantidad = document.getElementById('cantidad');
const tipoDeCambio = document.getElementById('tipoDeCambio');
const resultado = document.getElementById('resultado');







const calculoDeMoneda = () =>{
    switch (tipoDeCambio.value){
    case 'usd':
        resultado.textContent = inputCantidad.value * 148;
        break;
    case 'mxn':
        resultado.textContent = inputCantidad.value * 0.21;
        break;
    case 'col':
        resultado.textContent = inputCantidad.value * 39.78;
        break;
    case 'pen':
        resultado.textContent = inputCantidad.value * 0.040;
        break;
    default:
        resultado = "";
    }
    }
