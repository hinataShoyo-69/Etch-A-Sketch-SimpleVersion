let element=document.getElementById("sketch-container");
let isPressed=false;
element.addEventListener("mousedown",()=>{
  isPressed=true;
});
element.addEventListener("mouseup",()=>{isPressed=false;});
element.addEventListener("mousemove",(event)=>{
  isPressed?event.target.style.backgroundColor='red':event.target.style.backgroundColor='white';
});
for(let i=0;i<129364;i++){
  element.appendChild(document.createElement('div'));
}
