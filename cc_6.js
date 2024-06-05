// U72955273 

class Ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    update(canvas) {
        // Update ball's position and wall colision
        if ((this.x + this.radius > canvas.width && this.dx > 0) || (this.x - this.radius < 0 && this.dx < 0)) {
            this.dx = -this.dx;
        }
        if ((this.y + this.radius > canvas.height && this.dy > 0) || (this.y - this.radius < 0 && this.dy < 0)) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ball = new Ball(200, 160, 2, 2, 20, 'red');

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(context);
    ball.update(canvas);
}

const intervalId = setInterval(animate, 20);