const celsiusEl = document.getElementById("celsius")
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")

function computeTemp(event){
    const currentValue = +event.target.value

    switch (event.target.nae) {
        case "celsius":
            kelvinEl.value = (currentValue + 273.32)
            fahrenheitEl.value = (currentValue * 1.8 + 32)
            break;
    
        default:
            break;
    }
}
