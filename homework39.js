function button(){
  document.getElementById("div")
}
const cont=document.querySelectorAll('div');
console.log(cont);

cont.forEach((Element)=>{
  Element.onclick = ('button') 
  Element.style.background= "red"
  Element.style.background= "green"
})

