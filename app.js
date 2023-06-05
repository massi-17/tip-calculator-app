let bill = document.getElementById('bill')
let buttons = document.querySelectorAll('.button')
let buttonArea = document.querySelector('.buttons')
let peopleQty = document.getElementById('people-num')
let tipTotal = document.querySelector('.total-tip')
let total = document.querySelector('.total')
let currentBill 
let currentTip
let currentPeople
bill.addEventListener('input', e => {
    currentBill = parseFloat(e.target.value)
    getTotal(currentBill, currentTip, currentPeople)    
})
buttons.forEach(button => {
    button.addEventListener('click', e => {
        button.classList.add('active')
            buttonArea.style.pointerEvents = 'none'; 
            currentTip = parseFloat(e.target.dataset.tip) 
            getTotal(currentBill, currentTip, currentPeople)
    })
})
peopleQty.addEventListener('input', e => {
    currentPeople = parseFloat(e.target.value) 
    getTotal(currentBill, currentTip, currentPeople)    
})
let tipAmount = document.querySelector('.total-tip')
let totalPerson = document.querySelector('.total')
let tipAmountCounter
let totalPersonCounter
function getTotal(bill, tip, people) {
    if (bill !== undefined && tip !== undefined && people !== undefined) {
        tipAmountCounter = (bill * tip / 100) / people
        totalPersonCounter = (bill + (bill * tip / 100)) / people;

    console.log('tip amount ' + tipAmountCounter + 'total ' + totalPersonCounter)
    tipAmount.innerHTML = `$${Math.round(tipAmountCounter * 100) / 100}`
    totalPerson.innerHTML = `$${Math.round(totalPersonCounter * 100) / 100}`
    }
}
const resetBtn = document.getElementById('reset')
let billInput = document.getElementById('bill')
resetBtn.addEventListener('click', e => {
    e.preventDefault()
    location.reload();
})
