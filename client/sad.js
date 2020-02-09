import SVG from 'svg.js'

const sad = () =>{
    if (SVG.supported) {
    const sadDraw = SVG('sad').size(180,120)
    const frown = sadDraw.path('M 10 60 q 55 0 110 0')
    frown.fill('none')
    frown.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
    const eye1 = sadDraw.ellipse(20, 5).fill('#f06').move(10,10)
    const eye2 = sadDraw.ellipse(20, 5).fill('#f06').move(100,10)
    
    // sadSVG = document.getElementById('sad')
    // sadSVG.addEventListener('mouseover', function(){
    //     frown.animate().attr
    // })
    } else {
    alert('SVG not supported')
    }
}

export default sad;