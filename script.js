function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function div(num1, num2) {
    if (num2 === 0) {
        return "Can't divide by 0"
    }
    return num1 / num2
}

function mul(num1, num2) {
    return num1 * num2
}

let num1 = 0
let num2 = 0
let operator = "+"

function operate(num1, num2, opp) {
    if (opp === "+") {
        return add(num1, num2)
    } else if (opp === "-") {
        return sub(num1, num2)
    } else if (opp === "/") {
        return div(num1, num2)
    } else if (opp === "*") {
        return mul(num1, num2)
    } else {
        console.log("Received opperator we can not process")
    }
}

let screen = 0

function fullClear() {
    num1 = 0
    num2 = 0
    operator = ""
    screen = 0
    document.getElementById("screen").textContent = screen
}

function clearScreen() {
    num1 = Number(screen)
    screen = 0

    document.getElementById("screen").textContent = screen
}

function updateScreen() {
    let num = this.id
    if (screen === 0) {
        screen = num
    }
    else {
        screen = screen + num
    }
    document.getElementById("screen").textContent = screen
}

function opperateBtn() {
    operator = this.id
    num1 = Number(screen)
    clearScreen()
}

function equal() {
    num2 = Number(screen)
    console.log(operate(num1, num2, operator))
    screen = operate(num1, num2, operator)
    document.getElementById("screen").textContent = screen
}

var elements = document.getElementsByClassName("num")

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", updateScreen)
}

var elements = document.getElementsByClassName("opp")

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", opperateBtn)
}
document.getElementById("clear").addEventListener("click", fullClear)
document.getElementById("=").addEventListener("click", equal)
document.getElementById("screen").textContent = screen

console.log(operate(num1, num2, operator))