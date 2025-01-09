const lengthBtn = document.querySelector("#length-btn")
const massBtn = document.querySelector("#mass-btn")
const liquidBtn = document.querySelector("#liquid-btn")
const dropdownFrom = document.querySelector(".dropdown-from")
const dropdownTo = document.querySelector(".dropdown-to")
const converterMain = document.querySelector("#converter-main")
const input = document.querySelector("#conversion-value")

let output = document.querySelector("#output")
let convertedValue = ""

const lengthUnits = `                
    <option value="milli">Millimeters</option>
    <option value="centi">Centimeters</option>
    <option value="base">Meters</option>
    <option value="kilo">Kilometers</option>
`

const massUnits = `
    <option value="milli">Milligrams</option>
    <option value="base">Grams</option>
    <option value="kilo">Kilograms</option>
`

const liquidUnits = `
    <option value="milli">Milliters</option>
    <option value="base">Liters</option>
`

input.addEventListener("keyup", () => {
    convert()
})

dropdownFrom.addEventListener("change", () => {
    convert()
})

dropdownTo.addEventListener("change", () => {
    convert()
})

function renderUnits(units) {
    dropdownFrom.innerHTML = units
    dropdownTo.innerHTML = units
}

function conversionType(type) {
    converterMain.style.display = "flex"
    switch(type) {
        case "length":
            buttonActive("length")
            renderUnits(lengthUnits)
            break
        case "mass":
            buttonActive("mass")
            renderUnits(massUnits)
            break
        case "liquid":
            buttonActive("liquid")
            renderUnits(liquidUnits)
            break
    }
}

function reset() {
    lengthBtn.classList.remove("button-active")
    massBtn.classList.remove("button-active")
    liquidBtn.classList.remove("button-active")
    input.value = 0
    output.value = 0
}

function buttonActive(type) {
    reset()
    switch(type) {
        case "length":
            lengthBtn.classList.add("button-active")
            break
        case "mass":
            massBtn.classList.add("button-active")
            break
        case "liquid":
            liquidBtn.classList.add("button-active")
            break
    }
}

function renderOutput() {
    output.value = convertedValue
}

function convert() {
    let convertTo = dropdownTo.value
    let inputValue = input.value
    switch(dropdownFrom.value) {
        case "base":
            if (convertTo === "milli") {
                centiToBase(inputValue, "reverse")
                millToCenti(convertedValue, "reverse")
                renderOutput()
            } else if (convertTo === "centi") {
                centiToBase(inputValue, "reverse")
                renderOutput()
            } else if (convertTo === "kilo") {
                baseToKilo(inputValue, "direct")
                renderOutput()
            } else {
                output.value = inputValue
            }
            break
        case "milli":
            if (convertTo === "centi") {
                millToCenti(inputValue, "direct")
                renderOutput()
            } else if (convertTo === "base") {
                millToCenti(inputValue, "direct")
                centiToBase(convertedValue, "direct")
                renderOutput()
            } else if (convertTo === "kilo") {
                millToCenti(inputValue, "direct")
                centiToBase(convertedValue, "direct")
                baseToKilo(convertedValue, "direct")
                renderOutput()
            } else {
                output.value = inputValue
            }
            break
        case "centi":
            if (convertTo === "milli") {
                millToCenti(inputValue, "reverse")
                renderOutput()
            } else if (convertTo === "base") {
                centiToBase(inputValue, "direct")
                renderOutput()
            } else if (convertTo === "kilo") {
                centiToBase(inputValue, "direct")
                baseToKilo(convertedValue, "direct")
                renderOutput()
            } else {
                output.value = inputValue
            }
            break 
        case "kilo": 
            if (convertTo === "base") {
                baseToKilo(inputValue, "reverse")
                renderOutput()
            } else if (convertTo === "centi") {
                centiToBase(inputValue, "reverse")
                baseToKilo(convertedValue, "reverse")
                renderOutput()
            } else if (convertTo === "milli") {
                millToCenti(inputValue, "reverse")
                centiToBase(convertedValue, "reverse")
                baseToKilo(convertedValue, "reverse")
                renderOutput() 
            } else {
                output.value = inputValue
            }
    }
}

function millToCenti(number, arg) {
    let val = ""
    switch(arg) {
        case "direct":
            val = number / 10
            convertedValue = val
            break
        case "reverse":
            val = number * 10
            convertedValue = val
            break
    }
}

function centiToBase(number, arg) {
    let val = ""
    switch(arg) {
        case "direct":
            val = number / 100
            convertedValue = val
            break
        case "reverse":
            val = number * 100
            convertedValue = val
            break
    }
}

function baseToKilo(number, arg) {
    let val = ""
    switch(arg) {
        case "direct":
            val = number / 1000
            convertedValue = val
            break
        case "reverse":
            val = number * 1000
            convertedValue = val
            break
    }
}
