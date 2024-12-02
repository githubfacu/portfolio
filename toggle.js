const $body = document.querySelector('body')
const $header = document.querySelector('header')
const $cardProyecto = document.querySelector('.cardProyectoContent')
const $divMarcaPersonal = document.querySelector('.divMarcaPersonal')
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
        $cardProyecto.style.backgroundColor='rgb(243, 245, 250)'
        $cardProyecto.style.color='black'
        $divMarcaPersonal.style.backgroundColor='rgb(243, 245, 250)'
        $divMarcaPersonal.style.color='black'
        $linksDivID.style.backgroundColor='#383134'
        $linksDivID.style.color='rgb(243, 245, 250)'
    }
    if(!modoClaro){
        $header.classList.add('light')
        $cardProyecto.style.backgroundColor='#383134'
        $cardProyecto.style.color='rgb(243, 245, 250)'
        $divMarcaPersonal.style.backgroundColor='#383134'
        $divMarcaPersonal.style.color='rgb(243, 245, 250)'
        $linksDivID.style.backgroundColor='rgb(243, 245, 250)'
        $linksDivID.style.color='black'
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