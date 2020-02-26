//Programmer: Julio Pagan
//Date: February 25, 2020

function Response(fname, lname, email, pnumber, dob) {
    if(fname.value == ""){
        alert("Enter first name");
        return false;
    }
    if(lname.value == ""){
        alert("Enter last name");
        return false;
    }
    if(email.value == ""){
        alert("Enter email address");
        return false;
    }
    if(pnumber.value == ""){
        alert("Enter phone number");
        return false;
    }
    if(dob.value == ""){
        alert("Enter date of birth");
        return false;
    }

    alert("Sign up successful");
    return true;
  }