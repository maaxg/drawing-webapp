window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  let painting = false;
  function changePosition(event: MouseEvent) {
    painting = !painting;
    if (painting) draw(event);
    if (!painting) context?.beginPath();
  }
  function draw(event: MouseEvent) {
    if (!painting) return;
    //@ts-ignore
    context.lineWidth = 10;
    //@ts-ignore
    context.lineCap = "round";
    context?.lineTo(event.clientX, event.clientY);
    context?.stroke();
    context?.beginPath();
    context?.moveTo(event.clientX, event.clientY);
  }

  canvas.addEventListener("mousedown", changePosition);
  canvas.addEventListener("mouseup", changePosition);
  canvas.addEventListener("mousemove", draw);
});
