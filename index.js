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
        case "fahrenheit":
         celsiusEl.value = ((currentValue - 32) / 1.8)
         kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32)
         break;
         case "kelvin":
            celsiusEl.value = (currentValue - 273.32)
            fahrenheitEl.value = ((value - 273.32) *1.8 + 32)
            break;
        default:
            break;
    }
}
