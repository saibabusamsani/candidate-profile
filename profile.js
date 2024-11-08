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


//  add  similer cards

const similerCard=document.getElementById("similar-card");

const similerCardList=document.getElementById("similar-card-list");

for(let i=1;i<=5;i++)
{

    const clonedCard = similerCard.cloneNode(true); // Clone the similar-card element
    similerCardList.prepend(clonedCard); // Append the cloned card to the parent
}


const nextStepContainer=document.getElementById("next-step-container");
const nextStep=document.getElementById("next-step");

nextStep.addEventListener("click", () => {
    // Check if the steps div already exists before appending
    let steps = document.querySelector(".steps");

    if (!steps) {
        steps = document.createElement("div");
        nextStepContainer.prepend(steps); // Prepend steps only if it doesn't exist
        steps.classList.add("steps");

        const data = [
            {
                item: "Send Assignment",
                icon: ["fa-regular", "fa-pen-to-square"]
            },
            {
                item: "Schedule interview",
                icon: ["fa-regular", "fa-calendar"]
            },
            {
                item: "Start chart",
                icon: ["fa-regular", "fa-note-sticky"]
            },
            {
                item: "Hire",
                icon: ["fa-regular", "fa-user"]
            }
        ];

        data.forEach((iconInfo) => {
            const iconDiv = document.createElement("div");
            steps.append(iconDiv);

            iconDiv.classList.add("d-flex", "gap-2", "icon-div");

            const icon = document.createElement("i");
            icon.classList.add(...iconInfo.icon);

            const title = document.createElement("p");
            title.textContent = iconInfo.item;
            title.style.fontSize = "13px";
            title.style.fontFamily = "Inter";

            iconDiv.append(icon, title);
        });
    } else {
        steps.remove();
      
    }
});


