
import SVG from 'svg.js'

if (SVG.supported) {
  const smileDraw = SVG('smile').size(300,300)
  const smile = smileDraw.path('M 10 60 q 55 0 110 0')
  smile.fill('none')
  smile.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
  // var ellipse = smileDraw.ellipse(150, 100).fill('#f06').move(20, 20)
  const eye1 = smileDraw.ellipse(20, 5).fill('#f06').move(10,10)
  const eye2 = smileDraw.ellipse(20, 5).fill('#f06').move(100,10)
// path.animate(2000).plot('M 10 10 q 55 200 110 0').loop(true, true)
} else {
  alert('SVG not supported')
}