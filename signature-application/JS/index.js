


 const colorPicker = document.getElementById("colorPicker");
  const canvasColor = document.getElementById("canvasColor");
  const canvas = document.getElementById("myCanvas");
  const clearButton = document.getElementById("clearButton");
  const saveButton = document.getElementById("saveButton"); 
const fontPicker = document.getElementById("fontPicker");
const retrieveButton = document.getElementById("retrieveButton");
  const ctx = canvas.getContext("2d");

  colorPicker.addEventListener("change", (event) => {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
  });

  canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;  //kya drawing ho rahi hai 
    lastX = event.offsetX;
    lastY = event.offsetY;
  });

  canvas.addEventListener("mousemove", (event) => {
    if (isDrawing) {    //agar drawing ho rahi hai toh line draw karo
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();

      lastX = event.offsetX;
      lastY = event.offsetY;
    }
  });

canvas.addEventListener("mouseup", (e) => {
    isDrawing = false;
});
  
canvasColor.addEventListener("change", (e) => {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, 800, 500)
});

fontPicker.addEventListener("change", (e) => {
    ctx.lineWidth = e.target.value
});

clearButton.addEventListener("click", (e) => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

saveButton.addEventListener("click", (e) => {
    localStorage.setItem('canvasContents', canvas.toDataURL());
    let link = document.createElement('a')
    link.download = 'my-sign.png'

    link.href = canvas.toDataURL();
    link.click();
})

retrieveButton.addEventListener("click", (e) => {
    let savedCanvas = localStorage.getItem('canvasContents');

    if (savedCanvas) {
        let img = new Image();

        img.src = savedCanvas;
        ctx.drawImage(img,0,0)
    }

})