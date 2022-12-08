window.addEventListener("load", function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    var painting = false;
    function changePosition(event) {
        painting = !painting;
        if (painting)
            draw(event);
        if (!painting)
            context === null || context === void 0 ? void 0 : context.beginPath();
    }
    function draw(event) {
        if (!painting)
            return;
        //@ts-ignore
        context.lineWidth = 10;
        //@ts-ignore
        context.lineCap = "round";
        context === null || context === void 0 ? void 0 : context.lineTo(event.clientX, event.clientY);
        context === null || context === void 0 ? void 0 : context.stroke();
        context === null || context === void 0 ? void 0 : context.beginPath();
        context === null || context === void 0 ? void 0 : context.moveTo(event.clientX, event.clientY);
    }
    canvas.addEventListener("mousedown", changePosition);
    canvas.addEventListener("mouseup", changePosition);
    canvas.addEventListener("mousemove", draw);
});
