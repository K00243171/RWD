/* global document */
function getInputValue() {
      var fName = document.getElementById("FirstName").value;
      var uName = document.getElementById("UserName").value;
      var pass = document.getElementById("Password").value;
      var loginInfo = "Welcome" + fName + ", thank you for joining us! Please use" + uName + pass + " to log in to your new account";
      alert(loginInfo);
            }