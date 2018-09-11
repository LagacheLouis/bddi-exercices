let input = document.getElementById("input");
let list = document.getElementById("list");

function createLi(){
  let li = document.createElement("li");
  li.innerHTML = input.value;
  return li;
}

document.getElementById("btn1").addEventListener('click',()=>{
  list.append(createLi());
})

document.getElementById("btn2").addEventListener('click',()=>{
  list.prepend(createLi());
})

document.getElementById("btn3").addEventListener('click',()=>{
  if(list.firstChild != null)
    list.removeChild(list.firstChild)
})

document.getElementById("btn4").addEventListener('click',()=>{
  if(list.lastChild != null)
    list.removeChild(list.lastChild)
})
