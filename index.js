document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#reset").addEventListener("click", () => {
    ctx.clearRect(0,0, 700, 700)
  })
  const ball = {
    x: 15,
    y: 15,
    move: function() {
      ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, true)
      ctx.fillStyle = 'red'
      ctx.fill()
        },
  }
  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowRight":
        ball.x += 5;
        break;
      case "ArrowLeft":
        ball.x -= 5
        break;
      case "ArrowUp":
        ball.y -= 5
        break;
      case "ArrowDown":
        ball.y += 10
        break;
      default:

    }
  })

  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  // let directions = {
  //   left: false,
  //   right: false,
  //   up: false,
  //   down: false
  // }

const draw_reset = () => {
    const ctx = canvas.getContext("2d")
    ctx.font = "50px Arial";
    ctx.fillText("N",330,50);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 15, 0, Math.PI * 2, true)
    ctx.moveTo(110, 110);
    ctx.stroke();
}

function step() {

  draw_reset()
  ball.move()
  requestAnimationFrame(step)
}

step()

})
