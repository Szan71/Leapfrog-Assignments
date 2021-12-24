const myElement = document.getElementById('box');

class point {
    constructor(x, y, width = 15, height = 15) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.point = document.createElement('div')

        this.point.style.width = this.width + "px"
        this.point.style.height = this.height + "px"
        this.point.style.position = "absolute"
        this.point.style.background = "#49a"
        this.point.style.borderRadius = "50%"
        this.point.style.top = this.y + 'px'
        this.point.style.left = this.x + 'px'

        myElement.appendChild(this.point)
    }
}

let point1 = new point(250, 300)
let point2 = new point(160, 350)
let point3 = new point(190, 130)
let point4 = new point(50, 110)
let point5 = new point(156, 97)
let point6 = new point(120, 100)
let point7 = new point(300, 100)
let point8 = new point(450, 200)
let point9 = new point(20, 100)
let point10 = new point(250, 250)