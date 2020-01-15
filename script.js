var upper = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
var lower = "abcdefghijklmnopqrstuvwyxz";
var special= "!~@#$%^&*()_+<>?/.,=-`/";
var digits = "123456789";
var passwordContents = "";

function generate(){
    let password = "";  
    var userLength = prompt("Please specify a length between 8-128 characters");
    if (userLength <8 || userLength > 128) {
        alert("Please re-enter a value between 8 and 128");
        userLength = prompt("Please specify a length between 8-128 characters");
    } else 
    {var specialChar = confirm("Would you like to use special characters?");
    var numbers = confirm("Would you like to include numbers?");
    var lowerCase = confirm("Would you like to include lowercase letters?");
    var upperCase = confirm("Would you like to include uppercase letters?");

    if (specialChar===true) {
        passwordContents +=specialChar;
    }

    if(numbers===true) {
        passwordContents += digits;
    }

    if(lowerCase === true) {
        passwordContents += lower;
    }

    if(upperCase === true) {
        passwordContests += upper;
    }
    
    console.log(passwordContents);

    for(var i=0; i<=userLength; i++){
        password.length = userLength.valueOf;
    }
}
}

function copy(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("You password has been copied!! Smashing!")
}

