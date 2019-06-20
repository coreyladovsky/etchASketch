document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowRight":

        break;
      case "ArrowLeft":

        break;
      case "ArrowUp":

        break;
      case "ArrowDown":

        break;
      default:

    }
  })

const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.arc(15, 15, 10, 0, Math.PI * 2, true)
ctx.fillStyle = 'red'
ctx.fill()

})
