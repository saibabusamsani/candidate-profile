const iconsList=document.createElement("div");
iconsList.classList.add("d-flex","gap-4");
const iconClasses=[{icon:"fas fa-shopping-bag",info:"1 yrs 0 m"},{icon:"fa-solid fa-wallet",info:"12.5lacs"},{icon:"fa-solid fa-location-dot",info:"Hyderabad"}];

for(let i=0;i<3;i++)
{
    const item=document.createElement("div");
    item.classList.add("d-flex","gap-2","icon-item");
    
    const icon=document.createElement("i");
    icon.classList.add("mt-1")

    const classNames=iconClasses[i].icon.split(" ");
    icon.classList.add(...classNames);

    const info=document.createElement("p");
    info.classList.add("info");
    info.textContent=iconClasses[i].info;

    item.append(icon,info)
    iconsList.append(item);
}

const parent=document.getElementById("content");
const ref=parent.children[1];

parent.insertBefore(iconsList, ref);

