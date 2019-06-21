document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#reset").addEventListener("click", () => {
    document.querySelector("#etchContainer").classList.add("shake");
    setTimeout(() => {
      document.querySelector("#etchContainer").classList.remove("shake");
      ctx.clearRect(0, 0, 700, 700);
    }, 500)
  });

  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  class Ball {
    constructor(ctx) {
      (this.x = 10),
        (this.y = 10),
        (this.vx = 1),
        (this.vy = 1),
        (this.radius = 2),
        (this.color = "black"),
        (this.ctx = ctx),
        (this.movement = { up: false, down: false, left: false, right: false });
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2, true);
      this.ctx.fillStyle = 'grey';
      this.ctx.fill();
      this.ctx.closePath();
    }

    updatePosition() {

      if (this.movement.up) {
        this.y -= this.vy;
        if(this.y < 0) {
          this.y += this.vy
        }
      }
      if (this.movement.down) {
        this.y += this.vy;
        if(this.y > canvas.height) {
          this.y -= this.vy
        }
      }
      if (this.movement.right) {
        this.x += this.vx;
        if(this.x > canvas.width) {
          this.x -= this.vx
        }
      }
      if (this.movement.left) {
        this.x -= this.vx;
        if(this.x < 0) {
          this.x += this.vy
        }
      }
    }
  }

  document.addEventListener("keydown", e => {
    switch (e.key) {
      case "ArrowUp":
      case "a":
        ball.movement.down = false;
        ball.movement.up = true;
        break;
      case "ArrowDown":
      case "z":
        ball.movement.up = false;
        ball.movement.down = true;
        break;
      case "ArrowRight":
      case "k":
        ball.movement.left = false;
        ball.movement.right = true;
        break;
      case "ArrowLeft":
      case "m":
        ball.movement.right = false;
        ball.movement.left = true;
        break;
      default:
    }
  });

  document.addEventListener("keyup", e => {
    switch (e.key) {
      case "ArrowUp":
      case "a":
        ball.movement.up = false;
        break;
      case "ArrowDown":
      case "z":
        ball.movement.down = false;
        break;
      case "ArrowRight":
      case "k":
        ball.movement.right = false;
        break;
      case "ArrowLeft":
      case "m":
        ball.movement.left = false;
        break;
      default:
    }
  });

  let ball = new Ball(ctx);

  function step() {
    // ctx.clearRect(0,0, canvas.width, canvas.height)
    ball.draw();
    ball.updatePosition()
    requestAnimationFrame(step);
  }

  step();
});
