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

let x = 10,
    y = 10;
for (let i = 0; i < 10; i++) {

    new point(x, y)
    x = x + 40;
    y = y + 50

}