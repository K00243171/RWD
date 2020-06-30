function getInputValue(){
      var fName = document.getElementById("FirstName").innerHTML;
      var lName = document.getElementById("LastName").innerHTML;
      var uName = document.getElementById("UserName").innerHTML;
      var pass = document.getElementById("Password").innerHTML;
      var name = fName + lName;
      var loginInfo = uName + pass;
      alert("Welcome" + name + ", thank you for joining us! Please use" + loginInfo + " to log in to your new account");
            }