const material = [
    {
        id: 6,
        titulo: 'Simulación Laboral | No Country',
        fecha: 'Abril 2024',
        proyectos: [
            {
                proyectoId: 1,
                ruta: '',
                anclaTexto: 'RecursosHumanosWebApp',
                img: '',
                descripcion: '4 sprints, 4 semanas, 10 integrantes. Rol personal Frontend QA',
                personal: false
            }
        ]
    },
    {
        id: 5,
        titulo: 'Proyecto Integrador | Digital House',
        fecha: 'Febrero 2024',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://gitlab.com/mtimoxenko/integrador',
                anclaTexto: 'BookingApp',
                img: '',
                descripcion: 'Proyecto fin de curso, 8 integrantes. Frontend junto a Amy y Mateo.',
                personal: false
            }
        ]
    },
    {
        id: 4,
        titulo: '&#60; / &#62;',
        fecha: 'Enero 2024',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://arcade-game-vercel.vercel.app',
                anclaTexto: 'ArcadeGame',
                img: '/root/Imagenes/capturas/Captura_arcade-game-vercel.vercel.app.jpeg',
                descripcion: 'Primera práctica con chatGPT, React.',
                personal: true
            },
            {
                proyectoId: 2,
                ruta: 'https://api-football-omega.vercel.app',
                anclaTexto: 'API-FOOTBALL',
                img: '/root/Imagenes/capturas/Captura_api-football-omega.vercel.app.jpeg',
                descripcion: 'Peticiones... React.',
                personal: true
            }            
        ]
    },
    {
        id: 3,
        titulo: 'React',
        fecha: 'Octubre 2023',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://githubfacu.github.io/f1_temporada_23/',
                anclaTexto: 'F1-Temporada2023',
                img: '/root/Imagenes/capturas/Captura_f1.jpeg',
                descripcion: 'Probando ECMAScript6.',
                personal: true
            },
            {
                proyectoId: 2,
                ruta: 'https://psycho-pass.vercel.app',
                anclaTexto: 'TrabajoPráctico',
                img: '/root/Imagenes/capturas/Captura_psycho-pass.vercel.app.jpeg',
                descripcion: 'Trabajo práctico en dupla, React.',
                personal: false
            }            
        ]
    },
    {
        id: 2,
        titulo: 'JavaScript',
        fecha: 'Abril 2023',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://githubfacu.github.io/reproductor_de_musica_js/',
                anclaTexto: 'ReproductorDeMúsica',
                img: '/root/Imagenes/capturas/Captura_reproductor_musica.jpeg',
                descripcion: 'Primer práctica personal, JavaScript vanilla.',
                personal: true
            },
            {
                proyectoId: 2,
                ruta: 'https://githubfacu.github.io/interactive_magazine/',
                anclaTexto: 'InteractiveMagazine',
                img: '/root/Imagenes/capturas/Captura_magazine.jpeg',
                descripcion: 'Interactive Magazine, JavaScript vanilla.',
                personal: true
            }
        ]
    },
    {
        id: 1,
        titulo: 'HTML | CSS',
        fecha: 'Agosto 2022',
        proyectos: [
            {
                proyectoId: 1,
                ruta: 'https://githubfacu.github.io/frontend_uno_page/',
                anclaTexto: 'TrabajoPráctico',
                img: '/root/Imagenes/capturas/Captura_maquetacion_front1.jpeg',
                descripcion: 'Maquetación básica sin funciones.',
                personal: false
            }
        ]
    }
]


const $lineadetiempo = document.getElementById('lineaDeTiempo')

agregarMaterial()
agregarProyectos()

function agregarMaterial(){

    material.forEach(materia => {
        return $lineadetiempo.innerHTML+=`
        <section>
            <h3>${materia.titulo}</h3>
            <h4>${materia.fecha}</h4>
            <div class='linksDiv' id='${materia.id}'></div>
        </section>`
    })    
}


function agregarProyectos(){

    const $linksDiv = document.querySelectorAll('.linksDiv')


    $linksDiv.forEach(linksDivHTML=>{
        console.log(linksDivHTML.id)

        material.forEach(materia => {

            if (materia.proyectos.length > 0) {
                if (parseInt(linksDivHTML.id) === materia.id) {

                    materia.proyectos.forEach(proyecto=>{

                        const ancla = document.createElement('a')
                        ancla.id = proyecto.proyectoId
                        ancla.href = proyecto.ruta
                        ancla.target = '_blank'
                        ancla.textContent = proyecto.anclaTexto

                        if (!proyecto.personal) {
                            ancla.style.backgroundColor='rgb(255, 230, 0)'
                        }

                        linksDivHTML.appendChild(ancla)

                        const practicaDiv = document.createElement('div')
                        const practicaDescripcion = document.createElement('p')
                        const practicaImg = document.createElement('img')

                        practicaDescripcion.innerText= proyecto.descripcion
                        practicaImg.setAttribute('src', proyecto.img)
                        practicaDiv.appendChild(practicaImg)                        
                        practicaDiv.appendChild(practicaDescripcion)

                        practicaDiv.id = proyecto.proyectoId
                        practicaDiv.classList.add('practicaDiv')
                        practicaDiv.style.display='none'

                        ancla.addEventListener('mouseover',function(){
                            practicaDiv.style.display='flex'
                        })
                        ancla.addEventListener('mouseout',function(){
                            practicaDiv.style.display='none'
                        })

                        linksDivHTML.appendChild(practicaDiv)

                    })
                }
            }
        })           
    })
}