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