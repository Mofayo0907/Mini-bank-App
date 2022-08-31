
var initialAmount = 1000

function withdraw() {
    var balance = Number(collectAmount.value)
    if (balance > initialAmount) {
        spate.innerHTML = "you have insufficient amount"
    }
    else if (balance == "") {
        spate.innerHTML = "input the amount you want to withdraw  "
    }
    else if (initialAmount > balance) {
        initialAmount = initialAmount - balance
        spate.innerHTML = initialAmount
    }
    else if (balance = String) {
        spate.innerHTML = "invalid input"
    }
}


function balance() {
    playR.innerHTML = ` you have  $${initialAmount} left in your account`
    bala.innerHTML = ` Total balance = ${initialAmount}`
}



function deposit() {
    var balance = Number(inputAmount.value)
    if (balance == "") {
        space.innerHTML = "input the amount you want to deposit  "
    }
     else if (balance> 0) {
        initialAmount = initialAmount + balance
        space.innerHTML = initialAmount
    }
    else if (balance = String) {
        space.innerHTML = "invalid input"
    }
    inputAmount.value =""
   

}

function develop() {
    alert("Function is underdevelopment, therefore out of bounds")
}