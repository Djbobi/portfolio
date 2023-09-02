const dark=document.getElementById('sun');
const main=document.querySelector(".main");
const first=document.querySelector("#first");
const second=document.querySelector("#second");
const third=document.querySelector("#third");
dark.addEventListener("click",function(){
    main.classList.add("active")
})
const about=document.querySelector('.about');
const edu=document.querySelector('.edu');
edu.addEventListener("click",function(){
    about.classList.add("active");
    first.style.display="block";
    second.style.display="block";
    third.style.display="block";
    first.innerHTML="2017-2018 -- 10th K_V A_S_C Center";
    second.innerHTML="2019-2020 -- 12th K_V A_S_C Center (PCMC)";
    third.innerHTML="2020-2024 -- Presidency University Bangalore (Btech CSE)" 
    exx.style.display="block"
})

const ach=document.querySelector('.ach');
const exx=document.querySelector('.ex');

ach.addEventListener("click",function(){
    about.classList.add("active");
    first.style.display="block";
    second.style.display="block";
    third.style.display="block";
    first.innerHTML="GFG institute rank 10";
    second.innerHTML="GFG dsa to development scholarship contest rank 191 ";
    third.innerHTML="Coming_Soon...";
    exx.style.display="block"
})

const hob=document.querySelector('.hob');
hob.addEventListener("click",function(){
    first.style.display="block";
    second.style.display="block";
    third.style.display="block";
    first.innerHTML="I enjoy playing cricket";
    second.innerHTML=" playing video games";
    third.innerHTML="Problems solving";
    about.classList.add("active");
    exx.style.display="block"
})

const ex=document.querySelector('.ex');
ex.addEventListener("click",function(){
    about.classList.remove("active");
    ex.style.display="none"
    first.style.display="none";
    second.style.display="none";
    third.style.display="none";
})