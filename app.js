window.addEventListener(`scroll`,function(){
    let height = document.documentElement.scrollHeight;
    let clientheight = document.documentElement.clientHeight;
    let fonttop = document.documentElement.scrollTop;
    let subheight = height - clientheight;
    let result = Math.round(fonttop * 100 / subheight)
    parent.style.background =  `conic-gradient(#e67e22 ${result}%, #16a085 ${result}%)`;
    child.innerHTML = result; 
})
let parent = document.querySelector(`#parent`)
let child = document.querySelector(`.child`)
