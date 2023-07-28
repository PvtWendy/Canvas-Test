const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
function resize() {
  window.addEventListener("resize", resizeCanvas, false);
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.requestAnimationFrame(drawMousePos());
  }
  resizeCanvas();
}

const mouseObject = {
  x: 0,
  y: 0,
  color: "red",
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, 50, 50);
  },
};
function drawMousePos() {
  let mousePos = { x: undefined, y: undefined };
  window.addEventListener("mousemove", (event) => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    mousePos = { x: event.clientX, y: event.clientY };
    console.log(mousePos);
    mouseObject.x = mousePos.x - 25;
    mouseObject.y = mousePos.y - 25;
    window.requestAnimationFrame(mouseObject.draw());
  });
  window.addEventListener("click", (event) => {
    mouseObject.color = "green";
    setTimeout(() => {
      mouseObject.color = "red";
      window.requestAnimationFrame(mouseObject.draw());
    }, 50);
    window.requestAnimationFrame(mouseObject.draw());
  });
}
window.requestAnimationFrame(resize());
