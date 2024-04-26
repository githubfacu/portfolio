const $body = document.querySelector('body')
const $header = document.querySelector('header')

let modoClaro = false

function temaSitio(){
    $body.classList.toggle('light')
    modoClaro = !modoClaro
    if(modoClaro){
        $header.classList.add('dark')
        $header.classList.remove('light')
    }
    if(!modoClaro){
        $header.classList.add('light')
    }
}

$header.addEventListener('click', function(){
    temaSitio()        
})


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