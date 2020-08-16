'use strict'

const btn = document.querySelector(".btn");
btn.addEventListener("click",btnclick);

function btnclick() {
  if(btn.innerHTML === "btn")
  {
    btn.innerHTML=`
    btn
    <div id="box">
    이런건 어떡하면 만들수 있지?
    </div>
    `
  }
  else{
    btn.innerHTML="btn";
  }
}