document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#reset").addEventListener("click", () => {
    ctx.clearRect(0, 0, 700, 700);
  });

  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  class Ball {
    constructor(ctx) {
      (this.x = 10),
        (this.y = 10),
        (this.vx = 1),
        (this.vy = 1),
        (this.radius = 1),
        (this.color = "blue"),
        (this.ctx = ctx),
        (this.movement = { up: false, down: false, left: false, right: false });
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      this.ctx.closePath();
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }

    updatePosition() {
      this.y = this.y;
      if (this.movement.up) {
        this.y -= 1;
      }
      if (this.movement.down) {
        this.y += 1;
      }
      if (this.movement.right) {
        this.x += 1;
      }
      if (this.movement.left) {
        this.x -= 1;
      }
    }
  }

  document.addEventListener("keydown", e => {
    switch (e.code) {
      case "ArrowUp":
      case "w":
        ball.movement.down = false;
        ball.movement.up = true;
        break;
      case "ArrowDown":
      case "s":
        ball.movement.up = false;
        ball.movement.down = true;
        break;
      case "ArrowRight":
      case "d":
        ball.movement.left = false;
        ball.movement.right = true;
        break;
      case "ArrowLeft":
      case "a":
        ball.movement.right = false;
        ball.movement.left = true;
        break;
      default:
    }
  });

  let ball = new Ball(ctx);

  function step() {
    // ctx.clearRect(0,0, canvas.width, canvas.height)
    ball.draw();
    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
      ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
      ball.vx = -ball.vx;
    }
    ball.updatePosition()
    requestAnimationFrame(step);
  }

  step();
});
