const $body = document.querySelector('body')
const $header = document.querySelector('header')
const $seccionFormulario = document.querySelector('.contacto')
const $star = document.querySelector('.fa-star')

let modoClaro = false

function temaSitio(){
    $body.classList.toggle('light')
    modoClaro = !modoClaro
    if(modoClaro){
        $header.classList.add('dark')
        $header.classList.remove('light')
        // $seccionFormulario.style.backgroundColor='rgb(230,230,230)'
        $star.style.color='rgb(237, 123, 16)'
    }
    if(!modoClaro){
        $header.classList.add('light')
        // $seccionFormulario.style.backgroundColor='black'
        $star.style.color='rgb(255, 230, 0)'
    }
}

$header.addEventListener('click', function(){
    temaSitio()        
})

$header.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        temaSitio();
    }
});

$header.addEventListener('mouseover', function(){

    if(modoClaro){
        $header.classList.remove('light')
    }

    if(!modoClaro){
        $header.classList.add('light')
    }
})

$header.addEventListener('mouseout', function(){

    if(modoClaro){
        $header.classList.add('light')
    }

    if(!modoClaro){
        $header.classList.remove('light')
    }
})

$header.addEventListener('blur', function(){

    if(modoClaro){
        $header.classList.add('light')
    }

    if(!modoClaro){
        $header.classList.remove('light')
    }
})