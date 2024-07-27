function validate() {
  var username = document.getElementById("uname");
  var password = document.getElementById("pass");
  console.log(password);

  if (username.value.trim()=== "" || username.value.length < 5 || password.value.trim() === "" || password.value.length < 10) {
    alert("username or password must contain more than 10 letters ");
    return false;
  }
  else{
    return true;
  }
  
}
