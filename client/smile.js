
import SVG from 'svg.js'

const smile = () =>{
    if (SVG.supported) {
    const smileDraw = SVG('smile').size(180,120)
    const smile = smileDraw.path('M 10 60 q 55 0 110 0')
    smile.fill('none')
    smile.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
    const eye1 = smileDraw.ellipse(20, 5).fill('#f06').move(10,10)
    const eye2 = smileDraw.ellipse(20, 5).fill('#f06').move(100,10)

    } else {
    alert('SVG not supported')
    }
}

export default smile;
