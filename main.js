let div1 = document.createElement('img')
div1.src = './image/cat.jpg'
div1.className = 'demo'

document.body.appendChild(div1)

var dragging = false
var lastX
var lastY

div1.onmousedown = function(e) {
  dragging = true
  lastX = e.x
  lastY = e.y
}

document.onmousemove = function(e) {
  if (dragging === true) {
    var deltaX = e.x - lastX
    var deltaY = e.y - lastY
    var top = parseInt(div1.style.top) || 0
    var left = parseInt(div1.style.left) || 0
    var resultX = left + deltaX
    if (resultX < 0) { resultX = 0 }
    var resultY = top + deltaY
    if (resultY < 0) { resultY = 0 }
    div1.style.left = resultX + 'px'
    div1.style.top = resultY + 'px'
    lastX = e.x
    lastY = e.y
  }
}

document.onmouseup = function() {
  dragging = false
}
