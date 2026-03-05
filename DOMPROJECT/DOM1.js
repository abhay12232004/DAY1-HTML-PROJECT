const isstatus=document.querySelector("#status");

const add=document.querySelector("#add");

const remove=document.querySelector("#remove");
add.addEventListener("click",function(){
    isstatus.innerHTML ="Friends";
    isstatus.style.color ="Green";
})


remove.addEventListener("click",function(){
    isstatus.innerHTML ="Stranger";
    isstatus.style.color ="Red";
})



