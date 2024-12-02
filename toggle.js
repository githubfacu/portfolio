const $body = document.querySelector('body')
const $header = document.querySelector('header')
const $cardProyecto = document.querySelector('.cardProyectoContent')
const $linksDivID = document.getElementById('linksDivID')

let modoClaro = $body.classList.contains('light')
$linksDivID.style.backgroundColor='#383134'
$linksDivID.style.color='rgb(243, 245, 250)'

function temaSitio(){
    $body.classList.toggle('light')
    modoClaro = !modoClaro
    if(modoClaro){
        $header.classList.add('dark')
        $header.classList.remove('light')
    }
    if(!modoClaro){
        $header.classList.add('light')
        $header.classList.remove('dark')
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
        $header.classList.add('dark')
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