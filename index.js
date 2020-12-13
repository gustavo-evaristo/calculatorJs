let displayBottom = document.querySelector('.display-bottom p')

let displayTop = document.querySelector('.display-top p')

function addToDisplay(num){
   displayBottom.innerText = displayBottom.innerText + num
}

function clearDisplay(){
    displayBottom.innerText = null
    displayTop.innerText = null
}

function addSum(){
    displayTop.innerText = displayBottom.innerText + ' +'
    displayBottom.innerText = null
}

function addSubtraction(){
    displayTop.innerText = displayBottom.innerText + ' -'
    displayBottom.innerText = null
}

function addDivision(){
    displayTop.innerText = displayBottom.innerText + ' /'
    displayBottom.innerText = null
}
function addMultiplication(){
    displayTop.innerText = displayBottom.innerText + ' x'
    displayBottom.innerText = null
}

function result(){
    displayTop.innerText = displayTop.innerText + ' ' + displayBottom.innerText

    let result = displayTop.innerText.split(' ')

    let n1 = Number(result[0])
    let n2 = Number(result[2])
    let operator = result[1]

    
    if(operator === '+'){
        return displayBottom.innerText = n1 + n2
    }

    if(operator === '-'){
        return displayBottom.innerText = n1 - n2
    }
    
    if(operator === '/'){
        return displayBottom.innerText = n1 / n2
    }
    
    if(operator === 'x'){
        return displayBottom.innerText = n1 * n2
    }      
}