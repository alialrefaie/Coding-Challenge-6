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
        context.Path();
        context(this.x, this.y, this.color, 0,);
        context.fillStyle = this.color;
        context.closePath();
    }
}