// hire me button 
let hireMe= document.getElementById("hire-me");
let message = document.getElementById("hire-me-message");
function showMessage(element ,text )
{
    element.textContent=text ;
     
}
hireMe.addEventListener("click", function ()
{
 showMessage(message ,"Thank you! Please fill the contact form below.");
});

//motivational button 
let motivational =document.getElementById("motivation-btn");
let motivationMsg=document.getElementById("motivation-btn-message");
motivational.addEventListener("click",function(){
 showMessage( motivationMsg,"Consistency beats Talent ." );
});
 
let userName=document.getElementById("name");
let userEmail=document.getElementById("email");
let userMsg= document.getElementById("message");
let formMsg=document.getElementById("form_msg");
let form=document.getElementById("contactForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
  let name=userName.value; 
  let mail=userEmail.value;
let msg=userMsg.value;
showMessage(  formMsg,"Thank you "+name+"! "+" for Connecting with me!\nWe will reply to you at  "+mail+"\nYou wrote "+msg+" \nMessage sent" );
   
console.log(name);
console.log(mail);

console.log(msg);
let submitBtn=document.getElementById("submit_btn");
userName.value="";
userEmail.value="";
userMsg.value="";
submitBtn.disabled= true;
});
