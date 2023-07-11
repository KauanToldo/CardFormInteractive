const numberDisplay = document.querySelector("#card-number-display")
const numberCard = document.querySelector("#number")

const nameDisplay = document.querySelector("#card-name-display")
const nameCard = document.querySelector("#name")

const expDateMonthDisplay = document.querySelector("#month")
const expDateYearDisplay = document.querySelector("#year")
const expDateMonthCard = document.querySelector("#expdate-month")
const expDateYearCard = document.querySelector("#expdate-year")

const cvcDisplay = document.querySelector("#card-cvc-display")
const cvcCard = document.querySelector("#cvc-card")

const confirmBtn = document.querySelector("#confirm")
const continueBtn = document.querySelector("#continue-btn")

const form = document.querySelector("form")
const thanks = document.querySelector("#complete-state")

function setCardNumber(number) {
    numberDisplay.innerText = formatNumber(number.target.value)
}

function setCardName(name) {
    nameDisplay.innerText = name.target.value
}

function setCardMonth(month) {
    expDateMonthDisplay.innerText = month.target.value
}

function setCardYear(year) {
    expDateYearDisplay.innerText = year.target.value
}

function setCVC(cvc) {
    cvcDisplay.innerText = cvc.target.value
}

function formatNumber(numberCard) {
    const regex = /(\d{4})/g;
    const result = numberCard.match(regex);
    return result.join(' ')
}

numberCard.addEventListener("keyup", setCardNumber);
nameCard.addEventListener("keyup", setCardName);
expDateMonthCard.addEventListener("keyup", setCardMonth);
expDateYearCard.addEventListener("keyup", setCardYear);
cvcCard.addEventListener("keyup", setCVC);


confirmBtn.addEventListener("click", () => {
    if (!numberCard) {
        console.log("funcionou")
    }
    form.classList.add("hidden")
    thanks.classList.remove("hidden")
})

continueBtn.addEventListener("click", () => {
    thanks.classList.add("hidden")
    form.classList.remove("hidden")
})