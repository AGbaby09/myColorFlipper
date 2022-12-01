const hexCode = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const body = document.getElementsByTagName('body')[0];
let colorText = document.querySelector(".color");
const btn = document.getElementById("btn");
function getRandom(){
    return Math.floor(Math.random()*hexCode.length);
}


btn.addEventListener('click', ()=>{
    let index = "#";
    for(let i=0;i<6;i++){
        let num = getRandom();
        index = index+hexCode[num];
    }
    body.style.backgroundColor = index;
    colorText.textContent=index;
});