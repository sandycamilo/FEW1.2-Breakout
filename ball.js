class Ball {
  constructor(color, ballRadius, x, y, dx, dy) {
    this.color = color;
    this.ballRadius = ballRadius;
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
  }

  // method that draws ball on canvas
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

// makes class available in other files
export default Ball