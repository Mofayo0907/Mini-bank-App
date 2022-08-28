

var allMembers = []
if (localStorage.saveBankDetails) {
    allMembers = JSON.parse(localStorage.getItem("saveBankDetails"))
}
const signUp = () => {
    registeredStudents = {
        fName: firstName.value,
        lName: lastName.value,
        eMail: email.value,
        password: passWord.value

    }
    if (firstName.value != "") {
        console.log(allMembers)
         window.location.href = "accountnumber.html", allMembers.push(registeredStudents)
        firstName.value = "", lastName.value = "", email.value  = "", passWord.value = ""
           alert("saved")

    }
    else {
        alert("input the following  info")
    }
    localStorage.setItem("saveBankDetails", JSON.stringify(allMembers))
}

