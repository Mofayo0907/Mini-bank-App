
var initialAmount = 1000

function withdraw() {
    var balance = Number(inputAmount.value)
    if (balance > initialAmount) {
        space.innerHTML = "you have insufficient amount"
    }
    else if (balance == "") {
        space.innerHTML = "input the amount you want to withdraw  "
    }
    else if (initialAmount > balance) {
        initialAmount = initialAmount - balance
        space.innerHTML = initialAmount
    }
    else if (balance = String) {
        space.innerHTML = "invalid input"
    }
}


function balance() {
    space.innerHTML = ` you have  $${initialAmount} left in your account`
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
   

}

function develop() {
    alert("Function is underdevelopment, therefore out of bounds")
}