function Response() {
    var fn = document.forms["signup"]["fname"];
    if(fn == ""){
        alert("Enter first name");
        return false;
    }
    alert("Sign up successful");
    return false;
  }
