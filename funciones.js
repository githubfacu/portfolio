import { material } from './Material/datos.js'

const $lineadetiempo = document.getElementById('lineaDeTiempo')

agregarSeccion()
agregarMaterial()
agregarProyectos()
hoverMsj()
clasificarXIndex()

function agregarSeccion(){

    material.forEach(materia => {
        return $lineadetiempo.innerHTML+=`
        <section id='${materia.id}' class='lineaDeTiempo-section' aria-labelledby='titulo-${materia.id}' tabindex="0" role="region"></section>`
    })
}

function agregarMaterial(){

    const $sectionDiv = document.querySelectorAll('#lineaDeTiempo section')

    $sectionDiv.forEach(sectionHTML=>{

        material.forEach(materia => {
            if (parseInt(sectionHTML.id) === materia.id) {

                const tituloCard = document.createElement('div')
                tituloCard.classList.add('tituloCard')

                const enCursoIndice = document.createElement('div')
                enCursoIndice.setAttribute('id', materia.id)
                enCursoIndice.classList.add('enCurso')

                const enCursoMsj = document.createElement('div')
                enCursoMsj.classList.add('enCursoMsj')
                enCursoMsj.setAttribute('id', materia.id)
                enCursoMsj.innerText='En curso'
                enCursoMsj.setAttribute('aria-live', 'polite')

                const titulo = document.createElement('h3')
                titulo.innerHTML=`${materia.titulo}`
                titulo.setAttribute('id', `titulo-${materia.id}`)

                if(materia.enCurso){
                    tituloCard.appendChild(enCursoIndice)
                    tituloCard.appendChild(enCursoMsj)
                    titulo.classList.add('tituloMargin')
                }

                tituloCard.appendChild(titulo)
                sectionHTML.appendChild(tituloCard)

                return sectionHTML.innerHTML+=`
                <h4 class='fecha'>${materia.fecha}</h4>
                <div class='linksDiv' id='${materia.id}'></div>`
            }
        })
    })
}

function hoverMsj(){
    const $msjDiv = document.querySelectorAll('.enCurso')
    const enCursoMsj = document.querySelectorAll('.enCursoMsj')

    $msjDiv.forEach(elemento=>{
        enCursoMsj.forEach(msj=>{
            if(msj.id === elemento.id){
                elemento.addEventListener('mouseover',function(){
                    msj.style.opacity='1'
                })
                elemento.addEventListener('mouseout',function(){
                    msj.style.opacity='0'
                })                
            }
        })
    })
}

function agregarProyectos(){
    const $linksDiv = document.querySelectorAll('.linksDiv') 

    $linksDiv.forEach(linksDivHTML=>{
        material.forEach(materia => {
            if (materia.proyectos.length > 0) {
                if (parseInt(linksDivHTML.id) === materia.id) {
                    materia.proyectos.slice().reverse().forEach(proyecto=>{

                        const anclaContainer = document.createElement('div')
                        anclaContainer.classList.add('anclaContainer')

                        linksDivHTML.appendChild(anclaContainer)

                        const ancla = document.createElement('a')
                        const anclaTextContent = document.createElement('h4')

                        ancla.id = proyecto.proyectoId
                        ancla.href = proyecto.ruta
                        ancla.target = '_blank'
                        ancla.style.backgroundColor='#fc4628'
                        anclaTextContent.innerText= proyecto.anclaTexto
                        ancla.setAttribute('aria-label', `Ver proyecto: ${proyecto.anclaTexto}`)
                        
                        ancla.appendChild(anclaTextContent)

                        if (!proyecto.personal) {
                            ancla.style.backgroundColor='#ffdd1c'
                        }
                        if(proyecto.typescript){
                            ancla.style.backgroundColor='#5faaa7'
                        }

                        const spanLink = document.createElement('span')
                        spanLink.setAttribute('aria-hidden', 'true')
                        spanLink.innerHTML=`<i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>`

                        ancla.appendChild(spanLink)
                        anclaContainer.appendChild(ancla)

                        const practicaDiv = document.createElement('div')
                        const practicaDescripcion = document.createElement('p')
                        const practicaImg = document.createElement('img')

                        practicaDescripcion.innerText= proyecto.descripcion
                        practicaImg.setAttribute('src', proyecto.img)
                        practicaImg.setAttribute('alt', 'vista del proyecto en miniatura.')
                        practicaDiv.appendChild(practicaImg)                        
                        practicaDiv.appendChild(practicaDescripcion)

                        practicaDiv.id = proyecto.proyectoId
                        practicaDiv.classList.add('practicaDiv')
                        practicaDiv.classList.add('hidden')

                        ancla.addEventListener('mouseover', function () {
                            mostrarElemento(practicaDiv);
                        });

                        ancla.addEventListener('focus', function () {
                            mostrarElemento(practicaDiv);
                        });

                        ancla.addEventListener('mouseout', function () {
                            ocultarElemento(practicaDiv);
                        });

                        ancla.addEventListener('blur', function () {
                            ocultarElemento(practicaDiv);
                        });

                        ancla.addEventListener('keydown', function(event) {
                            if (event.key === 'Enter') {
                                setTimeout(() => {
                                    this.blur()
                                }, 100)
                            }
                        });

                        ancla.addEventListener('click', function(event) {
                            anclaContainer.focus()
                            setTimeout(() => {
                                this.blur()
                            }, 100)
                        });

                        return anclaContainer.appendChild(practicaDiv)
                    })
                }
            }
        })           
    })
}

function clasificarXIndex (){

    const $sectionDiv = document.querySelectorAll('#lineaDeTiempo section')
    const $practicaDiv = document.querySelectorAll('#lineaDeTiempo section .practicaDiv')

    if ($sectionDiv.length%2 === 0) {
        $sectionDiv.forEach(((seccion, index) =>{
            if (index % 2 !== 0) {

                const targetElement = seccion.querySelectorAll('.practicaDiv')

                targetElement.forEach(div=>{
                    div.classList.add('mobileDiv')
                })
            }
        }))
    }

    if ($sectionDiv.length %2 !== 0) {

        $sectionDiv.forEach(((seccion, index) =>{
            if (index % 2 !== 0) {

                const targetElement = seccion.querySelectorAll('.practicaDiv')

                targetElement.forEach(div=>{
                    div.classList.add('mobileDiv')
                })
            }
        }))
    }
}

function mostrarElemento(elemento) {
    elemento.classList.remove('hidden');
    setTimeout(() => {
        elemento.style.opacity = '1';
    }, 200);
}

function ocultarElemento(elemento) {
    elemento.classList.add('hidden');
    setTimeout(() => {
        elemento.style.opacity = '0';
    }, 200);
}