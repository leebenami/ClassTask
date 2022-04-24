function drawRectAndCalcu() {
  //Draw Rectangle
  const myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");

  const x = document.querySelector("#posX").value;
  const y = document.querySelector("#posY").value;
  const w = document.querySelector("#width").value;
  const h = document.querySelector("#height").value;

  painter.fillStyle = "blue";
  painter.fillRect(x, y, w, h);

  //Calculate Rectangle Area
  const recAreaSpan = document.querySelector("#recAreaSpan");
  const recArea = w * h;

  recAreaSpan.innerText = recArea;
  recAreaSpan.style.display = "inline-block";
}

function validation() {
  const x = +document.querySelector("#posX").value;
  const y = +document.querySelector("#posY").value;
  const w = +document.querySelector("#width").value;
  const h = +document.querySelector("#height").value;
  const recAreaSpan = document.querySelector("#recAreaSpan");

  const xVal = x + w;
  const yVal = y + h;

  if (xVal > 300 || yVal > 300) {
    alert("Invalid values!");
    recAreaSpan.style.display = "none";
  } else {
    drawRectAndCalcu();
  }
}

function clean() {
  //Clear Canvas
  const myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");
  painter.clearRect(0, 0, myCanvas.width, myCanvas.height);

  //Clear Inputs
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== "") {
      inputs[i].value = "";
    }
  }

  //Hide Span
  const recAreaSpan = document.querySelector("#recAreaSpan");
  recAreaSpan.style.display = "none";
}

function onWindowLoad() {
  const calculateBtn = document.querySelector("#calculateBtn");
  const resetBtn = document.querySelector("#resetBtn");
  calculateBtn.onclick = validation;
  resetBtn.onclick = clean;
}

window.onload = onWindowLoad;
