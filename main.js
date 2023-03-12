
const animacion = ()=>{
    let container =document.querySelector('.container');
    if(container.className === "container close"){

        res.children[0].classList.add('topAfter');
        res.children[1].style.display = "none";
        res.children[2].classList.add('bottomAfter');
        container.classList.remove('close');

    }else{
        container.classList.add('cerrar');
        res.children[0].classList.remove('topAfter');
        res.children[1].style.display = "";
        res.children[2].classList.remove('bottomAfter');
  
        function desar(){
        container.classList.remove('cerrar');
        container.classList.add('close');
        }
        setTimeout(desar, 700);

    }
}

const res = document.querySelector('.boton');
res.addEventListener('click', animacion)