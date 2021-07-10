function validateForm() {
    // validate('fname')
    // validate('lname')
    // validatePhoneNumber()
    // console.log(validate('fname'))

    if(validate('fname') && validate('lname') && validatePhoneNumber()) {
        var successDiv = document.getElementById('status-div')
        var p = document.createElement('p')
        p.innerHTML = "Successfully applied for the Job."
        successDiv.appendChild(p)
    } else {
        console.log('error')
    }

}

function validate(id){
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById(id).value;
    console.log(name)
    if(!regName.test(name)){
        console.log('failed')
        document.getElementById(id).focus();
        return false;
    }else{
        return true;
    }
}

function validatePhoneNumber() 
{
    var phone = document.getElementById('phone').value
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
}