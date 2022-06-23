const fill = document.querySelector('.fill')
const shading = document.querySelector('.shading')
const color = document.querySelector('.color')
const eraser = document.querySelector('.eraser')
const zoom = document.querySelector('.zoom')
const view = document.querySelector('.view')
const clear = document.querySelector('.clear')

const draw = document.querySelector('.draw')
const scale = document.querySelector('.scale')
const scaleZoomSmall = document.querySelector('.small')
const scaleZoomMedium = document.querySelector('.medium')
const scaleZoomBig = document.querySelector('.big')

zoom.addEventListener('click', () => {
    scale.classList.toggle('clicked')
})

view.addEventListener('click', () => {
    view.classList.toggle('clicked')
})

scaleZoomSmall.addEventListener('click', () => {
    scaleZoomSmall.classList.add('choosed')
    scaleZoomMedium.classList.remove('choosed')
    scaleZoomBig.classList.remove('choosed')
} )

scaleZoomMedium.addEventListener('click', () => {
    scaleZoomMedium.classList.add('choosed')
    scaleZoomSmall.classList.remove('choosed')
    scaleZoomBig.classList.remove('choosed')
} )

scaleZoomBig.addEventListener('click', () => {
    scaleZoomBig.classList.add('choosed')
    scaleZoomSmall.classList.remove('choosed')
    scaleZoomMedium.classList.remove('choosed')
} )
