let jack = document.querySelector('.jack')
let projetoBlack = document.querySelector('.projetoBlack')
function mouseOver(){
    jack.style.backgroundColor = 'rgb(48, 46, 46)';
    projetoBlack.style.opacity = 1;
}


function mouseOut() {
    projetoBlack.style.opacity = 0;
    jack.style.backgroundColor = "rgb(40, 156, 156)";
}
