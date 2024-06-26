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
        <section id='${materia.id}'></section>`
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

                const enCursoMsj = document.createElement('h5')
                enCursoMsj.setAttribute('id', materia.id)
                enCursoMsj.innerText='En curso'

                const titulo = document.createElement('h3')
                titulo.innerHTML=`${materia.titulo}`

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
    const enCursoMsj = document.querySelectorAll('.tituloCard h5')

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

                    materia.proyectos.forEach(proyecto=>{

                        const ancla = document.createElement('a')
                        const anclaTextContent = document.createElement('h4')

                        ancla.id = proyecto.proyectoId
                        ancla.href = proyecto.ruta
                        ancla.target = '_blank'
                        anclaTextContent.innerText= proyecto.anclaTexto
                        
                        ancla.appendChild(anclaTextContent)

                        if (!proyecto.personal) {
                            ancla.style.backgroundColor='rgb(255, 230, 0)'
                        }
                        if(proyecto.typescript){
                            ancla.style.backgroundColor='#3178c6'
                        }

                        const spanLink = document.createElement('span')
                        spanLink.innerHTML=`<i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>`

                        ancla.appendChild(spanLink)

                        linksDivHTML.appendChild(ancla)

                        const practicaDiv = document.createElement('div')
                        const practicaDescripcion = document.createElement('p')
                        const practicaImg = document.createElement('img')

                        practicaDescripcion.innerText= proyecto.descripcion
                        practicaImg.setAttribute('src', proyecto.img)
                        practicaImg.setAttribute('alt', 'vista del proyecto en mini.')
                        practicaDiv.appendChild(practicaImg)                        
                        practicaDiv.appendChild(practicaDescripcion)

                        practicaDiv.id = proyecto.proyectoId
                        practicaDiv.classList.add('practicaDiv')
                        practicaDiv.classList.add('hidden')

                        ancla.addEventListener('mouseover',function(){
                            practicaDiv.classList.remove('hidden')

                            setTimeout(() => {
                                practicaDiv.style.opacity='1'
                            }, 200);
                        })
                        ancla.addEventListener('mouseout',function(){
                            practicaDiv.classList.add('hidden')
                            setTimeout(() => {
                                practicaDiv.style.opacity='0'
                            }, 200);
                        })

                        return linksDivHTML.appendChild(practicaDiv)
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