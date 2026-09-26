let theme = document.getElementById("Theme");
let count = 0;

let saved = localStorage.getItem("theme");
if (saved === "dark") {
    document.body.classList.add("dark");
    theme.textContent = "☀️ Light Mode";
    count = 1;
} else {
    theme.textContent = "🌙 Dark Mode";
    count = 0;
}

theme.addEventListener("click", function () {
    count = (count + 1) % 2;

    if (count === 1) {
        theme.textContent = "☀️ Light Mode";
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        theme.textContent = "🌙 Dark Mode";
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});
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
    motivationMsg.hidden = false ; 
    let saved = localStorage.getItem("theme");
    if (saved==="dark")
    {
 motivationMsg.classList.add("dark");
    }
    else{
motivationMsg.classList.add("light");
    }
   
    
 showMessage( motivationMsg,"Consistency beats Talent ." );
 


});
 
//Real Time Form Validation 
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
 function errorMsg(element,msgField,msg,minlength)
 {
if(element.value.length< minlength)
    {
       
 msgField.textContent=msg;
      msgField.classList.add("error");
    }
  
     else 
    {  msgField.textContent= "";
        msgField.classList.remove("error");
      
    }
 } 

 
userName.addEventListener("input", function(){
let nameError= document.getElementById("nameMsg");
    errorMsg(userName,nameError,"Please enter at least 5 characters!",5);
});




function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

userEmail.addEventListener("input", function() {
    let mailError = document.getElementById("mailMsg");

    
    if (userEmail.value.length <= 5) {
        mailError.textContent = "Please enter at least 5 characters";
        mailError.classList.add("error");
        return;
    }

   
    let valid = isValidEmail(userEmail.value);

    if (!valid) {
        mailError.textContent = "Please include @ and . (dot) in your email";
        mailError.classList.add("error");
    } else {
        mailError.textContent = "";
        mailError.classList.remove("error");
    }
});
userMsg.addEventListener("input", function(){
     let msgError= document.getElementById("userMsg");
  errorMsg(userMsg,msgError,"plz enter greater then 10 Character in Message Box  !",10);
});


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
let skill = [ {
        name: "HTML",
        level: 80,
        getStatus: function() {
            if (this.level >= 80) return "Expert";
            else if (this.level >= 50) return "Intermediate";
            else return "Beginner";
        }
    },
     {"name":"Javascript","level":30 , getStatus: function() {
            if (this.level >= 80) return "Expert";
            else if (this.level >= 50) return "Intermediate";
            else return "Beginner";
        }},
     {"name":"CSS","level":80 , getStatus: function() {
            if (this.level >= 80) return "Expert";
            else if (this.level >= 50) return "Intermediate";
            else return "Beginner";
        }},
     {"name":"ReactJs","level":10 , getStatus: function() {
            if (this.level >= 80) return "Expert";
            else if (this.level >= 50) return "Intermediate";
            else return "Beginner";
        }}];
     

for(let i=0; i<skill.length ; i++)
{  
let label= document.createElement("label");
let pro= document.createElement("progress");
 pro.value=skill[i].level ;
 pro.max=100;

   label.textContent = (i+1) + ". " + skill[i].name + " - " + skill[i].level + "%"+" - "+skill[i].getStatus();
 let br= document.createElement("br"); 
 let wrapper= document.createElement("div");
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

let projectArray = [
    {
        title: "Personal Portfolio Website",
        description: "A responsive personal portfolio built with HTML, CSS and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://self-websitecreation.github.io/Portfolio/"
    }
];

let container = document.getElementById("project_container");

projectArray.forEach(function(project) {
    

    let card = document.createElement("div");
    card.classList.add("project-card");

    
    let title = document.createElement("h3");
    title.textContent = project.title;

    // Description
    let desc = document.createElement("p");
    desc.textContent = project.description;

    // Technologies
    let tech = document.createElement("p");
    tech.textContent = "Technologies: " + project.tech.join(", ");

    // Link
    let link = document.createElement("a");
    link.href = project.link;
    link.textContent = "View Project";
    link.target = "_blank";

   
    card.append(title, desc, tech, link);
    container.append(card);
});
