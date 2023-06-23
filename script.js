const slide_one = document.getElementById("slide_one");

const slide_two = document.getElementById("slide_two");

const slide_three = document.getElementById("slide_three");

const btn = document.querySelectorAll('.all_btns button');
console.log(btn);

const box = document.querySelector(".hide_box");

const close_icon = document.getElementById("close_icon");
console.log(close_icon)

function close(){
  box.style.display = "none";
}
function open(){
  box.style.display = "block";
}

// to select a button from a container
for(let i=0;i < btn.length; i++){
  btn[i].addEventListener('click',open);
  close_icon.addEventListener('click',close);
}

document.addEventListener('keydown',(event)=>{
  console.log(event);
  if(event.key === "Escape" && (box.style.display === "block")){
    close();
  }
})

document.addEventListener('click',(event)=>{
  console.log(event);
  if(event.target.classList.view_box("hide_box")){
    close();
  }
})