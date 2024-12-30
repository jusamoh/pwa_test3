const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const nextLetterBtn = document.getElementById('nextLetter');
const clearCanvasBtn = document.getElementById('clearCanvas');

let currentLetter = 'A';

function drawLetter() {
    ctx.font = '120px Arial';
    ctx.fillStyle = 'lightgray';
    ctx.textAlign = 'center';
    ctx.fillText(currentLetter, canvas.width / 2, canvas.height / 2);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLetter();
}

function nextLetter() {
    currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
    if (currentLetter > 'Z') currentLetter = 'A';
    clearCanvas();
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

nextLetterBtn.addEventListener('click', nextLetter);
clearCanvasBtn.addEventListener('click', clearCanvas);

let isDrawing = false;

function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function draw(e) {
    if (!isDrawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

clearCanvas();
