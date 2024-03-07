
//Body  y h1
export const dom = document.querySelector('body')
const h1 = document.createElement('h1')
h1.append('Mi Calculadora!')



const divCalculadora = document.createElement('div')
divCalculadora.id = 'divCalculadora'

const divCalculadoraSuperior = document.createElement("div");
const divScreen = document.createElement('div')
divScreen.id = "divScreen";
divCalculadoraSuperior.id = "divCalculadoraSuperior";
divCalculadoraSuperior.append(divScreen)

const divCalculadoraInferior = document.createElement("div");
const divCalculadoraInferiorIzquierdo = document.createElement("div");
const divNumbers = document.createElement("div");
divCalculadoraInferiorIzquierdo.append(divNumbers)

const divCalculadoraInferiorDerecho = document.createElement("div");
const divOperators = document.createElement("div");
const divSimbols = document.createElement("div");
divCalculadoraInferiorDerecho.append(divOperators, divSimbols)

divCalculadora.append( divCalculadoraSuperior, divCalculadoraInferior )

dom.append(h1, divCalculadora);


for (let i = 0; i < 10; i++) {

    const divNumber = document.createElement('div')
    divNumber.classList.add('divNumber')
    divNumber.id = `divNumber#${i}`

}



