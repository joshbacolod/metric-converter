const lengthBtn = document.querySelector("#length-btn")
const massBtn = document.querySelector("#mass-btn")
const liquidBtn = document.querySelector("#liquid-btn")
const dropdownFrom = document.querySelector(".dropdown-from")
const dropdownTo = document.querySelector(".dropdown-to")
const converterMain = document.querySelector("#converter-main")
const input = document.querySelector("#conversion-value")

let output = document.querySelector("#output")
let convertedValue = ""
// let stepBase = ""
// let stepCount = ""
// let stepTotal = stepBase - stepCount

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

// function convert(baseNumber, secondaryNumber, arg) {
//     switch(arg) {
//         case "direct":
//             val = baseNumber / secondaryNumber
//             convertedValue = val
//             break
//         case "reverse":
//             val = baseNumber * secondaryNumber
//             convertedValue = val
//             break
//     }
// }

// function stepBaseFinder() {
//     if (dropdownFrom.value === "millimeters" || dropdownFrom.value === "milligrams" || dropdownFrom.value === "milliliters") {
//         stepBase = 0
//     } else if (dropdownFrom.value === "centimeters") {
//         stepBase = 1
//     } else if (dropdownFrom.value === "meters" || dropdownFrom.value === "grams" || dropdownFrom.value === "liters") {
//         stepBase = 2
//     } else if (dropdownFrom.value === "kilometers" || dropdownFrom.value === "kilograms")
//         stepBase = 3
// }

// function stepCountFinder() {
//     if (dropdownTo.value === "millimeters" || dropdownTo.value === "milligrams" || dropdownTo.value === "milliliters") {
//         stepCount = 0
//     } else if (dropdownTo.value === "centimeters") {
//         stepCount = 1
//     } else if (dropdownTo.value === "meters" || dropdownTo.value === "grams" || dropdownTo.value === "liters") {
//         stepCount = 2
//     } else if (dropdownTo.value === "kilometers" || dropdownTo.value === "kilograms")
//         stepCount = 3
// }

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

// function conversionDetection() {
//     if (dropdownFrom.value === "millimeters" && dropdownTo.value === "centimeters") {
//         millToCenti(inputValue.value, "direct")
//         output.value = convertedValue
//     } else if (dropdownFrom.value === "millimeters" && dropdownTo.value === "meters") {
//         millToCenti(inputValue.value, "direct")
//         centiToBase(convertedValue, "direct")
//         output.value = convertedValue
//     } else if (dropdownFrom.value === "millimeters" && dropdownTo.value === "kilometers") {
//         millToCenti(inputValue.value, "direct")
//         centiToBase(convertedValue, "direct")
//         baseToKilo(convertedValue, "direct")
//         output.value = convertedValue
//     } else if (dropdownFrom.value === "milligrams" && dropdownTo.value === "grams") {
//         millToCenti(inputValue.value, "direct")
//         centiToBase(convertedValue, "direct")
//         output.value = convertedValue
//     } else if (dropdownFrom.value === "milligrams" && dropdownTo.value === "kilograms") {
//         millToCenti(inputValue.value, "direct")
//         centiToBase(convertedValue, "direct")
//         baseToKilo(convertedValue, "direct")
//         output.value = convertedValue
//     } else if (dropdownFrom.value === "milliliters" && dropdownTo.value === "liters") {
//         millToCenti(inputValue.value, "direct")
//         centiToBase(convertedValue, "direct")
//         output.value = convertedValue
//     } else if (dropdownTo.value === "millimeters" && dropdownFrom.value === "centimeters") {
//         millToCenti(inputValue.value, "reverse")
//         output.value = convertedValue
//     } else if (dropdownTo.value === "millimeters" && dropdownFrom.value === "meters") {
//         millToCenti(inputValue.value, "reverse")
//         centiToBase(convertedValue, "reverse")
//         output.value = convertedValue
//     } else if (dropdownTo.value === "millimeters" && dropdownFrom.value === "kilometers") {
//         millToCenti(inputValue.value, "reverse")
//         centiToBase(convertedValue, "reverse")
//         baseToKilo(convertedValue, "reverse")
//         output.value = convertedValue
//     } else if (dropdownTo.value === "milligrams" && dropdownFrom.value === "grams") {
//         millToCenti(inputValue.value, "reverse")
//         centiToBase(convertedValue, "reverse")
//         output.value = convertedValue
//     } else if (dropdownTo.value === "milligrams" && dropdownFrom.value === "kilograms") {
//         millToCenti(inputValue.value, "reverse")
//         centiToBase(convertedValue, "reverse")
//         baseToKilo(convertedValue, "reverse")
//         output.value = convertedValue
//     } else if (dropdownTo.value === "milliliters" && dropdownFrom.value === "liters") {
//         millToCenti(inputValue.value, "reverse")
//         centiToBase(convertedValue, "reverse")
//         output.value = convertedValue
//     }
// }