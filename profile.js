const skillsCOntainer=document.getElementById("skill-container");

const skills=["Java","Mysql","React js","Spring boot","Oracle"];


skills.forEach((skill)=>{
   const p= document.createElement("p");
   p.classList.add("skill")
   p.textContent=skill;
   skillsCOntainer.append(p);
})


//  profile Operating

// cv.style.display = "none";

function showCV(num)
{
    
const container=document.getElementById("profile-container");
const profile=document.getElementById("profile");
const cv=document.getElementById("cv");
if(num===2)
{
    profile.style.display="none";
    cv.style.display="block"

}
else {
    profile.style.display="block";
    cv.style.display="none"
}

}
