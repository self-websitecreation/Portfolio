let hireMe= document.getElementById("hire-me");
let message = document.getElementById("hire-me-message");
hireMe.addEventListener("click", function ()
{
    message.textContent="Thank you! Please fill the contact form below.";
});
let motivational =document.getElementById("motivation-btn");
let motivationMsg=document.getElementById("motivation-btn-message");
motivational.addEventListener("click",function(){
motivationMsg.textContent="Consistency beats Talent .";
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
    formMsg.innerHTML= "Thank you "+name+"!"+"for Connecting with me !<br>We will reply to you at "+mail+"<br>Message sent"; 
console.log(name);
console.log(mail);
let msg=userMsg.value;
console.log(msg);
let submitBtn=document.getElementById("submit_btn");
userName.value="";
userEmail.value="";
userMsg.value="";
submitBtn.disabled= true;
});
