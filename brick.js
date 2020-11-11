class Brick {
  constructor(x, y, status, color, width, height) {
    this.x = x;
    this.y = y;
    this.status = status;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  render(ctx) {
    if (this.status === 1) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }
}

// makes class available in other files
export default Brick;
