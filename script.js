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
 message.classList.add("success"); 
});


//motivational button 
let motivational =document.getElementById("motivation-btn");
let motivationMsg=document.getElementById("motivation-btn-message");
motivational.addEventListener("click",function(){
 showMessage( motivationMsg,"Consistency beats Talent ." );
 


});
 
function createMessage(createName ,createEmail,createMsg)
{
   let  finalMsg= "Thank you "+createName+"! "+" for Connecting with me!\nWe will reply to you at  "+createEmail+"\nYou wrote "+createMsg+" \nMessage sent";
    return finalMsg ; 
}

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
if(name.length<5)
{
  
    showMessage(formMsg,"Please enter a valid name !");
      formMsg.classList.add("error");
    
  return ;
}
else if(mail.length<5)
{
      formMsg.classList.add("error");
     showMessage(formMsg,"Please enter a valid Email !");

    return ;
}
else if (msg.length<10)
{
       formMsg.classList.add("error");
     showMessage(formMsg,"Please enter Minimum 10 Character !");
    return;
}
else 
{
      formMsg.classList.remove("error");
    
      formMsg.classList.add("success");
let text = createMessage(name,mail,msg);
showMessage(  formMsg, text);
   
console.log(name);
console.log(mail);

console.log(msg);
let submitBtn=document.getElementById("submit_btn");
userName.value="";
userEmail.value="";
userMsg.value="";
submitBtn.disabled= true;
}
 
});

function square(num)
{
    let result = num* num ; 
    return result;
}
 console.log(square(5));
// dynamic section of skills with appendChild 
let div= document.getElementById("container");
let skill = [{"name":"HTML","level":80} ,{"name":"Javascript","level":30},{"name":"CSS","level":80},{"name":"ReactJs","level":10}];
for(let i=0; i<skill.length ; i++)
{  
let label= document.createElement("label");
let pro= document.createElement("progress");
 pro.value=skill[i].level ;
 pro.max=100;
 let br= document.createElement("br"); 
 let wrapper= document.createElement("div");
 label.textContent = (i+1) + ". " + skill[i].name + " - " + skill[i].level + "%";
 wrapper.append(label,br, pro);
 div.append(wrapper);   
 wrapper.classList.add("skill-item");
label.classList.add("skill-label");
pro.classList.add("skill-progress");

}
console.log(div);

let skills=["html","css","javascript"]
for(i=0 ; i<skills.length ; i++)
{
 console.log(i+"  "+skills[i]);
}

console.log(skill[0]);
console.log(skill.length );
 skill.push("react.js");
console.log(skill.length);
console.log(skill);


skill.forEach(function(skills)
{
    console.log(skills);
    //array me if use 
if(skills=="react.js")
{
    console.log("yes this is react");
}
 
});