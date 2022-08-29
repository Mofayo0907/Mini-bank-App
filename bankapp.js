


const login = () => {

var aNumber = accountnumber.value
var  pword = password.value
var allMembers =JSON.parse(localStorage.getItem("saveBankDetails"))
var verifyUser = false
  for (let index = 0; index < allMembers.length; index++) {
    if (allMembers[index].eMail == aNumber && allMembers[index].password == pword) {
    accountnumber.value = ""
      password.value =" "
      verifyUser = true
      break;
    }
  }
  if(verifyUser==true){
    alert("user found")
    window.location.href = "accountnumber.html"
  }else{
    alert("user not found")
  }
}   

//     if ((aNumber = accountnumber.value) && (pword = password.value)){

//     aNumber.value = ""
//     password.value = ""
    


// // console.log(newCustomer)
// }

