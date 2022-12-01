const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const body = document.getElementsByTagName('body')[0];
let colorText = document.querySelector(".color");


const btn = document.getElementById("btn");
let m=0;
btn.addEventListener('click', ()=>{
    if(m==colors.length){
        m=0;
        body.style.backgroundColor = colors[m];
        colorText.textContent=colors[m];
        m++;
    }else{
        body.style.backgroundColor = colors[m];
        colorText.textContent=colors[m];
        m++;
    }
});