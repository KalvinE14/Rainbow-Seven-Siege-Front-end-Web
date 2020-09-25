function validateForm()
{
    var fullname1;
    var fullname2;
    var username;
    var email;
    var password;
    var numberCopies;
    var gameType
    var agreement;

    var text;

    var successCount = 0;

    fullname1 = document.getElementById("fullnameInput1").value;
    fullname2 = document.getElementById("fullnameInput2").value;
    username = document.getElementById("usernameInput").value;
    email = document.getElementById("emailInput").value;
    password = document.getElementById("passwordInput").value;
    numberCopies = document.getElementById("numberCopiesInput").value;
    gameType = document.getElementById("gameTypeInput").value;
    agreement = document.getElementById("agreementInput");

    
    if((fullname1 == "" || fullname2 == ""))
    {
        document.getElementById("fullnameMessage").style.display = "block";
        text = "first name and last name must be filled";
        // document.write('<br/>');
        document.getElementById("fullnameMessage").innerHTML = text;
        
    }else if(fullname1.length < 3 || fullname2.length < 3)
    {
        document.getElementById("fullnameMessage").style.display = "block";
        text = "first name and last name must be more than 2 words";
        document.getElementById("fullnameMessage").innerHTML = text;
    }else
    {
        document.getElementById("fullnameMessage").style.display = "none";
        successCount++;
    }

    if(username == "")
    {
        document.getElementById("usernameMessage").style.display = "block";
        text = "this field can not be empty";
        document.getElementById("usernameMessage").innerHTML = text;
    }else if(username.length < 5)
    {
        document.getElementById("usernameMessage").style.display = "block";
        text = "username length must more than 4";
        document.getElementById("usernameMessage").innerHTML = text;
    }else
    {
        document.getElementById("usernameMessage").style.display = "none";
        successCount++;
    }

    if(email == "")
    {
        document.getElementById("emailMessage").style.display = "block";
        text = "this field can not be empty";
        document.getElementById("emailMessage").innerHTML = text;
    }else if(!email.includes('@'))
    {
        document.getElementById("emailMessage").style.display = "block";
        text = "invalid email address";
        document.getElementById("emailMessage").innerHTML = text;
    }else
    {
        document.getElementById("emailMessage").style.display = "none";
        successCount++;
    }

    if(password == "")
    {
        document.getElementById("passwordMessage").style.display = "block";
        text = "this field can not be empty";
        document.getElementById("passwordMessage").innerHTML = text;
    }else if(password.length < 8)
    {
        document.getElementById("passwordMessage").style.display = "block";
        text = "password should be at least 8 characters long";
        document.getElementById("passwordMessage").innerHTML = text;
    }else
    {
        var flagNumber = 0;
        var flagUpperCase = 0;
        var flagLowerCase = 0;
        for (var i = 0; i < password.length; i++) {
            if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
            {
                flagNumber++;
            }

            if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)
            {
                flagUpperCase++;
            }

            if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
            {
                flagLowerCase++;
            }
            
        }

        if(flagNumber == 0 || flagUpperCase == 0 || flagLowerCase == 0)
        {
            document.getElementById("passwordMessage").style.display = "block";
            text = "password should have at least one uppercase, one lowercase, and 1 number";
            document.getElementById("passwordMessage").innerHTML = text;
        }else{
            document.getElementById("passwordMessage").style.display = "none";
            successCount++;
        }
    }
   
    if(numberCopies == "")
    {
        document.getElementById("numberCopiesMessage").style.display = "block";
        text = "this field can not be empty";
        document.getElementById("numberCopiesMessage").innerHTML = text;
    }else if(isNaN(numberCopies))
    {
        document.getElementById("numberCopiesMessage").style.display = "block";
        text = "this field should be filled by number";
        document.getElementById("numberCopiesMessage").innerHTML = text;
    }else if(numberCopies <= 0)
    {
        document.getElementById("numberCopiesMessage").style.display = "block";
        text = "copies number must more than 0";
        document.getElementById("numberCopiesMessage").innerHTML = text;
    }else
    {
        document.getElementById("numberCopiesMessage").style.display = "none";
        successCount++;
    }

    if(gameType == "")
    {
        document.getElementById("gameTypeMessage").style.display = "block";
        text = "this field can not be empty";
        document.getElementById("gameTypeMessage").innerHTML = text;
    }else if(gameType.match("Premium") || gameType.match("Standard") || gameType.match("Deluxe"))
    {
        document.getElementById("gameTypeMessage").style.display = "none";
        successCount++;
        
    }else
    {
        document.getElementById("gameTypeMessage").style.display = "block";
        text = "game type should be Premium, Standard, or Deluxe";
        document.getElementById("gameTypeMessage").innerHTML = text;
    }

    if(agreement.checked == false)
    {
        document.getElementById("agreementMessage").style.display = "block";
        text = "you must agree to the terms of the Ubipost Subscriber Agreement to complete the pre-order";
        document.getElementById("agreementMessage").innerHTML = text;
    }else
    {
        document.getElementById("agreementMessage").style.display = "none";
        successCount++;
    }


    if(successCount == 7)
    {
        alert("Pre-Order Success!");
    }
} 
