function getPassword(){
  var Usrname=document.getElementById("usrname").value;
var password=document.getElementById("psw").value;  
//var pswlength=password.length;
//document.getElementById("passwordDescription").innerHTML=pswlength;
document.getElementById("message").style.display="block";
 document.getElementById("progressbar").style.display="block"; 
  var score=0;
  if(CheckUpperCase(password))score++;
  if(CheckLowerCase(password))score++;
  if(CheckNumber(password))score++;
  if(CheckSymbol(password))score++;
  CheckPasswordStrength(score);
  CheckLength(password.length);
  //console.log(password.length);
}

let  CheckUpperCase = function (password){
   if  ( password.match(/[A-Z]/)  ){
     capital.classList.remove("invalid");
    capital.classList.add("valid");
     return true;
    //password_strength++;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    return false;
  }
}
 let CheckLowerCase=function(password){
   if(password.match(/[a-z]/))  {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    //password_strength++;
     return true;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    return false;
  }
 }
 let CheckNumber=function(password){
   if (password.match(/[0-9]/g)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
     return true;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    return false;
  }
 }
 let CheckSymbol=function(password){
   var symbols =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
   if (password.match(symbols)) {  
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
     return true;
    //password_strength++;
  } else {
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
    return false;
  }
 }
 let CheckLength=function(pswlength){
   if(pswlength>=6 && pswlength<=12)
     { 
       console.log(pswlength);
      passlength.classList.add("valid");
   passlength.classList.remove("invalid");
  } else {
    passlength.classList.remove("valid");
    passlength.classList.add("invalid");
  }
 }
function CheckPasswordStrength(score){
  //this.score=score;
  console.log(score);
  const desc =[];
        desc[0] = "No input";
        desc[1] = "Weak";
        desc[2] = "Better";
        desc[3] = "Good";
        desc[4] = "Strong";
        //desc[4] = 
        const meter = [];
        meter[0] = "0%";
        meter[1] = "25%";
        meter[2] = "50%";
        meter[3] = "75%";
        meter[4] = "100%"
//document.getElementById("progressbar").style.display="block";
document.getElementById("passwordDescription").innerHTML = desc[score];
document.getElementById("passwordDescription").className = "strength" + score;
  document.getElementById("progressbarIn").style.width=meter[score];
document.getElementById("progressbarIn").innerHTML = meter[score];
  }