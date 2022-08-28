
allMembers = []
// if(localStorage.allMembers){
// //    allMembers = localStorage.getItem(JSON.stringify("savaBankDetails"))
// }
const signUp =()=>{
registeredStudents = {
    fName: firstName.value,
    lName: lastName.value,
    eMail: email.value,
    password: passWord.value,

}

firstName.value == ""
 if(firstName.value != "" ){
 
    allMembers.push(registeredStudents.fName)
    console.log(allMembers)
    alert("saved")



 }
else{
    alert("input the following  info")
}


   localStorage.setItem("savaBankDetails", JSON.stringify(allMembers))
}

