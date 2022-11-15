function validate() {
    var user = document.getElementById('username').value ;
    var pass = document.getElementById('password').value ;
    var conPass = document.getElementById('confirm').value ;
    var email = document.getElementById('email').value ;

    if(user == ""){
        document.getElementById('show-username').innerHTML = "** Username field cannot be empty! **";
        return false;
    }
    if(user.length <= 2 || !isNaN(user))  {
        document.getElementById('show-username').innerHTML = "** Enter Valid username**";
        return false;
    }
    

    if(pass == ""){
        document.getElementById('show-pass').innerHTML = "** PASSWORD field cannot be empty! **";
        return false;
    }
    if(pass.length < 8 || pass.length > 16){
        document.getElementById('show-pass').innerHTML = "** PASSWORD  must be from 8 to 16 characters! **";
        return false;
    }

    if(conPass == ""){
        document.getElementById('show-confirmPass').innerHTML = "** Confirm the Password First! **";
        return false;
    }
        if(pass != conPass){
            document.getElementById('show-confirmPass').innerHTML = "** Passwords donot match! **";
        return false;
        }
    
    if(email == ""){
        document.getElementById('show-email').innerHTML = "** email field cannot be empty ! **";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('show-email').innerHTML = "** invalid email ! **";
        return false;
    }
    if((email.charAt(email.length-4 != '.')) &&
    (email.charAt(email.length-3) != '.')){
        document.getElementById('show-email').innerHTML = "**Invalid email**";
        return false;
    }
}