const isstatus=document.querySelector("#status");

const add=document.querySelector("#add");

let flag =0 ;

add.addEventListener("click",()=>{
    if(flag == 0){

   
    isstatus.innerText = "Stranger";
    isstatus.style.color = "Red";
    add.innerHTML="follow";
    flag=flag +1;
    }
    else{
        isstatus.innerText = "Friends";
        isstatus.style.color = "Green";
        add.innerHTML="Unfollow";
        flag = 0;

    }
})






