// Query Selector
const pen = document.querySelector('.pen')
const fill = document.querySelector('.fill')
const shading = document.querySelector('.shading')
const color = document.querySelector('.color input')
const eraser = document.querySelector('.eraser')
const zoom = document.querySelector('.zoom')
const view = document.querySelector('.view')
const clear = document.querySelector('.clear')

const draw = document.querySelector('.draw')
const scale = document.querySelector('.scale')
const scaleZoomSmall = document.querySelector('.small')
const scaleZoomMedium = document.querySelector('.medium')
const scaleZoomBig = document.querySelector('.big')
const col = document.getElementById('color')
// Let's play!

// Default props
const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'pen'
const DEFAULT_SIZE = 22

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE


function defaut() {
    pen.classList.add('active')
    view.classList.add('clicked')
    draw.classList.add('borders')
    scaleZoomSmall.classList.add('choosed')
}

window.addEventListener('load', defaut)

// Draw pixel picture
// Listen to mouse event
let isMouseDown = false
draw.addEventListener('mousedown', () => isMouseDown = true)
draw.addEventListener('mouseup', () => isMouseDown = false)

function paint(e) {
    console.log(e.target)
    if (e.type === 'mouseover' && !isMouseDown) return
    if (currentMode === 'pen') {
        e.target.style.backgroundColor = currentColor
    } else if(currentMode === 'eraser') {
        e.target.style.backgroundColor = ''
    }
}

function createGrid(size) {
    draw.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    draw.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size**2; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        square.style.backgroundColor = 'transparent'
        square.addEventListener('mouseover', paint)
        square.addEventListener('mousedown', paint)
        draw.appendChild(square)
    }
}

createGrid(currentSize)

// Set mode
function setMode(mode) {
    activateButton(mode)
    currentMode = mode
}

// Draw
pen.addEventListener('click', () => {
    setMode('pen')
    paint()
})

if (currentMode === 'pen') {
    // paint()
}

fill.addEventListener('click', () => {
    setMode('fill')
    fill.classList.add('active')
    back(currentColor)
})

shading.addEventListener('click', () => {
    setMode('shading')
    shading.classList.add('active')
})

color.addEventListener('click', () => {
    setMode('color')
    color.classList.add('active')
})

eraser.addEventListener('click', () => {
    setMode('eraser')
    eraser.classList.add('active')
})

// Grid size
zoom.addEventListener('click', () => {
    setMode('zoom')
    zoom.classList.add('active')
    scale.classList.toggle('clicked')

    scaleZoomSmall.addEventListener('click', () => {
        scaleZoomSmall.classList.add('choosed')
        scaleZoomMedium.classList.remove('choosed')
        scaleZoomBig.classList.remove('choosed')
        updateSize(22)
    } )

    scaleZoomMedium.addEventListener('click', () => {
        scaleZoomMedium.classList.add('choosed')
        scaleZoomSmall.classList.remove('choosed')
        scaleZoomBig.classList.remove('choosed')
        updateSize(44)
        reloadGrid()
    } )

    scaleZoomBig.addEventListener('click', () => {
        scaleZoomBig.classList.add('choosed')
        scaleZoomSmall.classList.remove('choosed')
        scaleZoomMedium.classList.remove('choosed')
        updateSize(88)
        reloadGrid()
    } )

    fill.classList.remove('active')
    shading.classList.remove('active')
    color.classList.remove('active')
    eraser.classList.remove('active')
    pen.classList.remove('active')
    view.classList.remove('active')
})

// Toggle grid lines
view.addEventListener('click', () => {
    setMode('view')
    view.classList.add('active')
    view.classList.toggle('clicked')
    draw.classList.toggle('borders')

    scale.classList.remove('clicked')
})

// Clear all
clear.addEventListener('click', () => {
    clear.classList.add('active')
    reloadGrid()
    setTimeout(function () {
        clear.classList.remove('active');
      }, 500);
})

// Clear board
function clearGrid() {
    draw.innerHTML = ''
}

// Reload the grid
function reloadGrid() {
    clearGrid() 
    createGrid(currentSize)
}

// Set size 22, 44, 88
function updateSize(value) {
    currentSize = value
    reloadGrid()
}

function activateButton(newMode) {
    if (currentMode === 'pen') {
        pen.classList.remove('active')
    } else if (currentMode === 'fill') {
        fill.classList.remove('active')
    } else if (currentMode === 'shading') { 
        shading.classList.remove('active')
    } else if (currentMode === 'color') {
        color.classList.remove('active')
    } else if (currentMode === 'eraser') {
        eraser.classList.remove('active')
    } else if (currentMode === 'view') {
        view.classList.remove('active')
    } else if (currentMode === 'zoom') {
        zoom.classList.remove('active')
    }

    scale.classList.remove('clicked')
  
    if (newMode === 'pen') {
        pen.classList.add('active')
    } else if (newMode === 'fill') {
        fill.classList.add('active')
    } else if (newMode === 'shading') { 
        shading.classList.add('active')
    } else if (newMode === 'color') {
        color.classList.add('active')
    } else if (newMode === 'eraser') {
        eraser.classList.add('active')
    } else if (newMode === 'view') {
        view.classList.add('active')
    } else if (newMode === 'zoom') {
        zoom.classList.add('active')
    }
}

function updateColor() {
    // currentColor = 
}

function setColor(newColor) {
    currentColor = newColor
    
}

col.addEventListener('input', (e) => {
    setColor(e.target.value)
})

let backColor = draw.style.backgroundColor

function back(newColor) {
    draw.style.backgroundColor = newColor
    // backColor = newColor
}



// Set color
// function setColor(newColor) {
//     currentColor = newColor
// }

// color.addEventListener('input', (e) => {
//     setColor(e.target.value)
// })



// Change the color
// function changeColor(e) {
//     if (e.type === 'mouseover' && isMouseDown) return
//     e.target.style.backgroundColor = '#3333' 
// }

