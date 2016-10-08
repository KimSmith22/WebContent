var fname = prompt("Please enter your first name: ");
if(fname.length < 2){//if statement
  while(fname.length < 2);
  alert("Invalid entry, try again")
  fname = prompt("Please enter your first name: ");
}else{//else statement
  var lname = prompt("Enter your last name:  ");
if(lname.length < 2){
  while(lname.length < 2);
  alert("Invalid entry, try again")
  lname = prompt("Enter your last name:  ");
}//end if
}//end else
var address = prompt("Enter address");
var city = prompt("Enter city:  ");
var state = prompt("Enter state: ");
var zip = prompt("Enter zip code: ");
var phone = prompt("Enter phone number:  ");
if(phone.length < 10){
  while(phone.length < 2);
  alert("Not enough numbers, try again")
  phone = prompt("Enter phone number:  ");
}
