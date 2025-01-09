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
    <option value="millimeters">Millimeters</option>
    <option value="centimeters">Centimeters</option>
    <option value="meters">Meters</option>
    <option value="kilometers">Kilometers</option>
`

const massUnits = `
    <option value="milligrams">Milligrams</option>
    <option value="grams">Grams</option>
    <option value="kilograms">Kilograms</option>
`

const liquidUnits = `
    <option value="milliliters">Milliters</option>
    <option value="liters">Liters</option>
`

document.addEventListener("click", () => {
    convertUnit()
})

function renderUnits(units) {
    dropdownFrom.innerHTML = units
    dropdownTo.innerHTML = units
}

function conversionType(type) {
    converterMain.style.display = "flex"
    switch (type){
        case "length":
            renderUnits(lengthUnits)
            break
        case "mass":
            renderUnits(massUnits)
            break
        case "liquid":
            renderUnits(liquidUnits)
            break
    }
}

function convertUnit() {
    let convertTo = dropdownTo.value
    let inputValue = input.value
    switch(dropdownFrom.value) {
        case "milliliters":
            if (convertTo === "liters") {
                millToCenti(inputValue, "direct")
                centiToBase(convertedValue, "direct")
                output.value = convertedValue
            } else {
                output.value = inputValue
            }
            break
        case "liters":
            if (convertTo === "milliliters") {
                millToCenti(inputValue, "reverse")
                centiToBase(convertedValue, "reverse")
                output.value = convertedValue
            } else {
                output.value = inputValue
            }
            break
    }
}

function millToCenti(number, arg) {
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
